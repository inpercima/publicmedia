<?php

class LastPostService {

  private $responseCode = null;

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Get the last post converted from an instagram item by username.
   *
   * @param integer $username the instagram username
   */
  public function getLastPostByParamA($username) {
    $url = "https://www.instagram.com/$username/?__a=1";
    $content = file_get_contents($url);
    $this->responseCode = end(preg_grep("/HTTP\/\d.\d (\d+)/", $http_response_header));
    return json_encode($this->createPost($this->getLastItem(json_decode($content)->graphql->user->edge_owner_to_timeline_media->edges)));
  }

  /**
   * Get the last post converted from an instagram item by user id.
   *
   * @param integer $userId the instagram user id
   */
  public function getLastPostByGraphQl($userId) {
    $url = "https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b";
    $variables = "&variables={\"id\":\"$userId\",\"first\":\"50\"}";
    $content = file_get_contents($url.$variables);
    $this->responseCode = end(preg_grep("/HTTP\/\d.\d (\d+)/", $http_response_header));
    return json_encode($this->createPost($this->getLastItem(json_decode($content)->data->user->edge_owner_to_timeline_media->edges)));
  }

  /**
   * Extract the last posted item on instagram.
   *
   * @param object $items the instagram items
   * @return object the last item
   */
  private function getLastItem($items) {
    return $items[0]->node;
  }

  /**
   * Convert an instagram item with some data into a post.
   *
   * @param object $item the instagram item
   * @return array created post
   */
  private function createPost($item) {
    return array(
      'id' => $item->id,
      'picture' => $item->display_url,
      'likes' => $item->edge_media_preview_like->count,
      'date' => $item->taken_at_timestamp * 1000,
      'responseCode' => $this->responseCode
    );
  }
}
?>

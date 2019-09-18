<?php
class LastPostService {

  private $responseCode = null;

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Checks parameter and return the result json encoded.
   *
   * @param string $query the instagram username
   */
  public function getJson($query) {
    parse_str($query, $queryArr);
    $result = null;
    if (isset($queryArr) && !is_null($queryArr)) {
      if (isset($queryArr['type']) && $queryArr['type'] == '1') {
        $result = $this->getLastPostByUsername($queryArr['username']);
      } else {
        $result = $this->getLastPostByUserId($queryArr['userId']);
      }
    }
    return json_encode($result);
  }

  /**
   * Get the last post converted from an instagram item by username.
   *
   * @param string $username the instagram username
   */
  private function getLastPostByUsername($username) {
    return $this->createPost($this->getLastItem($this->listLastItems($username)));
  }

  /**
   * Get the last post converted from an instagram item by user id.
   *
   * @param integer $userId the instagram user id
   */
  private function getLastPostByUserId($userId) {
    return $this->createPost($this->getLastItem($this->listLastItemsByUserId($userId)));
  }

  /**
   * Load data from public instagram account.
   *
   * @param string $username the instagram username
   * @return object instagram items
   */
  private function listLastItems($username) {
    $content = file_get_contents('https://www.instagram.com/' . $username);
    preg_match('/_sharedData = ({.*);<\/script>/', $content, $matches);
    $this->responseCode = end(preg_grep("/HTTP\/\d.\d (\d+)/", $http_response_header));
    return json_decode($matches[1])->entry_data->ProfilePage[0]->graphql->user->edge_owner_to_timeline_media->edges;
  }

  /**
   * Load data from public instagram account.
   *
   * @param integer $userId the instagram user id
   * @return object instagram items
   */
  private function listLastItemsByUserId($userId) {
    $url = "https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b";
    $variables = "&variables={\"id\":\"$userId\",\"first\":\"50\"}";
    $content = file_get_contents($url.$variables);
    $this->responseCode = end(preg_grep("/HTTP\/\d.\d (\d+)/", $http_response_header));
    return json_decode($content)->data->user->edge_owner_to_timeline_media->edges;
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

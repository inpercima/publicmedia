<?php
class InstagramService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Checks parameter and return the result json encoded.
   *
   * @param string $username the instagram username
   */
  public function getJson($username) {
    $result = null;
    if (isset($username) && !is_null($username)) {
      $result = $this->getLastPost($username);
    }
    return json_encode($result);
  }

  /**
   * Get the last post converted from an instagram item.
   * 
   * @param string $username the instagram username
   */
  private function getLastPost($username) {
    return $this->createPost($this->getLastItem($this->listLastItems($username)));
  }

  /**
   * Load data from public instagram account.
   *
   * @param string $username the instagram username
   * @return object instagram items
   */
  private function listLastItems($username) {
    $content = file_get_contents('https://www.instagram.com/' . $username);
    $content = explode('window._sharedData = ', $content)[1];
    $content = explode(';</script>', $content)[0];
    $data = json_decode($content);
    return $data->entry_data->ProfilePage[0]->graphql->user->edge_owner_to_timeline_media->edges;
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
      'likes' => $item->edge_liked_by->count,
      'date' => $item->taken_at_timestamp * 1000
    );
  }

}
?>

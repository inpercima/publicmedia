<?php
class InstagramService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Checks parameter and return the result json encoded.
   *
   * @param string $query
   */
  public function getJson($query) {
    $result = null;
    if ($query == 'getLast') {
      $result = $this->getLastPost();
    }
    return json_encode($result);
  }

  /**
   * Get the last post converted from an instagram item.
   */
  private function getLastPost() {
    return $this->createPost($this->getLastItem($this->listLastItems()));
  }

  /**
   * Load data from public instagram account.
   *
   * @param string $user the instagram username
   * @return object instagram items
   */
  private function listLastItems() {
    $config = json_decode(file_get_contents('config.json'));
    $baseUrl = 'https://instagram.com/{username}/?__a=1';
    $json = json_decode(file_get_contents(str_replace('{username}', $config->username, $baseUrl)));
    return $json->user->media->nodes;
  }

  /**
   * Extract the last posted item on instagram.
   *
   * @param object $items the instagram items
   * @return object the last item
   */
  private function getLastItem($items) {
    return $items[0];
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
      'picture' => $item->display_src,
      'likes' => $item->likes->count,
      'date' => $item->date * 1000
    );
  }

}
?>

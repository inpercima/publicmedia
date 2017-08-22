<?php
  function getLastItem($items) {
    return $items[0];
  }

  function listLastItems($url) {
    $json = json_decode(file_get_contents($url));
    return $json->items;
  }

  function getLast($url) {
    return createPost(getLastItem(listLastItems($url)));
  }

  function createPost($item) {
    return array(
      'id' => $item->id,
      'url' => $item->images->low_resolution->url,
      'likes' => $item->likes->count,
      'date'  => date('m.d.Y', $item->created_time)
    );
  }

  $userUrl = 'https://instagram.com/instagram/media/';
  $query = $_SERVER['QUERY_STRING'];

  echo json_encode(getLast($userUrl));
?>

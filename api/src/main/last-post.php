<?php
require_once 'last-post.service.php';

$lastPostService = new LastPostService();

// return json to client
echo $lastPostService->getJson($_SERVER['QUERY_STRING']);
?>

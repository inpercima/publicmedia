<?php
require_once 'last-post.service.php';

$lastPostService = new LastPostService();

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type");

// return json to client
echo $lastPostService->getLastPost();
?>

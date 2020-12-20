<?php
$mode = strpos($_SERVER['SERVER_NAME'], 'localhost') ? 'dev' : 'prod';
require_once "config.${mode}.php";
require_once 'last-post.service.php';

$lastPostService = new LastPostService();

$query = $_SERVER['QUERY_STRING'];
parse_str($query, $queryArr);
$type = $queryArr['type'];

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type");

// return json to client
switch ($type) {
  case 'paramA':
    echo $lastPostService->getLastPostByParamA(Config::USERNAME);
    break;
  default:
    echo $lastPostService->getLastPostByGraphQl(Config::USER_ID);
    break;
}
?>

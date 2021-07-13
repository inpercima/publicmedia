<?php
require_once '../service/core.service.php';
$coreService = new CoreService();

require_once $coreService->requireConfig();
require_once '../service/last-post.service.php';

$coreService->setHeader();
$type = $coreService->getParam('type');
$userId = $coreService->getParam('userId');
$username = $coreService->getParam('username');

$lastPostService = new LastPostService();
switch ($type) {
  case '1':
    echo $lastPostService->getLastPostByPathMedia($username);
    break;
  case '2':
    echo $lastPostService->getLastPostByParamA($username);
    break;
  case '3':
    echo $lastPostService->getLastPostByInlineScript($username);
    break;
  default:
    echo $lastPostService->getLastPostByGraphQl($userId);
    break;
}
?>

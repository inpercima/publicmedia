<?php
require_once '../service/core.service.php';
$coreService = new CoreService();

require_once $coreService->requireConfig();
require_once '../service/last-post.service.php';

$coreService->setHeader();
$type = $coreService->getParam('type');

$lastPostService = new LastPostService();
switch ($type) {
  case 'paramA':
    echo $lastPostService->getLastPostByParamA(Config::USERNAME);
    break;
  default:
    echo $lastPostService->getLastPostByGraphQl(Config::USER_ID);
    break;
}
?>

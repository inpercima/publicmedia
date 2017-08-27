<?php
require_once 'instagram.service.php';

$instagramService = new InstagramService();

// return json to client
echo $instagramService->getJson($_SERVER['QUERY_STRING']);
?>

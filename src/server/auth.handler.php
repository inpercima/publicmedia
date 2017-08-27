<?php
require_once 'auth.service.php';

$authService = new AuthService();
echo $_SERVER['QUERY_STRING'] == 'authenticate' ? $authService->authenticate() : $authService->isAuthenticated();
?>

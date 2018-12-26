<?php
require_once 'auth.service.php';

$authService = new AuthService();

// return json to client
echo $authService->authenticate();
?>

<?php
class AuthService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Simulate a simple login authentication.
   * @param string $query
   */ 
  public function authenticate($query) {
    $result = 'Username or password is incorrect.';
    if ($query == 'authenticate' && $_POST['username'] == 'inpercima' && $_POST['password'] == 'inpercima') {
      $result = $this->generateToken($_POST['username']);
    }
    return json_encode($result);
  }

  /**
   * Generate a simple jwt to authenticate.
   * @param string $username
   */ 
  function generateToken($username) {
    $header = $this->base64url_encode(json_encode(array('alg' => 'HS256', 'typ' => 'JWT')));
    $payload = $this->base64url_encode(json_encode(array('username' => $username)));
    $signature = $this->base64url_encode(hash_hmac('sha256', "$header.$payload", 'secretKey', true));
    return "$header.$payload.$signature";
  }

  /**
   * Helper function to base64Url encode.
   * @param string $data
   */
  function base64url_encode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
  }

}
?>

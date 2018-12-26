<?php
class AuthService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Simulate a simple login authentication.
   */
  public function authenticate() {
    $request = json_decode(file_get_contents("php://input"));
    $result = array('message' => 'Username or password is incorrect');
    if ($request->username == 'publicmedia' && $request->password == 'publicmedia') {
      $result = array('token' => $this->generateToken($request->username));
    } else {
      http_response_code(400);
    }
    return json_encode($result);
  }

  /**
   * Generate a simple jwt to authenticate.
   * @param string $username
   */
  function generateToken($username) {
    $header = $this->base64url_encode(json_encode(array('alg' => 'HS256', 'typ' => 'JWT')));
    $iat = time();
    $nbf = $iat + 10;
    $exp = $nbf + 7200;
    $payload = $this->base64url_encode(json_encode(array('username' => $username, 'exp' => $exp, 'nbf' => $nbf, 'iat' => $iat)));
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

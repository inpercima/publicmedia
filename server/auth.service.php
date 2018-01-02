<?php
class AuthService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Simulates a simple login authentication.
   * @param string $query
   */ 
  public function authenticate($query) {
    $result = false;
    if ($query == 'authenticate' && $_POST['username'] == 'inpercima' && $_POST['password'] == 'publicmedia') {
      $result = true;
    }
    return json_encode($result);
  }

}
?>

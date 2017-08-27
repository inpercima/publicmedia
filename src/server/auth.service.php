<?php
class AuthService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Simulates a simple login authentication.
   */ 
  public function authenticate() {
    if ($_POST['username'] == 'inpercima' && $_POST['password'] == 'publicmedia') {
      @session_start();
      $_SESSION["loggedIn"] = true;
    }
    return $this->isAuthenticated();
  }

  /**
   * Check state.
   *
   */
  public function isAuthenticated() {
    return json_encode(isset ($_SESSION["loggedIn"]) && $_SESSION["loggedIn"]);
  }

}
?>

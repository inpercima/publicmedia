<?php

class CoreService {

  /**
   * constructor
   */
  public function __construct() {}

  /**
   * Checks which config should be used.
   * If the environment variable MODE is set, the value of this variable will be checked and the appropriate config file will be used.
   * MODE = prod   means 'config.prod.php'
   * MODE = dev    means 'config.dev.php'
   * MODE !== prod means 'config.dev.php'
   * 
   * If the variable is not set, the config file depending on the server name will be used.
   * Servername = 'localhost' means 'config.dev.php'
   * Servername !== 'localhost' means 'config.prod.php'
   */
  public function requireConfig() {
    $env = getenv('MODE');
    if (!empty($env)) {
      if ($env === 'prod') {
        $mode = 'prod';
      } else {
        $mode = 'dev';
      }
    } else {
      $mode = strpos($_SERVER['SERVER_NAME'], 'localhost') === false ? 'prod' : 'dev';
    }
    return "../config/config.${mode}.php";
  }

  public function setHeader() {
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
  }

  public function getParams() {
    $query = $_SERVER['QUERY_STRING'];
    parse_str($query, $queryArr);
    return $queryArr;
  }

  public function getParam($param) {
    $params = $this->getParams();
    return $params[$param];
  }
}
?>

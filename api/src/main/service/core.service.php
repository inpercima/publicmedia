<?php

class CoreService {

  /**
   * constructor
   */
  public function __construct() {}

  public function requireConfig() {
    $mode = strpos($_SERVER['SERVER_NAME'], 'localhost') === false ? 'prod' : 'dev';
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

<?php
namespace App\Database;

class Database {
    protected static $host = "localhost";
    protected static $username = "root";
    protected static $password = "";
    protected static $database = "userlist";

    public static function getConnection() {

        $conn = new \mysqli(
            self::$host,
            self::$username,
            self::$password,
            self::$database
        );

        if ($conn->connect_error) {
            die("Connection failed.");
        }

        return $conn;
    }
}
?>
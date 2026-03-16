<?php
include "../db/config.php";

$name   = $_POST['name'];
$email  = $_POST['email'];
$age    = $_POST['age'];
$gender = $_POST['gender'];

$query = "INSERT INTO users (name, email, age, gender)
          VALUES ('$name', '$email', '$age', '$gender')";

mysqli_query($conn, $query);
?>
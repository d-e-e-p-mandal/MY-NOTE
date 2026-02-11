<?php
include "../db/config.php";

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$age = $_POST['age'];
$gender = $_POST['gender'];

mysqli_query($conn,
    "UPDATE users SET
     name='$name', email='$email', age='$age', gender='$gender'
     WHERE id=$id"
);
?>
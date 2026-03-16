<?php
include "../db/config.php";
$id = $_POST['id'];
mysqli_query($conn, "DELETE FROM users WHERE id=$id");
?>
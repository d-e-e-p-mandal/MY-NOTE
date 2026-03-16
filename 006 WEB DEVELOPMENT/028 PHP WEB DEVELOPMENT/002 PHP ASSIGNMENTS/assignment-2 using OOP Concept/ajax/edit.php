<?php
require_once "../classes/Database.php";
require_once "../classes/CandidateManager.php";

use App\Database\Database;
use App\Services\CandidateManager;

$conn = Database::getConnection();
$manager = new CandidateManager($conn);

$id = $_POST['id'];

$result = $manager->getById($id);
$row = $result->fetch_assoc();
?>

<h3>Edit User</h3>

<form id="updateForm">
    <input type="hidden" name="id" value="<?= $row['id'] ?>">

    <input type="text" name="name" value="<?= $row['name'] ?>" required>
    <input type="email" name="email" value="<?= $row['email'] ?>" required>
    <input type="number" name="age" value="<?= $row['age'] ?>" required>

    <select name="gender">
        <option value="Male" <?= $row['gender']=='Male'?'selected':'' ?>>Male</option>
        <option value="Female" <?= $row['gender']=='Female'?'selected':'' ?>>Female</option>
    </select>

    <button type="submit">Update</button>
</form>
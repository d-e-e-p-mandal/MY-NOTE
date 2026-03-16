<?php
require_once "classes/Database.php";
require_once "classes/CandidateManager.php";

use App\Database\Database;
use App\Services\CandidateManager;

$conn = Database::getConnection();
$manager = new CandidateManager($conn);

$result = $manager->getAll();
?>

<table border="1">
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Action</th>
</tr>

<?php 


while($row = $result->fetch_assoc()) { ?>
<tr>
    <td><?= $row['name'] ?></td>
    <td><?= $row['email'] ?></td>
    <td><?= $row['age'] ?></td>
    <td><?= $row['gender'] ?></td>
    <td>
        <button class="deleteBtn" data-id="<?= $row['id'] ?>">Delete</button>
        <button type="button" class="editBtn" data-id="<?= $row['id'] ?>">Edit</button>
    </td>
</tr>
<?php } ?>

</table>
<?php
include "db/config.php";

$result = mysqli_query($conn, "SELECT * FROM users");
?>

<table border="1">
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Action</th>
</tr>

<?php while ($row = mysqli_fetch_assoc($result)) { ?>
<tr>
    <td><?= $row['name'] ?></td>
    <td><?= $row['email'] ?></td>
    <td><?= $row['age'] ?></td>
    <td><?= $row['gender'] ?></td>
    <td>
        <button onclick="editUser(<?= $row['id'] ?>)">Edit</button>
        <button onclick="deleteUser(<?= $row['id'] ?>)">Delete</button>
    </td>
</tr>
<?php } ?>
</table>
function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "list.php", true);
    xhr.onload = function () {
        document.getElementById("tableData").innerHTML = this.responseText;
    };
    xhr.send();
}
loadUsers();

document.getElementById("userForm").onsubmit = function (e) {
    e.preventDefault();

    var data = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "ajax/submit.php", true);
    xhr.onload = function () {
        loadUsers();
        document.getElementById("userForm").reset();
    };
    xhr.send(data);
};

function deleteUser(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "ajax/delete.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
        loadUsers();
    };
    xhr.send("id=" + id);
}
$(document).ready(function(){

    function loadUsers() {
        $.ajax({
            url: "list.php",
            type: "GET",
            success: function(data) {
                $("#tableData").html(data);
            }
        });
    }
    loadUsers();


    $("#userForm").on("submit", function(e){
        e.preventDefault();

        $.ajax({
            url: "ajax/submit.php",
            type: "POST",
            data: $(this).serialize(),
            success: function() {
                loadUsers();
                $("#userForm")[0].reset();
            }
        });
    });

    $(document).on("click", ".deleteBtn", function () {
        var uid = $(this).data("id");
        alert(uid);
    
        $.ajax({
            url: "ajax/delete.php",
            type: "POST",
            data: { id: uid },
            success: function (data) {
                console.log("s");
                
                loadUsers();
            }
        });
    });

    $(document).on("click", ".editBtn", function(e){

        var id = $(this).data("id");
    
        $.ajax({
            url: "ajax/edit.php",
            type: "POST",
            data: { id: id },
            success: function(data){
                $("#editSection").html(data);
                $("#overlay").css("display", "flex");
            }
        });
    
    });

    $(document).on("submit", "#updateForm", function(e){
        e.preventDefault();
    
        $.ajax({
            url: "ajax/update.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(){
                loadUsers();
                $("#editSection").html("");
            }
        });
    });

    $(document).on("submit", "#updateForm", function(e){
        e.preventDefault();
    
        $.ajax({
            url: "ajax/update.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(){
                loadUsers();
                $("#overlay").hide();
            }
        });
    });


    $("#overlay").on("click", function(e){
        if(e.target.id === "overlay") {
            $("#overlay").hide();
        }
    });

});
```JAVASCRIPT
//$(document).on("click", ".deleteBtn", function(){
$(".deleteBtn").on("click", function(){
    var id = $(this).data("id");
    deleteUser(id);
});
```
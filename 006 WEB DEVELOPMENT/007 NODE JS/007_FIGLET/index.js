const figlet = require("figlet"); //given in website

figlet("suman mondal", function(err,data){
    if(err){
        console.log("something went wrong");
        console.dir(err);
        return;
    }
    console.log(data);
    
});
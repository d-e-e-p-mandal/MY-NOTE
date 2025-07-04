const figlet = require("figlet"); //given in website

figlet("Deep mondal", function(err,data){
    if(err){
        console.log("something went wrong");
        console.dir(err);
        return;
    }
    console.log(data);
    
});

/*Output :
  ____                                              _       _ 
 |  _ \  ___  ___ _ __    _ __ ___   ___  _ __   __| | __ _| |
 | | | |/ _ \/ _ \ '_ \  | '_ ` _ \ / _ \| '_ \ / _` |/ _` | |
 | |_| |  __/  __/ |_) | | | | | | | (_) | | | | (_| | (_| | |
 |____/ \___|\___| .__/  |_| |_| |_|\___/|_| |_|\__,_|\__,_|_|
                 |_|                                          
*/
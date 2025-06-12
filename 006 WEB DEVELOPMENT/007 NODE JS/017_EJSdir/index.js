import express from "express";
const app = express();

let port = 3000;

//express import also import ejs 
app.set("view engine","ejs");
//app.set("views", path.join(__dirname,"/views")); //when we start server from another directory like 007 NODE js directory

app.listen(port,()=>{
    console.log("server starting..........");
});

app.get("/",(req,res)=>{
    res.render("home.ejs"); //res.render use to show a file
});

app.get("/home",(req,res)=>{
    res.send("This is home.");
});


app.get("/rolldice",(req,res) =>{
    let num = Math.floor(Math.random() * 6 +1);
    res.render("rollDice.ejs",{diceVal : num});
    //or -   res.render("rollDice.ejs",{num});
});

app.get("/ig/:usrname",(req,res)=>{
    let {usrname} = req.params;
    console.log(usrname);
    
    res.render("insta.ejs",{usrname});
});
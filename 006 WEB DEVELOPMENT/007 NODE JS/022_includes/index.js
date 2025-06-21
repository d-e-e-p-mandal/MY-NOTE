const express = require("express");
const path = require("path");

const app = express();
let port = 3000;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port,()=>{
    console.log("server start..........");
});

app.get("/:username",(req,res)=>{
    let {username} = req.params;
    let instaData = require("./data.json");

    let data = instaData[username];
    res.render("home.ejs",{data});
});
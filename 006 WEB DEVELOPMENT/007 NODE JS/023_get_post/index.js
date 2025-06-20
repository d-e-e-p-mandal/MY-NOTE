const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
// app.use(express.json); for json file

const port = 3000;
app.listen(port,()=>{
    console.log("server started...........");
});

app.get("/register",(req,res)=>{
    let {user, password} = req.query;
    res.send(`Form submit sussful by get ${user}`);
});


app.post("/register",(req,res)=>{
    let {user, password} = req.body;
    res.send(`Form submit sussful by post ${user}`);
});
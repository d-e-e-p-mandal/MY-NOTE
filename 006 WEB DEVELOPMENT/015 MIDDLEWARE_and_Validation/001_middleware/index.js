const express = require("express");
const app = express();


app.use((req,res)=>{
    console.log("Hi, I am middleware");
    res.send("This is middleware");
});

app.get("/", (req,res)=>{
    res.send("Hi, I am root");
});

app.get("/random", (req,res)=>{
    res.send("This is random page");
});

app.listen(8080,()=>{
    console.log("server is listining on 8080 port");
})
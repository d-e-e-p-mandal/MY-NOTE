const express = require("express");
const app = express();


app.use((req,res, next)=>{
    console.log("Hi, I am 1st middleware");
    next();
    //console.log("This is after next"); // This is not recomended
});

app.use((req,res, next)=>{
    console.log("Hi, I am 2nd middleware");
    return next();
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
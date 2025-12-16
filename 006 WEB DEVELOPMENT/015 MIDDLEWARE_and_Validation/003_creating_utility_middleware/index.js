const express = require("express");
const app = express();

// req objecet
app.use((req,res, next)=>{
    console.log(req);
    next();
});

// req.method
app.use((req,res, next)=>{
    console.log(req.method);
    next();
});

// req.hostname
app.use((req,res, next)=>{
    console.log(req.hostname);
    next();
});

//req.path
app.use((req,res, next)=>{
    console.log(req.path);
    next();
});
// time
app.use((req,res, next)=>{
    req.time = new Date(Date.now()).toString();
    next();
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
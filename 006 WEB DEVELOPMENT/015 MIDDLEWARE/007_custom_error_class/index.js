const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

const checkToken = (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess") {
        next();
    }

    throw new ExpressError(402,"ACESS DENIED!");
}

app.get("/api", checkToken, (req,res)=>{
    res.send("data");
});

app.get("/", (req,res)=>{
    res.send("Hi, I am root");
});

app.listen(8080,()=>{
    console.log("server is listining on 8080 port");
})
const express = require("express");
const app = express();

const session = require("express-session");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized: true,
}

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
    let {name = "Anonymous"} = req.query; // we will send name in request : http://localhost:3000/register?name=deep
    //console.log(req.session);
    req.session.name = name;
    res.send(name);
});

app.get("/hello", (req, res)=>{
    res.send(`Hello ${req.session.name}`);
});

app.listen(3000, () => {
    console.log("Server is listening to 3000");
});


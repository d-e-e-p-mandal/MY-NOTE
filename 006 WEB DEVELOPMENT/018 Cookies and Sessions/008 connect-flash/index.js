const express = require("express");
const app = express();
const path = require("path");

const flash = require("connect-flash");
const session = require("express-session");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized: true,
}

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
    let {name = "Anonymous"} = req.query; // we will send name in request : http://localhost:3000/register?name=deep
    //console.log(req.session);
    req.session.name = name;
    req.flash("success", "user register successfully");
    //res.send(name);
    res.redirect("/hello");
});

app.get("/hello", (req, res)=>{
    // res.send(`Hello ${req.session.name}`);
    console.log("success");
    res.render("page.ejs",{name : req.session.name, msg: req.flash("success")});
});

app.listen(3000, () => {
    console.log("Server is listening to 3000");
});


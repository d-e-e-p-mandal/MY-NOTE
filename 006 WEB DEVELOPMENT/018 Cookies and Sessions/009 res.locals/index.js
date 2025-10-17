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

    if(name === "Anonymous") {
        req.flash("error", "user not registered");
    }else {
        req.flash("success", "user register successfully");
    }
    //res.send(name);
    res.redirect("/hello");
});

app.get("/hello", (req, res)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    res.render("page.ejs", {name : req.session.name});
});

app.listen(3000, () => {
    console.log("Server is listening to 3000");
});


# Connect-flash :
The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.

- To use connect-flash it compulsory to use session 

#### Installtion :
```bash
npm install connect-flash
```

```js
const flash = require("connect-flash");
app.use(flash());
```

```js
const express = require("express");
const app = express();

const flash = require("connect-flash");
const session = require("express-session");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized: true,
}

app.use(session(sessionOptions));
app.use(flash());
```
- #### IN flash we send key and value pair
```js
req.flash("key", "value");
```

#### flash only show `1st time`.
```js
req.flash("success", "user register successfully");
```

```js
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
```

- To display we use ejs file in views direcotory 



```js
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

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%= msg %>
    <h1>Hellow, <%= name %></h1>
</body>
</html>
```
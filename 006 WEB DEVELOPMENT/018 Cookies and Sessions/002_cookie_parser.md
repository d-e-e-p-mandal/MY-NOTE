# Cookie Parser :

#### Reason why we use cookie parser :
```js
app.get("/", (req, res) => {
    console.dir(req.cookies); // Prints cookies in terminal
    res.send(req.cookies);    // Sends cookies as JSON in browser
});
```
It print undefine. To solve this problem we use cookie parser.

#### Install : 
    npm i cookie-parser

```js
const cookieParser = require("cookie-parser");
app.use(cookieParser());
```

```js
const express = require("express");
const app = express();

// cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/setname", (req, res) => {
    res.cookie("name", "deep"); // greet = name, hello = value
    res.send("Sent you some cookies!");
});
// Root route: print all cookies
app.get("/", (req, res) => {
    console.dir(req.cookies); // Prints cookies in terminal
    res.send(req.cookies);    // Sends cookies as JSON in browser
});

app.get("/greet", (req, res)=>{
    let {name = "anonymous"} = req.cookies;
    res.send(`Hi, ${name}`);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
```
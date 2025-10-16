const express = require("express");
const app = express();

// cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req, res) => {
    res.cookie("city", "gr-noida", {signed: true}); // greet = name, hello = value
    res.send("signed cookies send");
});
// Root route: print all cookies
app.get("/", (req, res) => {
    console.dir(req.signedCookies); // Prints cookies in terminal
    res.send(req.signedCookies);    // Sends cookies as JSON in browser
});


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
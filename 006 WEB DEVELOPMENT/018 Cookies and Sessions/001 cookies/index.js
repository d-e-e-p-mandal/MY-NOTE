const express = require("express");
const app = express();

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello"); // greet = name, hello = value
    res.cookie("made-in", "india"); // greet = name, hello = value
    res.send("Sent you some cookies!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
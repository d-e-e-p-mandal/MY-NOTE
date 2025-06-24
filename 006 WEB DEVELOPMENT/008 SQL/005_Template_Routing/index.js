const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
let port = 3000;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

// ✅ MySQL connection setup
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'College',
    password : 'Deep@2120',
    port : 3306
});


// ✅ Homepage route - count number of rows in students table
app.get("/", (req, res) => {
    const query = "SELECT COUNT(*) FROM students";
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send("Database error");
        }

        const total = results[0]["COUNT(*)"]; // Or use dynamic key
        res.render("home.ejs", { total }); // ✅ Pass total to EJS
    });
});


app.get("/users", (req, res) => {
    const query = "SELECT * FROM students";
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).send("Database error");
        }
        res.render("allUsersInfo", { results }); // ✅ cleaned up
    });
});


// ✅ Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
const express = require("express");
const app = express();

const port = 8080;

const path = require("path");
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

const mongoose = require('mongoose');
main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch(err => console.log(err));

const Chat = require("./models/chat.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); // like chat app
  }

let chat1 = new Chat({
    from : "neha",
    to : "priya",
    msg : "send me your exam sheets",
    created_at : new Date()
});

chat1.save().then((res)=>{
    console.log(res);
});

app.get("/",(req,res)=>{
    res.send("root is working");
});


app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})
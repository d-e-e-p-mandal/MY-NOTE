const express = require("express");
const app = express();

const port = 8080;

const path = require("path");
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

//mongo db connection
const mongoose = require('mongoose');
main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); // like chat app
  }

  // models 
  const Chat = require("./models/chat");

// index chat route 
app.get("/chats",async (req,res)=>{
    
    let chats = await Chat.find();
    //res.send("working it");

    res.render("index.ejs",{chats});
});




app.get("/",(req,res)=>{
    res.send("root is working");
});


app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})
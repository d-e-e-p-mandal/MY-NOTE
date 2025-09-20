const express = require("express");
const app = express();

const port = 8080;

const path = require("path");
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

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

app.get("/chats/new",(req,res)=>{

    res.render("newchat.ejs");
});

app.post("/chats",(req,res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        to:to,
        from : from,
        msg:msg,
        created_at:new Date,
    })

    newChat.save()
   .then(() => console.log("chat saved"))
   .catch(err => console.log(err));

   res.redirect("/chats");
    
});



app.get("/",(req,res)=>{
    res.send("root is working");
});


app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})
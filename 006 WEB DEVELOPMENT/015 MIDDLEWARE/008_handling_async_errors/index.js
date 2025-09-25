const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

const port = 8080;

const path = require("path");
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

// for put and delete request
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

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

// show route
app.get("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;            // get id from URL
       // console.log(id);
        
        let chat = await Chat.findById(id); // fetch chat by ID

        if (!chat) {
            throw new ExpressError(404, "chat not found");
        }

        res.render("index.ejs", { chats: [chat] }); // pass chat to template
    } catch (err) {
        next(err);                           // pass any errors to global handler
    }
});

// new chat route 
app.get("/chats/new",(req,res)=>{
  
    res.render("newchat.ejs");
});

app.post("/chats",(req,res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        to:to,
        from : from,
        msg:msg,
        created_at:new Date(),
    })

    newChat.save()
   .then(() => console.log("chat saved"))
   .catch(err => console.log(err));

   res.redirect("/chats");
    
});

app.put("/chats/:id", async (req, res) => {
    console.log("PUT route hit:", req.params.id, req.body);
    let { id } = req.params;
    let { msg: newMsg } = req.body;

    await Chat.findByIdAndUpdate(id, { msg: newMsg, created_at: new Date() }, { new: true });
    res.redirect("/chats");
});

// DELETE chat route
app.delete("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        await Chat.findByIdAndDelete(id);
        console.log(`Chat ${id} deleted`);
        res.redirect("/chats");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting chat");
    }
});


app.get("/",(req,res)=>{
    res.send("root is working");
});

// ASYNC ERROR HANDLING 
app.use((err, req, res, next) =>{
    let {status = 500, message = "Some Error Occured"} = err;
    res.status(status).send(message);
});

app.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})
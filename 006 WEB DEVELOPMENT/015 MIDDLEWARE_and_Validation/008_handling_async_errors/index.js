//require("express-async-errors");
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

// new chat route 
app.get("/chats/new",(req,res)=>{
  
    res.render("newchat.ejs");
});

// show route
app.get("/chats/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        // Check if id is valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            // Optional: You can throw a 400 for invalid IDs
            return next(new ExpressError(400, "Invalid Chat ID"));
        }

        // Find chat by ID
        const chat = await Chat.findById(id);

        // If chat not found, throw custom error
        if (!chat) {
            return next(new ExpressError(404, "Chat not found"));
        }

        // If chat exists, render template
        res.render("index.ejs", { chats: [chat] });
    } catch (err) {
        // Pass any other errors to global handler
        next(err);
    }
});



app.post("/chats",async (req,res,next)=>{
    try{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        to:to,
        from : from,
        msg:msg,
        created_at:new Date(),
    })

//     await newChat.save()
//    .then(() => console.log("chat saved"))
//    .catch(err => console.log(err));

await newChat.save(); // throws if validation fails
console.log("Chat saved successfully");
res.redirect("/chats");


   res.redirect("/chats");
    }catch(err) {
        console.log(err.message);
       next(err); 
    }
    
});

app.put("/chats/:id", async (req, res) => {
    try{
    console.log("PUT route hit:", req.params.id, req.body);
    let { id } = req.params;
    let { msg: newMsg } = req.body;

    await Chat.findByIdAndUpdate(id, { msg: newMsg, created_at: new Date() }, { new: true });
    res.redirect("/chats");
    }catch(err){
        next(new ExpressError("500","Error"));
    }
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
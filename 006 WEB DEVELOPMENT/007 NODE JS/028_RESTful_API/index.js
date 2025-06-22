const express = require("express");
const app = express();

const path = require("path");

//for unique id :
const { v4 : uuidv4 } = require("uuid");

//for pathch request
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

let port = 3000;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.json()); // for JSON data

let posts = [
    {
        id : uuidv4(), //for unique id //1 - manual
        username : "Deep",
        content : "Hello, I am Deep"
    },
    {
        id : uuidv4(), //for unique id //2 - manual
        username : "Suman",
        content : "I am suman"
    },
    {
        id : uuidv4(), //for unique id //3 - manual
        username : "Kalu",
        content : "Mera name kalu nehi suman hey"
    }
]
//let nextID=4;

app.get("/posts", (req, res) => {
    res.render("index",{posts}); // assuming views/index.ejs exists
});

//show details 
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find(p => p.id == id);
    res.render("show.ejs", {post});
});


//create new post
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

//for post requesst submit from - at newe.ejs
app.post("/posts",(req,res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username, content});//posts.push({id :nextID++,username, content});
    //res.send("post added successful"); // to show successful
    res.redirect("/posts")
});

//open the edit panel
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render("edit.ejs", { post });
});

//for save the content
app.put("/posts/:id", (req, res) => { //app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { username, content } = req.body;
    let post = posts.find(p => p.id == id);
    post.username = username;
    post.content = content;
    res.redirect("/posts");
});

//delete item 
app.delete("/posts/:id",(req,res)=>{
    let { id }= req.params;
    posts = posts.filter((p) => (id != p.id));
    //res.send("delete successfully");
    res.redirect("/posts");
});

//sever
app.listen(port,()=>{
    console.log(`server started at port ${port}`);
    
});
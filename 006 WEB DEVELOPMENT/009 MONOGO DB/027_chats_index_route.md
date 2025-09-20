## Index Route :


```js
app.get("/rout-name",(req,res)=>{
    let chats = Chat.find();    // db.collection.find() : here chat is an example 
});

//or : it is asyncronus function we can async it
app.get("/rout-name",async (req,res)=>{
    let chats = await Chat.find(); // chat is an example to show data
    res.render("index.ejs",{chats});  // send to the ejs file to show the chat
});

```
#### Chats Index Route :

`GET/chats`
```js
app.get("/",(req,res)=>{
    let chats = Chat.find();
});

//or : it is asyncronus function we can async it
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats}); // send to the ejs file to show the chat
});
```


#### Create index.ejs file to show all chats
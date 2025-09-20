### Add new chat :

    step :
    1. Create new chat page -> redirect for new chat using request
    2. rediret in new chat page
    3. take input in form
    4. Send the data in required route : post/get request
    5. Take input using form 
    6. save in data base

``` js    
app.post("/chats",(req,res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        to:to,
        from : from,
        msg:msg,
        created_at:new Date.now(),
    })

    newChat.save()
   .then(() => console.log("chat saved"))
   .catch(err => console.log(err));

    res.redirect("/chats");
    
});

```

Note : Where then use don't need to write async 
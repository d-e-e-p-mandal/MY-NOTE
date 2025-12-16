## Handling Async Error :

##### Note : `except of throw error call new error using next`

// require("express-async-errors");
// npm install express-async-errors

``` js
//require("express-async-errors");


app.get("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;            // get id from URL
       // console.log(id);
        let chat = await Chat.findById(id); // fetch chat by ID
        // async error 
        if (!chat) {
            next (new ExpressError(404, "chat not found"));
        }

        res.render("index.ejs", { chats: [chat] }); // pass chat to template
    } catch (err) {
        next(err);                           // pass any errors to global handler
    }
});
```

#### Example :

```js

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

```


## Validation Error :
``` bash
  _message: 'Chat validation failed'
```
`If we fill anything without fill required fill it generate validation error in mongodb when we want to save the data.`

```js
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
        console.log("ERRRROR" + err.message);
       next(err); 
    }
    
});
```

## Customize :

``` js
const handleValidation = (err) => {
    console.log("This is a validation Error");
    console.dir(err.message);
    return err;
}

app.post("/chats", async (req, res, next) => {
    try {
        const { from, to, msg } = req.body;

        let newChat = new Chat({
            from,
            to,
            msg,
            created_at: new Date(),
        });

        await newChat.save();  // If validation fails, it will throw an error

        console.log("Chat saved successfully");
        res.redirect("/chats");
    } catch (err) {
        // Check if this is a Mongoose validation error
        if (err.name === "ValidationError") {
            // Send custom message
            //return next(new ExpressError(400, err.message));

            // we can also customize using function 
            handleValidation(err);
        }
        // Pass any other errors
        next(err);
    }
});

```
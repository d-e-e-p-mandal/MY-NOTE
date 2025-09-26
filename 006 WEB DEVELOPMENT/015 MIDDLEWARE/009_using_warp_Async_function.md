## Using WrapAsync :

`try-catch Block wrap in WrapAsync function` : A wrapAsync function return a function

``` js
// asyncWrap function :
function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}

// Warping by asyncWaro function
app.get("/chats/:id", asyncWrap async(req, res, next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        next(new ExpressError(500, "Chat not found"));
    }
    res.render("edit.ejs", {chat});
})
```
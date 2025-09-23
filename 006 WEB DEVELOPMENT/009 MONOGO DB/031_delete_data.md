
## Delete add in html file :

```html
<form style="display:inline;" method="POST" action="/chats/<%= chat._id %>?_method=DELETE">
                <button type="submit" onclick="return confirm('Are you sure you want to delete this chat?')">Delete</button>
</form>
```

## add in index.js : Delete route
``` js
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
```

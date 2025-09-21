## Edit Route :

    step :
    ......

    1. Add new edit page
    2. Edit Message 
    3. Send the Message

    4. for put request : npm install method-override
```js
    const methodOverride = require("method-override");
    app.use(methodOverride("_method"));
```
    

```html

    <p>
        <span>Message:</span>
            <%= chat.msg %>
                <!-- ✅ Edit toggle button -->
                    <button type="button" onclick="toggleEditForm('<%= chat._id %>')">Edit</button>
                    <!-- ✅ Inline edit form -->
                    <form id="edit-form-<%= chat._id %>" class="edit-form" action="/chats/<%= chat._id %>"
                        method="POST">
                        <label>Message:</label>
                        <input type="text" name="msg" value="<%= chat.msg %>" required><br>
                        <button type="submit">Update</button>
                    </form>
    </p>

```
```js
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg } = req.body;

    await Chat.findByIdAndUpdate(id, { msg }, { new: true });

    res.redirect("/chats");
});

```
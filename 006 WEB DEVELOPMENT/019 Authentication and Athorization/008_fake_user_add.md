### User data add (Manually) :
```js
    User.register(fakeUser, "password");
```
```js
app.get("/demouser", async(req, res)=>{
    let fakeUser = new User({
        email :"student@gmail.com",
        username: "student", // if we dont write it automatically write by passport
    });

    User.register(fakeUser, "password");
});
```
### User data add (Manually) :
Passport will add hashing and salting in password. 
##### Hashing algorithm by passport : pbkdf2
```js
   await User.register(fakeUser, "password");
```
```js
app.get("/demouser", async(req, res)=>{
    let fakeUser = new User({
        email :"student@gmail.com",
        username: "student", // if we dont write it automatically write by passport
    });

    let registerdUser = await User.register(fakeUser, "password");
});
```
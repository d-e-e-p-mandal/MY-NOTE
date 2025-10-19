## User Model :

#### user :
- username
- password
- email

# Schema or Model define :
First you need to pluging Passport-Local Mongoose iinto your User Schema.

You're free to define your User how you like. Passpport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.

Additionally, Passport-Local Mongoose adds some methods to your Schema.



```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});


User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
```

User data add (Manually) :
```js
app.get("/demouser", async(req, res)=>{
    let fakeUser = new User({
        email :"student@gmail.com",
        username: "student", // if we dont write it automatically write by passport
    });

    User.register(fakeUser, "password");
});
```
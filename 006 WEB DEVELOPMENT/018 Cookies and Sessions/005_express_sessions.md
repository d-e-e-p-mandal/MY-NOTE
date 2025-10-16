# Express Sessions :
An attempt to make our session stateful.

## Secret :
This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or and array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in request. The secret itself should be not easily parsed by a human and would best be a random set of characters.

- The  use of environment variables to store the secret, ensuring the secret itself does not exist in your repository.

- Periodic updates of the sceret, while ensuring the previous scret is in the array.

```bash
npm install express-session
```

```js
// It will give warnning
const session = require("express-session");
app.use(session({secret:"mysupersecretstring"}));
```

- To Remove Warning :
```js
const session = require("express-session");
app.use(
    session({ 
        secret: "mysupersecretstring", resave: false,
        saveUninitialized: true,
    }));
```
- Alternative :

```js
const session = require("express-session");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized: true,
}
app.use(session(sessionOptions));
```
- #### sid will be created.
```
connect.sid   s%3AZIYvqrYRWBJ0DCLeYGpB0o2_QuQK90mK.Q5VvVNAWa2P%2BsAfxD2USzaZeLzw%2FOOwHYEGQvR%2FDIC0
```
```js
const express = require("express");
const app = express();

const session = require("express-session");
app.use(
    session({ 
        secret: "mysupersecretstring", resave: false, 
        saveUninitialized: true,
    }));

app.get("/test", (req, res)=>{
    res.send("test successful");
});

app.listen(3000, ()=>{
    console.log("Server is listening to 3000");
});
```




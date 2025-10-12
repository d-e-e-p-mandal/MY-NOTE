# Express Router : 
Express Routers are a way to organize your Express application such that our primary app.js file does not become bloated.

```js
const router = express.Router() // create new router object 
```

```js 
// user.js

const express = require("express");
const router = express.Router();

// Index - users 
router.get("/", (req, res)=>{
    res.send("Get for users");
});
```
```
router.get("/users", (req, res)=>{
    res.send("Get for users");
}); 
// we dont need to write users we will write it server.js/app.js when users

```


```js
//server.js
const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/posts.js");

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.use("/users", users); // redirect to users.js
```

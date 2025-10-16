# Connect-flash :
The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.

- To use connect-flash it compulsory to use session 

#### Installtion :
```bash
npm install connect-flash
```

```js
const flash = require("connect-flash");
app.use(flash());
```

```js
const express = require("express");
const app = express();

const flash = require("connect-flash");
const session = require("express-session");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false, 
    saveUninitialized: true,
}

app.use(session(sessionOptions));
app.use(flash());
```
- #### IN flash we send key and value pair
```js
req.flash("key", "value");
```

```js
req.flash("success", "user register successfully");
```

- To display we use ejs file in views direcotory 

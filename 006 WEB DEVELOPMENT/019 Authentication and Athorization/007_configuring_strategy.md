# Configuring Strategy :

### passport.initialize() 
```js
passport.initialize() 
```
A middleware that initializes passport.

### passport.session() 
```js
    passport.session() 
```
A web application needs the ability to identify users as they browse from page to page. This seires of requests and responsesk each associated with the same user, is known as session.

### passport.use(new LocalStrategy(User.authenticate()))
```js
passport.use(new LocalStrategy(User.authenticate()))
```
```js
passport.serializeUser(User.serializeUser());
```
```js
passport.deserializeUser(User.deserializeUser());
```
```js
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
```

#### Muse be Used
```js
app.use(session(sessionOptions));
app.use(flash());
```

```js
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

```
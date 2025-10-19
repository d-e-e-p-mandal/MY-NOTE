# Adding Cookie Options in sessions :


### Add Expires :

```js
const sessionOptions = {
    secret: "mysecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 3, // 3 days
        maxAge: 100 * 60 * 60 * 24 * 3, // 3 days
        httpOnly: true,
    },
};
```

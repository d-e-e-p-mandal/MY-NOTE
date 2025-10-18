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

- #### Use this middleware before routes :
```js
app.use((req, res, next)=>{
  res.locals.success = req.flash("success");
});
```

```js
app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next)=>{
  res.locals.success = req.flash("success");
});

app.use("/listings",listings);
app.use("/listings/:id/reviews",listings);
```
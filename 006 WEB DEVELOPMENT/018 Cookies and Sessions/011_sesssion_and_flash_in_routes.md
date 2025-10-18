# Using session and flash in routes :

```js
router.post("/",validateListing, warpAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing created.")
    res.redirect("/listings");   // ✅ redirect to listings page
})
);
```


- #### Use this middleware before routes :
```js
app.use((req, res, next)=>{
  res.locals.success = req.flash("success");
  next();
});
```

```js
app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next)=>{
  res.locals.success = req.flash("success");
  next();
});

app.use("/listings",listings);
app.use("/listings/:id/reviews",listings);
```
### Like Footer, Navbar we will write includes folder in flsh.ejs file and include it listings files.

- show message ejs/html
```html
<%= sucess %> 
```
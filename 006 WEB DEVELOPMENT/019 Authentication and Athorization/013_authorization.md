## Authorization :

we will show edit and delete button if `owner id and current user id is same.`

```js
app.use((req, res, next) => {
    res.locals.currentUser = req.user;  // makes the logged-in user available in all views
    next();
});
```
// or
```js

app.use((req, res, next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});
```

### protect edit route
```js
// update route 
router.put("/:id", async (req, res)=>{
let {id} = req.params;
let listing = await Listing.findById(id);
if(!listing.owner.equals(res.locals.currUser._id)){
    req.flash("error", "You don't have permission to edit.")
    return res.redirect(`/listings/${id}`);
}
await Listing.findByIdAndUpdate(id, {...req.body.listing});
res.redirect(`/listings/${id}`);
});
```

#### middleware file:
```js
const Listing = require("./models/listing");

module.exports.isOwnner =async (req, res, next)=> {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error", "You don't have permission to edit.")
        return res.redirect(`/listings/${id}`);
    }
    next();
};
```
### 
```js
// update route 
router.put("/:id",isLoggedIn,isOwnner, async (req, res)=>{
let {id} = req.params;
await Listing.findByIdAndUpdate(id, {...req.body.listing});
res.redirect(`/listings/${id}`);
});
```
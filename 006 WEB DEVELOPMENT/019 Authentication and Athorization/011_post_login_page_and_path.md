## req.path
## req.originalUrl

```js
module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.user);
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in to create listing");
        return res.redirect("/login");
    }
    next();
};
```
#### `res.session will be change so need to store the redirect path. We store it in locals veriable.`

```js
module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};
```

```js
// ✅ Login POST route

const { saveRedirectUrl } = requrie("../middleware.js");


router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    async (req, res) => {
        req.flash("success", "Welcome back!");
        res.redirect(res.locals.redirectUrl || "/listings");
    }
);
````
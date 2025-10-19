```js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// ✅ Signup form route
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// ✅ Signup POST route
router.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        // Auto-login after signup
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});


// ✅ Login form route
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// ✅ Login POST route
router.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    (req, res) => {
        req.flash("success", "Welcome back!");
        res.redirect("/listings");
    }
);

// ✅ Logout route
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You have logged out successfully!");
        res.redirect("/listings");
    });
});

module.exports = router;
```
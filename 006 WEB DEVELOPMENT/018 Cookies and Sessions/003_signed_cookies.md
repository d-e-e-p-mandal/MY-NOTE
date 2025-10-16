# Signed Cookies :
- We signed cookies so that some one did not modify it.
- partially : different type of signed char and number added and deficult to read.

#### Send Signed Cookies :
```js
app.use(cookieParser("secretcode"));

app.get("/", (req, res)=>{
    res.cookie("color", "red", {signed: true});
    res.send("done!");
});
```

#### Verify Signed Cookies :
```js
app.get("/veerify", (req, res)=>{
    res.send(req.signedCookies);
});
```

`Express take as two different cookies non-signed and signed cookies` 

#### Print Signed Cookies :
```js
app.get("/", (req, res) => {
    console.dir(req.signedCookies); // Prints cookies in terminal
    res.send(req.signedCookies);    // Sends cookies as JSON in browser
});
```

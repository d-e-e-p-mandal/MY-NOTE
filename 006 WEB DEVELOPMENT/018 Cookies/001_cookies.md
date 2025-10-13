# Cookies : Web Cookies 

HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser.


**`Cookies is with pair of name and value.`**
```js
    res.cookie("name", "value");
```
```js
app.get("/getcookies",(req, res)=>{
    res.cookie("greet", "hellow"); // greet is name and hellow is value
    res.send("sent you some cookies");
});
```

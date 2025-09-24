## Using next() in middleware:

The next middleware function is commonly denoted by a variable named next.

```js 
app.use((req, res, next)=>{
    console.log('Time :', Date.now());
    next();
    //console.log("This is after next"); // This is not recomended
});
//
app.use((req, res, next)=>{
    console.log('Time :', Date.now());
    return next();
});
```

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function.


### Built in middleware :

- express.static serves static assets such as HTML files, images and so on.
- express.json parses incoming requests with JSON payloads. Note Available with express 4.16.0+
- express.urlencoded parses incoming requests with URL-encoded payloads. Note Available with express 4.16.0+


### Third-party middleware :

**Important packages**
- cookie-parser
    npm i cookie-parser

- Helmet

- Passport : Authentication

- Morgan : Loging

-CORS : Allo or Restrict Requested Resources on a Web Server

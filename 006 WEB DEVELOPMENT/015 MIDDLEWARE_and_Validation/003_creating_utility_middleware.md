## Creating Utility Middleware :

Logger -> log (useful into console print)
```js
app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method, res.path, req.responseTime, res.hostname);
    next();
});


// another example : To check req object
app.use((req,res, next)=>{
    console.log(req);
    next();
});

// req.method
app.use((req,res, next)=>{
    console.log(req.method);
    next();
});

// req.hostname
app.use((req,res, next)=>{
    console.log(req.hostname);
    next();
});
//req.path
app.use((req,res, next)=>{
    console.log(req.path);
    next();
});

// Time 
app.use((req,res, next)=>{
    req.time = new Date(Date.now()).toString();
    next();
});


```


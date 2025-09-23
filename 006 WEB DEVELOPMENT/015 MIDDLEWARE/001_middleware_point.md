# Middleware

## Key Points
1. Middleware is software that connects different applications or layers, handling communication and data flow.  
2. It provides common services like authentication, logging, security, and request/response processing.  
3. In web development (e.g., Express.js), middleware sits between the client request and server response.

---

## Visualization

```mermaid
flowchart LR
    A[Client Request] --> B((Middleware))
    B -->|Authentication, Logging, Validation| C[Application / Server]
    C --> D[Client Response]
```

### In Express :

Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client.


#### Common Middleware functions :
- methodOverride
- bodyParser
- express.static
- express.urlencoded


```js
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"/public")));
```

## What do middlewares do ?
Middleware functions can perform the following tasks:
- Excute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.


## app.use(middleware)
``` js

app.use(()=>{
    console.log("Hi, I am a middleware");
});

// using req, res object in middleware

app.use((req, res)=>{
    console.log("Hi, I am middleware");
    res.send("bye");
});

```

# Handling Errors :

### Express Default Error Handler :

### Custom error message :

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi, This is root!");
});

app.get("/wrong", (req, res, next) => {
  try {
    abcd = abcd; // ❌ will throw ReferenceError
    res.send("This is wrong");
  } catch (err) {
    next(err); // ✅ pass error to custom error handler
  }
});

// ✅ Custom Error Handler Middleware

app.use((err, req, res, next) => {
  console.error("-----ERROR-----"); // log error for debugging
  next(err);
});


app.use((err, req, res, next) => {
  console.error(err.stack); // log error for debugging
  res.status(500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

// Run server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

```
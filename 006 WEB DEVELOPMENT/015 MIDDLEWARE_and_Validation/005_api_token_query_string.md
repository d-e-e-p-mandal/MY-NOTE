## API Token as Query String :
Lets create a middle-ware for an api that checks if the access token was passed in the query string or not.

### Multiple Middleware :
```js
const express = require("express");
const app = express();

// Middleware to check API token in query string
function checkApiToken(req, res, next) {
  const token = req.query.token;  // token from query string: ?token=abc123

  if (!token) {
    return res.status(401).json({ error: "Access token is required" });
  }

  // (Optional) validate token value
  if (token !== "my-secret-token") {
    return res.status(403).json({ error: "Invalid access token" });
  }

  // If token is valid → continue
  next();
}

// Example protected route
app.get("/api/data", checkApiToken, (req, res) => {
  res.json({ message: "Access granted ✅", data: [1, 2, 3] });
});

// Run server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

#### Search :
`http://localhost:3000/api/data?token=my-secret-token`
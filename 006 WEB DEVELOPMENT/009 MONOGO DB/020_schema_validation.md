
```js
const mongoose = require("mongoose");

// Define Schema with validation
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,       // must be provided
    minlength: 3,         // at least 3 chars
    maxlength: 20         // at most 20 chars
  },
  email: {
    type: String,
    required: true,
    unique: true,         // no duplicates
    match: /.+\@.+\..+/   // regex for valid email
  },
  age: {
    type: Number,
    min: 18,              // minimum 18
    max: 60               // maximum 60
  },
  role: {
    type: String,
    enum: ["user", "admin"], // must be either "user" or "admin"
    default: "user"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Model
const User = mongoose.model("User", userSchema);

module.exports = User;



const user1 = new User({
  name: "Al",            // ❌ too short
  email: "notemail.com", // ❌ invalid email
  age: 15                // ❌ too young
});

user1.save()
  .then(() => console.log("✅ Saved"))
  .catch(err => console.log("❌ Validation Error:", err.message));

```
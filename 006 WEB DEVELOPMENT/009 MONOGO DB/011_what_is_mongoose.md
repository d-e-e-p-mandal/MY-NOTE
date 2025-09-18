# 🟢 Mongoose (ODM for MongoDB & Node.js)

A library that creates a connection between MongoDB & Node.js javaScript runtime Environment.

**Mongoose** is an **Object Data Modeling (ODM) library** for **MongoDB** in **Node.js**.  
It provides a structured way to interact with MongoDB by using **schemas** and **models**.

---

### 🔑 Features
- Define **Schemas** → structure & rules for documents  
- Automatic **Validation** → enforce data rules  
- **Models** → easy CRUD methods (`find`, `save`, `update`)  
- **Middleware** → run logic before/after DB actions  
- **Relationships** → supports `populate` and sub-documents  

---

### ⚡ Example

```js
const mongoose = require('mongoose');

// Connect to DB
mongoose.connect('mongodb://localhost:27017/mydb');

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create model
const User = mongoose.model('User', userSchema);

// Insert document
const newUser = new User({ name: "Alice", age: 25 });
newUser.save();
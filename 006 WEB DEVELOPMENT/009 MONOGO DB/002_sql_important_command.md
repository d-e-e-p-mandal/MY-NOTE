<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

h1, h3 {
  border-bottom: 2px solid #16a085;
  padding-bottom: 5px;
}

h1 { color: #8e44ad; } /* purple */
h3 { color: #16a085; } /* dark cyan */

.code-section {
  background-color: #ecf0f1;
  border-left: 5px solid #16a085;
  padding: 15px;
  margin: 20px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.command {
  font-family: 'Fira Code', 'Roboto Mono', monospace;
  background-color: #34495e; /* dark slate blue */
  color: #f39c12; /* soft orange text */
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 1.1em;
  white-space: pre-wrap;
  word-break: break-all;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.3);
}

.command a {
  color: #e67e22; /* orange link */
  text-decoration: underline;
}

.info p {
  margin: 0;
  font-size: 0.9em;
  color: #1abc9c; /* teal */
}

.info { 
  background-color: #d1f2eb; 
  padding:5px 10px; 
  border-left:3px solid #1abc9c; 
  border-radius:3px; 
}

a {
  color: #e67e22; /* orange */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

# 🟢 MongoDB Shell Basics

---

### Shell Commands Overview

<div class="code-section">
  <div class="command">
mongosh
  </div>
  <div class="info"><p>Open MongoDB shell to interact with databases.</p></div>
</div>

<div class="code-section">
  <div class="command">
use database_name
  </div>
  <div class="info"><p>Switch to a database. Creates a <strong>temporary database</strong> if it doesn't exist. Database is saved permanently only after inserting at least one document.</p></div>
</div>

<div class="code-section">
  <div class="command">
show databases
  </div>
  <div class="info"><p>Show all databases that contain at least one document.</p></div>
</div>

<div class="code-section">
  <div class="command">
clear        # macOS/Linux    Cmd+K on macOS Terminal
cls          # Windows
  </div>
  <div class="info"><p>Clear the shell screen (Cmd+K on macOS Terminal).</p></div>
</div>

<div class="code-section">
  <div class="command">
help
db.help()
  </div>
  <div class="info"><p>Show MongoDB shell and database specific help commands.</p></div>
</div>

---

# 🟢 MongoDB Shell Complete Commands Cheat Sheet

### 1. Create / Switch Database

<div class="code-section">
  <div class="command">
use testDB
  </div>
  <div class="info"><p>Switch to <code>testDB</code>. Creates temporary database if it doesn’t exist. Insert data to save permanently.</p></div>
</div>

---

### 2. Insert Data

<div class="code-section">
  <div class="command">
db.users.insertOne({name: "Deep", age: 25})
db.users.insertMany([
  {name: "Amit", age: 30},
  {name: "Anita", age: 28}
])
  </div>
  <div class="info"><p>Insert one or multiple documents into the <code>users</code> collection.</p></div>
</div>

---

### 3. Show Collections

<div class="code-section">
  <div class="command">
show collections
  </div>
  <div class="info"><p>Lists all collections in the current database.</p></div>
</div>

---

### 4. Query Data

<div class="code-section">
  <div class="command">
db.users.find()
db.users.find({age: 25})
db.users.find({}, {name: 1, _id: 0})   # Only show name
db.users.find().pretty()                # Pretty print
  </div>
  <div class="info"><p>Retrieve documents, filter, project fields, or pretty-print output.</p></div>
</div>

---

### 5. Update Documents

<div class="code-section">
  <div class="command">
db.users.updateOne(
  {name: "Deep"}, 
  {$set: {age: 26}}
)
db.users.updateMany(
  {age: {$gt: 25}}, 
  {$inc: {age: 1}}
)
  </div>
  <div class="info"><p>Update one or multiple documents using filters and update operators.</p></div>
</div>

---

### 6. Delete Documents

<div class="code-section">
  <div class="command">
db.users.deleteOne({name: "Deep"})
db.users.deleteMany({age: {$lt: 30}})
  </div>
  <div class="info"><p>Remove single or multiple documents from a collection.</p></div>
</div>

---

### 7. Drop Collection or Database

<div class="code-section">
  <div class="command">
db.users.drop()   # Drop collection
db.dropDatabase() # Drop current database
  </div>
  <div class="info"><p>Permanently deletes collection or database.</p></div>
</div>

---

### 8. Database Stats

<div class="code-section">
  <div class="command">
db.stats()
db.collection.stats()
  </div>
  <div class="info"><p>Get statistics for current database or collection.</p></div>
</div>

---

### 9. Indexing

<div class="code-section">
  <div class="command">
db.users.createIndex({name: 1})
db.users.getIndexes()
db.users.dropIndex("name_1")
  </div>
  <div class="info"><p>Manage indexes for faster queries.</p></div>
</div>

---

### 10. Aggregation

<div class="code-section">
  <div class="command">
db.users.aggregate([
  {$match: {age: {$gt: 25}}},
  {$group: {_id: "$age", count: {$sum: 1}}}
])
  </div>
  <div class="info"><p>Powerful aggregation pipeline to filter, group, and process data.</p></div>
</div>

---

### 11. Exit Shell

<div class="code-section">
  <div class="command">
exit
  </div>
  <div class="info"><p>Exit the MongoDB shell safely.</p></div>
</div>
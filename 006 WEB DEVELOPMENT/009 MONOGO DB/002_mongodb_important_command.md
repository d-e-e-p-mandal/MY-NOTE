Got it ✅ I’ll give you a ready-to-save .md file with everything, including common aggregation examples.
Here’s the final Markdown content:

# 🟢 MongoDB Shell Commands Cheat Sheet

---

### 1. Database Commands
### Connect :
    mongosh
    
-     show dbs # List all databases  
-     use <dbName> # Switch to or create a database  
-     db  # Show current database name  
-     db.dropDatabase() # Delete the current database  

---

### 2. Collection Commands
-     show collections  # List collections in the current database  
-     db.createCollection("myCollection")  # Create a new collection  
-     db.myCollection.drop()  # Delete a collection  

---

### 3. Document Querying
-     db.myCollection.find()  # Show all documents  
-     db.myCollection.find().pretty()  # Pretty JSON format  
-     db.myCollection.findOne()  # Find one document  
-     db.myCollection.countDocuments()   Count documents  

---

### 4. Filtering & Projection
-     db.myCollection.find({ age: 25 })  # Filter by field  
-     db.myCollection.find({}, { name: 1, age: 1 })  # Show selected fields  
-     db.myCollection.find().limit(5)  # Limit results  
-     db.myCollection.find().sort({ age: 1 })  # Sort results  
-     db.myCollection.find().skip(5)  # Skip results  

---

### 5. Update & Delete
-     db.myCollection.updateOne({ name: "Alex" }, { $set: { age: 30 } }) # Update one  
-     db.myCollection.updateMany({ active: true }, { $set: { active: false } })  # Update many  
-    db.myCollection.deleteOne({ name: "Alex" })  # Delete one  
-    db.myCollection.deleteMany({ status: "inactive" })  # Delete many  

---

### 6. Indexes
-     db.myCollection.createIndex({ name: 1 })  # Create index  
-     db.myCollection.getIndexes()  # Show indexes  
-     db.myCollection.dropIndex("name_1")  # Drop index  

---

### 7. User & Role Management
-     use admin  # Switch to admin database  
-     db.createUser({ user: "myUser", pwd: "mypassword", roles: ["readWrite", "dbAdmin"] })   # Create user  
-     db.dropUser("myUser")  #  Remove user  
-     db.getUsers()  # Show users  

---

### 8. Aggregation Framework
-     db.myCollection.aggregate([...])  # Run aggregation pipeline  

#### Common Stages:
-     $match  # Filter documents  
-     $group  # Group by field, calculate totals  
-     $project  # Show or transform fields  
-     $sort   # Sort results  
-     $limit # Limit results  
-     $skip  # Skip results  

---

### 9. Most Common Aggregation Examples

#### 1. Count documents by category
``` js
db.products.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } }
])

2. Sum sales by product

db.sales.aggregate([
  { $group: { _id: "$product", totalSales: { $sum: "$amount" } } }
])

3. Average salary by department

db.employees.aggregate([
  { $group: { _id: "$department", avgSalary: { $avg: "$salary" } } }
])

4. Top 5 highest salaries

db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $limit: 5 }
])

5. Filter + Group + Sort (example: active users by city)

db.users.aggregate([
  { $match: { active: true } },
  { $group: { _id: "$city", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

6. Project new field (e.g., age from DOB)

db.users.aggregate([
  { $project: { name: 1, age: { $subtract: [2025, "$yearOfBirth"] } } }
])


⸻

10. Utility Commands
	•	help → Shell help
	•	db.help() → Database help
	•	db.myCollection.help() → Collection help
	•	it → Fetch more results from cursor
	•	cls → Clear screen (Windows)
	•	clear → Clear screen (Linux/macOS)

⸻


---

👉 Save this as:  
`mongodb_cheatsheet.md`  

Do you want me to also create a **shorter “Quick Reference” version** (just 1-page max with the most used 20 commands) alongside this full version?

2. Insert Data

db.users.insertOne({name: "Deep", age: 25})

db.users.insertMany([
  {name: "Amit", age: 30},
  {name: "Anita", age: 28}
])

Insert one or multiple documents into the users collection.

⸻

3. Show Collections

show collections

Lists all collections in the current database.

⸻

4. Query Data

db.users.find()
db.users.find({age: 25})
db.users.find({}, {name: 1, _id: 0})   # Only show name
db.users.find().pretty()               # Pretty print

Retrieve documents, filter, project fields, or pretty-print output.

⸻

5. Update Documents

db.users.updateOne(
  {name: "Deep"},
  {$set: {age: 26}}
)

db.users.updateMany(
  {age: {$gt: 25}},
  {$inc: {age: 1}}
)

Update one or multiple documents using filters and update operators.

⸻

6. Delete Documents

db.users.deleteOne({name: "Deep"})
db.users.deleteMany({age: {$lt: 30}})

Remove single or multiple documents from a collection.

⸻

7. Drop Collection or Database

db.users.drop()       # Drop collection
db.dropDatabase()     # Drop current database

Permanently deletes collection or database.

⸻

8. Database Stats

db.stats()
db.collection.stats()

Get statistics for current database or collection.

⸻

9. Indexing

db.users.createIndex({name: 1})
db.users.getIndexes()
db.users.dropIndex("name_1")

Manage indexes for faster queries.

⸻

10. Aggregation

db.users.aggregate([
  {$match: {age: {$gt: 25}}},
  {$group: {_id: "$age", count: {$sum: 1}}}
])

Powerful aggregation pipeline to filter, group, and process data.

⸻

11. Exit Shell

exit

Exit the MongoDB shell safely.

---

```
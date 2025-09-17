
# 🟢 MongoDB Shell Basics

---

### Shell Commands Overview

```bash
mongosh

Open MongoDB shell to interact with databases.

use database_name

Switch to a database. Creates a temporary database if it doesn’t exist. Database is saved permanently only after inserting at least one document.

show databases

Show all databases that contain at least one document.

clear    # macOS/Linux (Cmd+K on macOS Terminal)
cls      # Windows

Clear the shell screen.

help
db.help()

Show MongoDB shell and database specific help commands.

⸻

🟢 MongoDB Shell Complete Commands Cheat Sheet

1. Create / Switch Database

use testDB

Switch to testDB. Creates temporary database if it doesn’t exist. Insert data to save permanently.

⸻

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
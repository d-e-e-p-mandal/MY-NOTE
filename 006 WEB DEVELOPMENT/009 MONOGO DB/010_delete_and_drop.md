📝 MongoDB Delete Operations – Nested Data & Full Cleanup

In MongoDB, deletion can target documents, nested elements, collections, or entire databases.

⸻

🔹 1️⃣ Delete Documents
```js
Delete a single document:

db.posts.deleteOne({ title: "My First Blog Post" })

Delete multiple documents:

db.posts.deleteMany({ "author.id": 12345 })
```

⸻

🔹 2️⃣ Delete Nested Array Elements

Use $pull to remove elements from arrays without deleting the parent document.

Remove all comments by Bob:
```js
db.posts.updateOne(
  { title: "My First Blog Post" },
  { $pull: { comments: { user: "Bob" } } }
)
```
Remove comments older than a specific date:
```js
db.posts.updateOne(
  { title: "My First Blog Post" },
  { $pull: { comments: { date: { $lt: new Date("2025-01-01") } } } }
)
```

⸻

🔹 3️⃣ Drop a Collection

Completely removes a collection and all its documents:
```js
db.posts.drop()
```

⸻

🔹 4️⃣ Drop an Entire Database

Deletes the current database with all its collections:
```js
use myDatabase       // switch to the database you want to drop
db.dropDatabase()
```

⸻

✅ Notes
	•	deleteOne() removes only the first matching document.
	•	deleteMany() removes all matching documents.
	•	$pull is safe for arrays; it only deletes elements that match a condition.
	•	drop() removes an entire collection permanently.
	•	dropDatabase() removes all collections and the database itself permanently.

⸻

If you want, I can combine this delete operations note with your nested insert/update note to make a full “Nested Data CRUD” Markdown reference—all in one place for VS Code.

Do you want me to do that?
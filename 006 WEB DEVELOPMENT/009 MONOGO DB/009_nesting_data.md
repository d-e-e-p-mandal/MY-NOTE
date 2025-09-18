
# 📝 MongoDB Nested Data – Insert & Update

In MongoDB, nested data allows embedding documents or arrays within a parent document. This helps model relationships efficiently and improves data retrieval.

⸻

🔹 Insert Nested Data

You can include an object or an array inside a document using insertOne() or insertMany().
```js
db.collection.insertOne({
  field: "value",
  nestedDoc: {
    nestedField1: "value1",
    nestedField2: "value2"
  },
  arrayOfDocs: [
    { arrayField: "valueA" },
    { arrayField: "valueB" }
  ]
})
```
Example: A blog post with a nested author document and a comments array:
```js
db.posts.insertOne({
  title: "My First Blog Post",
  content: "This is the content of my post.",
  author: { name: "Alex", id: 12345 },
  comments: [
    { user: "Bob", text: "Great post!", date: new Date() },
    { user: "Charlie", text: "Very informative.", date: new Date() }
  ]
})
```

⸻

🔹 Update Nested Data

Use dot notation and operators like $set, $push, or $pull to update nested documents or arrays.

1️⃣ Update a nested field
```js
db.posts.updateOne(
  { title: "My First Blog Post" },
  { $set: { "author.name": "Alexander" } }
)
```
2️⃣ Add a new element to a nested array
```js
db.posts.updateOne(
  { title: "My First Blog Post" },
  { $push: { comments: { user: "Diana", text: "I agree!", date: new Date() } } }
)
```
3️⃣ Update a specific element in a nested array
```js
db.posts.updateOne(
  { title: "My First Blog Post" },
  { $set: { "comments.$[c].text": "Amazing!" } },
  { arrayFilters: [ { "c.user": "Bob" } ] }
)
```

⸻

✅ Notes
    •	Use `"parent.child"` to access nested fields.
	•	$push adds elements to an array; $pull removes elements.
	•	$[] + arrayFilters lets you target and update specific array elements.

⸻

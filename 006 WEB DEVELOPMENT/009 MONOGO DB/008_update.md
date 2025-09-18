# MongoDB Update Operations - Complete Guide in JavaScript


## $set Operator
Sets the value of a field. Adds the field if it doesn't exist.
```js
db.collection.updateOne(
  { "_id": 1 },
  { $set: { "price": 10.99, "status": "B" } }
);
```
Example: Document { "_id": 1, "item": "book", "status": "A" }

Result: { "_id": 1, "item": "book", "status": "B", "price": 10.99 }

------------------------------
## $unset Operator

Removes a field from a document. Value is ignored but must be provided.
```js
db.collection.updateOne(
  { "_id": 1 },
  { $unset: { "price": "" } }
);

Example: Document { "_id": 1, "item": "book", "status": "B", "price": 10.99 }

Result: { "_id": 1, "item": "book", "status": "B" }
```
------------------------------
## replaceOne Method

Replaces the first document matching the filter with a new document
```js
db.collection.replaceOne(
  { "_id": 1 },
  { "name": "Bob", "age": 30 }
);

xample: Document { "_id": 1, "name": "Alice", "age": 25, "city": "New York" }

Result: { "_id": 1, "name": "Bob", "age": 30 }
 ------------------------------

## $replaceWith Aggregation Stage

Replaces the entire document in an aggregation pipeline
``` js
db.collection.updateMany(
  { "_id": 1 },
  [
    { $replaceWith: "$details" } // Promote subdocument to top level
  ]
);
```
```js
Example: Document { "_id": 1, "item": "book", "details": { "author": "John Doe", "publisher": "ABC" } }
``
Result: { "author": "John Doe", "publisher": "ABC" }

------------------------------

## Update Methods

updateOne: updates a single document
```js
db.collection.updateOne(
  { "name": "Alice" },
  { $set: { "age": 30 } }
);
```
updateMany: updates all matching documents
```js
db.collection.updateMany(
  { "status": "pending" },
  { $set: { "status": "shipped" } }
);
```
replaceOne: replaces a single document
```js
db.collection.replaceOne(
  { "name": "Bob" },
  { "name": "Robert", "age": 45, "city": "New York" }
);
```
bulkWrite: multiple update operations in one command
```js
db.collection.bulkWrite([
  {
    updateOne: {
      filter: { "item": "book" },
      update: { $set: { "price": 12.99 } }
    }
  },
  {
    updateMany: {
      filter: { "status": "pending" },
      update: { $set: { "status": "shipped" } }
    }
  }
]);
```
  ------------------------------
 Update Operators

  $inc: increment field value
```js
db.collection.updateOne(
  { "item": "laptop" },
  { $inc: { "stock": -1 } }
);
```
 $mul: multiply field value
```js
db.collection.updateOne(
  { "item": "pen" },
  { $mul: { "price": 0.8 } }
);
```
### $push: append value to array
```js
db.collection.updateOne(
  { "user": "Charlie" },
  { $push: { "tags": "new_tag" } }
);
```
### $pull: remove value from array
```js
db.collection.updateOne(
  { "user": "David" },
  { $pull: { "tags": "old_tag" } }
);
```
### $currentDate: set field to current date
```js
db.collection.updateOne(
  { "item": "item_A" },
  { $currentDate: { "lastModified": true } }
);
```
 ------------------------------

### Upsert: insert if no document matches the filter
```js
db.collection.updateOne(
  { "name": "Eve" },
  { $set: { "age": 28 } },
  { upsert: true }
);
``
1. Atomicity: single document updates are atomic
2. Performance: use updateMany or bulkWrite for high-volume updates
3. Aggregation pipelines can be used for complex multi-stage updates
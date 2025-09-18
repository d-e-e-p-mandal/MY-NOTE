## MongoDB Query Operators

MongoDB provides a rich set of query operators to filter and manipulate data. These operators are categorized into different types based on their function.

---

### Comparison Operators

These operators are used to compare a field's value with a specified value.

* `$eq`: Matches values that are equal to a specified value.
    * Example: `db.collection.find({ "age": { "$eq": 30 } })`
* `$gt`: Matches values that are greater than a specified value.
    * Example: `db.collection.find({ "age": { "$gt": 30 } })`
* `$gte`: Matches values that are greater than or equal to a specified value.
    * Example: `db.collection.find({ "age": { "$gte": 30 } })`
* `$lt`: Matches values that are less than a specified value.
    * Example: `db.collection.find({ "age": { "$lt": 30 } })`
* `$lte`: Matches values that are less than or equal to a specified value.
    * Example: `db.collection.find({ "age": { "$lte": 30 } })`
* `$ne`: Matches all values that are not equal to a specified value.
    * Example: `db.collection.find({ "age": { "$ne": 30 } })`
* `$in`: Matches any of the values specified in an array.
    * Example: `db.collection.find({ "status": { "$in": ["A", "D"] } })`
* `$nin`: Matches none of the values specified in an array.
    * Example: `db.collection.find({ "status": { "$nin": ["A", "D"] } })`

---

### Logical Operators

These operators are used to combine multiple query expressions.

* `$and`: Joins query clauses with a logical **AND** returns all documents that match the conditions of all clauses.
    * Example: `db.collection.find({ "$and": [{ "age": { "$gt": 25 } }, { "city": "New York" }] })`
* `$or`: Joins query clauses with a logical **OR** returns all documents that match the conditions of at least one clause.
    * Example: `db.collection.find({ "$or": [{ "status": "A" }, { "age": { "$lt": 30 } }] })`
* `$not`: Inverts the effect of a query expression and returns documents that **do not** match the query expression.
    * Example: `db.collection.find({ "price": { "$not": { "$gt": 10 } } })`
* `$nor`: Joins query clauses with a logical **NOR** returns all documents that fail to match all of the given query clauses.
    * Example: `db.collection.find({ "$nor": [{ "price": 1.99 }, { "sale": true }] })`

---

### Element Operators

These operators are used to query documents based on the type or existence of a field.

* `$exists`: Matches documents that have the specified field. A value of `true` checks for existence, and `false` checks for non-existence.
    * Example: `db.collection.find({ "city": { "$exists": true } })`
* `$type`: Matches documents where the BSON type of a field matches a specified type.
    * Example: `db.collection.find({ "age": { "$type": "number" } })`

---

### Array Operators

These operators are used to query for specific elements within an array.

* `$all`: Matches documents where the value of a field is an array that contains all the specified elements.
    * Example: `db.collection.find({ "tags": { "$all": ["books", "gadgets"] } })`
* `$size`: Matches documents where the value of a field is an array of the specified size.
    * Example: `db.collection.find({ "tags": { "$size": 2 } })`
* `$elemMatch`: Selects documents if an element in the array field matches all the specified `$elemMatch` query conditions.
    * Example: `db.collection.find({ "scores": { "$elemMatch": { "score": { "$gt": 80 }, "by": "joe" } } })`

---

### Evaluation Operators

These operators evaluate a document's fields based on their content.

* `$mod`: Performs a modulo operation on the value of a field and returns documents with a matching remainder.
    * Example: `db.collection.find({ "count": { "$mod": [4, 0] } })`
* `$regex`: Provides regular expression capabilities for pattern matching strings in queries.
    * Example: `db.collection.find({ "name": { "$regex": "^A" } })`
* `$text`: Performs a text search on the content of the fields indexed for text search.
    * Example: `db.collection.find({ "$text": { "$search": "coffee shop" } })`
* `$where`: Matches documents that satisfy a JavaScript expression. This is generally less performant and should be used as a last resort.
    * Example: `db.collection.find({ "$where": "this.comments.length == this.favorites.length" })`

---

### Geospatial Operators

These operators are used to query documents containing geospatial data, such as coordinates.

* `$geoIntersects`: Selects documents that intersect with a GeoJSON geometry.
* `$geoWithin`: Selects documents with geospatial data that are entirely within a specified shape.
* `$near`: Returns geospatial objects in proximity to a point. Requires a geospatial index.
* `$nearSphere`: Returns geospatial objects in proximity to a point on a sphere. Requires a geospatial index.

---

### Aggregation Operators

These operators are used within the aggregation framework, not directly in a `find()` query. They perform transformations and calculations on data.

* `$match`: Filters documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
* `$group`: Groups input documents by a specified `_id` expression and applies the accumulator expression(s) to each group.
* `$sum`: Calculates the sum of the numerical values.
* `$avg`: Calculates the average of the numerical values.
* `$min`: Returns the minimum value.
* `$max`: Returns the maximum value.
* `$count`: Counts the number of documents in a group.


# 📝 MongoDB Notes

## `insertOne()`

-   **Method:**

``` js
db.collection.insertOne(<document>, { writeConcern: <document> })
```

-   **Example:**

``` js
db.students.insertOne({
   name: "Deep Mandal",
   age: 23,
   course: "Computer Science"
})
```

-   Inserts **a single document** into the collection.\
-   If collection doesn't exist → MongoDB creates it automatically.

------------------------------------------------------------------------

## `insertMany()`

-   **Method:**

``` js
db.collection.insertMany([ <document1>, <document2>, ... ], { ordered: true/false })
```

-   **Example:**

``` js
db.students.insertMany([
   { name: "Alice", age: 21, course: "Math" },
   { name: "Bob", age: 22, course: "Physics" },
   { name: "Charlie", age: 23, course: "CS" }
])
```

-   Inserts **multiple documents** at once.\
-   `{ ordered: true }` (default) → stops on first error.\
-   `{ ordered: false }` → continues inserting even if some fail.

------------------------------------------------------------------------

## `insert()` (Deprecated)

-   **Method:**

``` js
db.collection.insert(<document> or [ <document1>, <document2>, ... ])
```

-   Can insert **one or many documents**.\
-   Example:\

``` js
db.students.insert({ name: "Old Style", age: 30 })
```

-   ⚠️ **Deprecated** → Use `insertOne()` or `insertMany()` instead.
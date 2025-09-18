## `find()`

-   **Method:**

``` js
db.collection.find(<query>, <projection>)
```

-   **Parameters:**
    -   `<query>` → Filter conditions (like WHERE in SQL).\
    -   `<projection>` → Fields to include/exclude in result (1 =
        include, 0 = exclude).
-   **Examples:**

``` js
// Find all documents
db.students.find()

// Find with condition
db.students.find({ age: 23 })

// Find with projection (only name and course fields, hide _id)
db.students.find(
   { age: 23 },
   { name: 1, course: 1, _id: 0 }
)
```

-   Returns a **cursor object** (acts like an iterator).\
-   To make results readable in shell:\

``` js
db.students.find().pretty()
```

------------------------------------------------------------------------

## `findOne()`

-   **Method:**

``` js
db.collection.findOne(<query>, <projection>)
```

-   **Examples:**

``` js
// Find first matching document
db.students.findOne({ age: 23 })

// Find one with projection (only name and course fields)
db.students.findOne(
   { age: 23 },
   { name: 1, course: 1, _id: 0 }
)
```

-   Returns **only the first matching document**.\
-   If no match → returns `null`.

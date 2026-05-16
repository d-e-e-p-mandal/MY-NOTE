# Skip and SkipWhile:

## Skip:
**Query Syntax:**
```cs
var result =
    (from s in students
     select s).Skip(1);
```

**Method Syntax:**
```cs
var result = students.Skip(1);
```

## Skip While:
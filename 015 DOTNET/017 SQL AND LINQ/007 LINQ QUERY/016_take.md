# Take and TakeWhile:

## Take:
**Query Syntax:**
```cs
var result = 
    (from s in students
     select s).Take(2);
```

**Method Syntax:**
```cs
var result = students.Take(2);
```

## Take While:
# Where :

**Query Syntax:**
```cs
var result =
    from s in students
    where s.Marks > 50
    select s;
```

**Method Syntax:**
```cs
var result = students.Where(s => s.Marks > 50);
```

## Multiple Conditions

**Query Syntax:**
```cs
var result = 
    from s in students
    where s.Marks > 50 &&
    s.City == "Delhi"
    select s;
```

**Method Syntax:**
```cs
var result = students.Where(s => 
    s.Marks > 50 &&
    s.City == "Delhi");
```

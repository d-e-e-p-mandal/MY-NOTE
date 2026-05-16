# Distinct:
**Query Syntax:**
```cs
var result = 
    (from s in students
     select s.City).Distinct();
```

**Method Syntax:**
```cs
var restult = 
    students.Select(x => x.City)
            .Distinct();
```

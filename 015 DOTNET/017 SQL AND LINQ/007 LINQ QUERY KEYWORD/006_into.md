
# Into:
**Using `into` for Query Continuation:**
- You can use into after a select to effectively "restart" a query on a projection.

**Query Syntax:**
```cs
var result = 
    from s in students
    group s by s.City into grp
    select grp;
```

**Method Syntax:**
```cs
var result = 
    students.GroupBy(s => s.City)
            .Select(grp => grp);
```

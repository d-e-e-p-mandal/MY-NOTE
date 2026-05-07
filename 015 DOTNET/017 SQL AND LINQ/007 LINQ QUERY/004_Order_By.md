# Order By:


### Ascending Order 
- Default Ascennding
**Query Syntax:**
```cs
var result = 
    from s in students
    orderby s.Name
    select s;
```

or : (Not Recomend Use Default)
```cs
var result =
    from s in context.Students
    orderby s.Name ascending
    select s;
```

**Method Syntax:**
```cs
var result = students.OrderBy(s => s.Name);
```
- OrderByAscending does not exist in method sytax.

### Descending Order :
**Query Syntax:**
```cs
var result =
    from s in students
    orderby s.Name descending
    select s;
```

**Method Syntax:**
```cs
var result = students.OrderByDescending(s => s.Name);
```

## Multiple Sorting

##### Ascending
**Query Syntax:**
```cs
var result = from s in students
    orderby s.City, s.Name
    select s;
```

**Method Syntax:**
```cs
var result = students
    .OrderBy(s => s.City)
    .ThenBy(s => s.Name);
```


##### Desending
**Query Syntax:**
```cs
var result = from s in students
    orderby s.City, s.Name descending
    select s;
```

**Method Syntax:**
```cs
var result = 
    students.OrderByDescending(s => s.City)
            .ThenByDescending(s = s.Name);
```
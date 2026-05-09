using System.Linq;

# Select 

**Query Syntax :**
```cs
var result =
    from s in students
    select s;
```

**Method Syntax :**
```cs
var result = students.Select(s => s);
```


## Select Specific Field

**Query Syntax :**
```cs
var result =
    from s in students
    select s.Name;
```

**Method Syntax**
```cs
var result = students.Select(s => s.Name);
```

## Anonymous Type

**Query Syntax:**
```cs
var result =
    from s in students
    select new
    {
        s.Id,
        s.Name
    };
```

**Method Syntax:**
```cs
var result =
    students.Select(s => new
    {
        s.Id,
        s.Name
    });
```


## SlectMany (Multiple From):

##### Data:
```cs
string[] students = { "Ram", "Shyam" };
string[] subjects = { "Math", "Science" };
```

**Query Syntax:**
```cs
var result = 
    from s in students
    from sub in subjects
    select new 
    {
        s,
        sub
    };
```

**Method Syntax:**
```cs
var result = 
    students.SelectMany(
        s => subjects,
        (s, sub) => new
        {
            s,
            sub
        });
```
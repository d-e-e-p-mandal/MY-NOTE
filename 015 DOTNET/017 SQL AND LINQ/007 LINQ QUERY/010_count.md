# Count:

**Query Syntax:**
```cs
int count = 
    (from s in students
     select s).Count(); 
```

**Method Syntax:**
```cs
int count = students.Count();
```

## Count With Condition:

**Query Syntax:**
```cs
int count = 
    (from s in students
     where s.Marks > 50
     select s).Count();
```

**Method Syntax:**
```cs
int count = students.Count(s => s.Marks > 50);
```
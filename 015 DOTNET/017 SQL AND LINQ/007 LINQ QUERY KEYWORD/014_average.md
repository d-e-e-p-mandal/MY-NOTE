# Average:

**Query Syntax:**
```cs
double avg = 
    (from s in students
     select s.Marks).Average();
```

**Method Syntax:**
```cs
double avg = students.Average(s => s.Marks);
```


# Group By :

**Query Syntax:**
```cs
var result = 
    from s in students
    group s by s.City;
```

**Method Syntax:**
```cs
var result = students.GroupBy(s => s.City);
```

Access Group Data:
```cs
foreach(var grp in result)
{
    Console.WriteLine(grp.key)

    foreach(var s in grp)
    {
        Console.WriteLine(s.Name);
    }
}
```
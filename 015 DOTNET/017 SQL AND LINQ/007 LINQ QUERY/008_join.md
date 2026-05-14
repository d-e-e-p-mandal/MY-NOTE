# Join :

##### Join Data :
```cs
class Student
{
    public int Id;
    public string Name;
    public int Marks;
    public string City;
    public int DeptId;
}
```

```cs
List<Student> students = new List<Student>()
{
    new Student(){ Id=1, Name="Ram", Marks=80, City="Delhi" },
    new Student(){ Id=2, Name="Shyam", Marks=45, City="Mumbai" },
    new Student(){ Id=3, Name="Amit", Marks=70, City="Delhi" }
};
```

```cs
class Department
{
    public int Id;
    public string DeptName;
}
```

```cs
List<Department> departments = new List<Department>()
{
    new Department(){ Id=1, DeptName="IT" },
    new Department(){ Id=2, DeptName="HR" }
};
```

# Join LINQ Query :

**Query Syntax:**
```cs
var result = 
    from s in students
    join d in departments
    on s.DepId equals d.Id
    select new 
    {
        s.Name,
        d.DeptName
    };
```
- In Query Syntax: equals is compulsory.
- Wrong : on s.DepId == d.Id

**Method Syntax:**
```cs
var result = students.Join(
                    departments,
                    s => s.Name
                    d => d.Id;
                    (s, d) => new
                    {
                        s.Name,
                        d.DeptName
                    });
```



### Left Join:
```text
ALL LEFT TABLE RECORDS
+
MATCHING RIGHT TABLE RECORDS
```
- NULL value comes

**Quer Syntax:**
```cs
var result =
    from s in students

    join d in departments
    on s.DeptId equals d.Id
    into deptGroup

    from dg in deptGroup.DefaultIfEmpty()

    select new
    {
        s.Name,

        DeptName =
            dg != null
            ? dg.DeptName
            : "No Department"
    };
```

**Method Syntax:**
```cs
var result =
    students.GroupJoin(
            departments,
            s => s.DeptId,
            d => d.Id,
            (s, deptGroup) => new
            {
                s,
                deptGroup
            })

        .SelectMany(
            x => x.deptGroup.DefaultIfEmpty(),

            (x, d) => new
            {
                x.s.Name,

                DeptName =
                    d != null
                    ? d.DeptName
                    : "No Department"
            });
```

### Right Join:

```text
ALL RIGHT TABLE RECORDS
+
MATCHING LEFT TABLE RECORDS
```
- NULL value comes

- Swap tables + Use LEFT JOIN

**Query Syntax:**
```cs
var result =
    from d in departments

    join s in students
    on d.Id equals s.DeptId
    into studentGroup

    from sg in studentGroup.DefaultIfEmpty()

    select new
    {
        StudentName =
            sg != null
            ? sg.Name
            : "No Student",

        d.DeptName
    };
```

**Method Syntax:**
```cs
var result =
    departments.GroupJoin(
            students,
            d => d.Id,
            s => s.DeptId,
            (d, studentGroup) => new
            {
                d,
                studentGroup
            })

        .SelectMany(
            x => x.studentGroup.DefaultIfEmpty(),

            (x, s) => new
            {
                StudentName =
                    s != null
                    ? s.Name
                    : "No Student",

                x.d.DeptName
            });
```

## GroupJoin

**Query Syntax:**
```cs
var result =
    from d in departments

    join s in students
    on d.Id equals s.DeptId
    into studentGroup

    select new
    {
        d.DeptName,
        Students = studentGroup
    };
```


**Method Syntax:**
```cs
var result =
    departments.GroupJoin(
        students,

        d => d.Id,

        s => s.DeptId,

        (d, studentGroup) => new
        {
            d.DeptName,
            Students = studentGroup
        });
```

##### Access GroupJoin Data:
```cs
foreach(var item in result)
{
    Console.WriteLine(item.DeptName);

    foreach(var s in item.Students)
    {
        Console.WriteLine(s.Name);
    }
}
```

##### GroupJoin Structure:
```cs
outerCollection.GroupJoin(
    innerCollection,
    outerKey,
    innerKey,
    result
)
```
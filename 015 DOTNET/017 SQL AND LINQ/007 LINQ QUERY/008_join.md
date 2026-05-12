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

### Right Join:

## GroupJoin
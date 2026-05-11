# Query Syntax in LINQ (Language Integrated Query)

- LINQ Query Syntax looks similar to SQL.
- It is used to query collections like arrays, lists, databases, XML, etc. in C#.


Basic Structure
```cs
var result =
    from item in collection
    where condition
    select item;
```

Example 1: Simple Query
```cs
using System;
using System.Linq;
class Program
{
    static void Main()
    {
        int[] nums = { 10, 20, 30, 40, 50 };
        var result =
            from n in nums
            select n;
        foreach (var x in result)
        {
            Console.WriteLine(x);
        }
    }
}
```
*Output:*
```
10
20
30
40
50
```
⸻

**Keywords in Query Syntax :**

| Keyword | Purpose |
|---------|---------|
| from | Source collection |
| in|	Iterates collection |
| where |	Filtering |
| select |	Select data |
| orderby |	Sorting |
| group by |	Grouping |
| join |	Joining collections |
| let	 |Create temporary variable |
| into |	Continue query |
| ascending |	Ascending sort |
| descending |	Descending sort |

⸻

##### `from` Clause
- Used to specify data source.

```cs
var result =
    from s in students
    select s;
```
* s → range variable
* students → collection

##### `where` Clause (Filtering)

Works like SQL WHERE.
```cs
int[] nums = { 1, 2, 3, 4, 5, 6 };
var even =
    from n in nums
    where n % 2 == 0
    select n;
```
Output
```
2
4
6
```

##### `select` Clause

Used to choose data.
```cs
string[] names = { "Ram", "Shyam", "Amit" };
var result =
    from n in names
    select n;
```

##### Selecting Specific Fields
```cs
class Student
{
    public int Id;
    public string Name;
}
var result =
    from s in students
    select s.Name;
```

Anonymous Type
```cs
var result =
    from s in students
    select new
    {
        s.Id,
        s.Name
    };
```

##### orderby Clause

##### Sorting data.`Ascending`

```cs
var result =
    from n in nums
    orderby n
    select n;
```

##### Sorting data `Descending`
```cs
var result =
    from n in nums
    orderby n descending
    select n;
```

Multiple Sorting
```cs
var result =
    from s in students
    orderby s.Name, s.Id descending
    select s;
```

##### `group by` Clause

Groups similar data.
```cs
class Student
{
    public string Name;
    public string City;
}
var result =
    from s in students
    group s by s.City;
```

Access Group
```cs
foreach (var grp in result)
{
    Console.WriteLine(grp.Key);
    foreach (var s in grp)
    {
        Console.WriteLine(s.Name);
    }
}
```
⸻

6. join Clause

Works like SQL JOIN.

Example
```cs
class Student
{
    public int DeptId;
    public string Name;
}
class Department
{
    public int Id;
    public string DeptName;
}
var result =
    from s in students
    join d in departments
    on s.DeptId equals d.Id
    select new
    {
        s.Name,
        d.DeptName
    };
```
⸻

Important

In LINQ query syntax:

equals

is compulsory instead of ==.

Correct:

on s.Id equals d.Id

Wrong:

on s.Id == d.Id

⸻

7. let Clause

Creates temporary variable.

var result =
    from n in nums
    let square = n * n
    select new
    {
        Number = n,
        Square = square
    };

⸻

8. into Keyword

Continues query after grouping/selecting.
```cs
var result =
    from s in students
    group s by s.City into grp
    select grp;
```
⸻

9. Multiple from Clause

Like nested loop.
```cs
string[] students = { "Ram", "Shyam" };
string[] subjects = { "Math", "Science" };
var result =
    from s in students
    from sub in subjects
    select new
    {
        s,
        sub
    };
```
⸻

Output

Ram Math
Ram Science
Shyam Math
Shyam Science

⸻

10. Aggregate Functions

Count
```cs
var count =
    (from n in nums
     select n).Count();
```
Sum
```cs
var sum =
    (from n in nums
     select n).Sum();
```
Max
```cs
var max =
    (from n in nums
     select n).Max();
```
Min
```cs
var min =
    (from n in nums
     select n).Min();
```
Average
```cs
var avg =
    (from n in nums
     select n).Average();
```


##### Query Syntax vs Method Syntax

**Query Syntax:**
```cs
var result =
    from n in nums
    where n > 10
    select n;
```

**Method Syntax:**
```cs
var result = nums.Where(n => n > 10);
```

*Internally Query Syntax Converts To:*
```cs
from n in nums
where n > 10
select n;
```
*becomes:*
```cs
nums.Where(n => n > 10)
    .Select(n => n);
```
⸻

Deferred Execution

LINQ queries execute only when iterated.
```cs
var result =
    from n in nums
    where n > 2
    select n;
```
No execution yet.

Execution happens here:

foreach(var x in result)
{
    Console.WriteLine(x);
}

⸻

Immediate Execution

Use methods like:

* ToList()
* ToArray()
* Count()
* First()

Example:

var list =
    (from n in nums
     where n > 2
     select n).ToList();

⸻

Full Real Example

using System;
using System.Linq;
using System.Collections.Generic;
class Student
{
    public int Id;
    public string Name;
    public int Marks;
}
class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>()
        {
            new Student(){ Id=1, Name="Ram", Marks=80 },
            new Student(){ Id=2, Name="Shyam", Marks=45 },
            new Student(){ Id=3, Name="Amit", Marks=70 }
        };
        var result =
            from s in students
            where s.Marks > 50
            orderby s.Name
            select new
            {
                s.Id,
                s.Name,
                s.Marks
            };
        foreach (var x in result)
        {
            Console.WriteLine(x.Id + " " +
                              x.Name + " " +
                              x.Marks);
        }
    }
}

⸻

Advantages of Query Syntax

* Easy to read
* SQL-like syntax
* Good for complex queries
* Better for joins and grouping

⸻

Limitations

Not all LINQ methods support query syntax.

Example:

Take()
Skip()
Contains()
Distinct()

These mostly use Method Syntax.

⸻

Query Syntax + Method Syntax Together

var result =
    (from s in students
     where s.Marks > 50
     select s)
     .Take(2);

⸻

Important Interview Questions

Difference Between IEnumerable and IQueryable

IEnumerable	IQueryable
Works in memory	Executes on database
LINQ to Objects	LINQ to SQL/EF
Faster for small data	Better for DB queries

⸻

Difference Between Query Syntax and Method Syntax

Query Syntax	Method Syntax
SQL-like	Uses lambda
Easy for joins	More powerful
Limited operators	All operators available

⸻

Most Used LINQ Query Example

var result =
    from emp in employees
    where emp.Salary > 50000
    orderby emp.Name
    select emp;

⸻

Syntax Flow Diagram

FROM  -> WHERE -> ORDERBY -> GROUP/JOIN -> SELECT

⸻

Summary

Clause	Work
from	Data source
where	Filter
select	Choose columns
orderby	Sort
join	Combine tables
group by	Group data
let	Temp variable
into	Continue query
# LINQ Method Syntax

**Method Syntax in LINQ uses:**
* Lambda Expressions (=>)
* Extension Methods
* Method Chaining
- It is the most powerful and most used LINQ style.


*Basic Syntax:*
```cs
collection.Method(x => condition);
```
*Example:*
```cs
var result = nums.Where(x => x > 10);
```

## LINQ Methods

|Method | Purpose |
|-----|----|
Where()|	Filtering
Select()|	Projection
OrderBy()|	Sorting
OrderByDescending()|	Descending sort
ThenBy()|	Secondary sorting
GroupBy()|	Grouping
Join()|	Joining
Any()|	Check any item
All()|	Check all items
Count()|	Count
Sum()|	Sum
Max()|	Maximum
Min()|	Minimum
Average()|	Average
First()|	First item
FirstOrDefault()|	Safe first
Single()|	Single item
Take()|	Take records
Skip()|	Skip records
Distinct()|	Remove duplicates
Contains()|	Search item
ToList()|	Convert to list
ToArray()|	Convert to array

⸻

1. Where() → Filtering

Used to filter data.
```CS
using System;
using System.Linq;
class Program
{
    static void Main()
    {
        int[] nums = { 1, 2, 3, 4, 5, 6 };
        var even =
            nums.Where(n => n % 2 == 0);
        foreach (var x in even)
        {
            Console.WriteLine(x);
        }
    }
}
```
Output
```
2
4
6
```
⸻

Multiple Conditions

var result =
    nums.Where(n => n > 2 && n < 6);

⸻

2. Select() → Projection

Used to select data.
```CS
var result =
    nums.Select(n => n);
```
⸻

Select Specific Field

class Student
{
    public int Id;
    public string Name;
}
var result =
    students.Select(s => s.Name);

⸻

Anonymous Object
```cs
var result =
    students.Select(s => new
    {
        s.Id,
        s.Name
    });
```
⸻

3. OrderBy()

Ascending sorting.
```cs
var result =
    nums.OrderBy(n => n);
```
⸻

OrderByDescending()
```cs
var result =
    nums.OrderByDescending(n => n);
```
⸻

ThenBy()

Secondary sorting.

var result =
    students.OrderBy(s => s.Name)
            .ThenBy(s => s.Id);

⸻

4. GroupBy()

Groups data.
```cs
class Student
{
    public string Name;
    public string City;
}
var result =
    students.GroupBy(s => s.City);
```
⸻

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

5. Join()

Works like SQL JOIN.

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
    students.Join(
        departments,
        s => s.DeptId,
        d => d.Id,
        (s, d) => new
        {
            s.Name,
            d.DeptName
        });

⸻

Join() Structure

collection1.Join(
    collection2,
    outerKeySelector,
    innerKeySelector,
    resultSelector
);

⸻

6. Any()

Checks whether any item exists.

bool result =
    nums.Any(n => n > 5);

⸻

7. All()

Checks all satisfy condition.

bool result =
    nums.All(n => n > 0);

⸻

8. Count()

int count =
    nums.Count();

With condition:

int count =
    nums.Count(n => n > 3);

⸻

9. Sum()

int sum =
    nums.Sum();

⸻

10. Max()

int max =
    nums.Max();

⸻

11. Min()

int min =
    nums.Min();

⸻

12. Average()

double avg =
    nums.Average();

⸻

13. First()

Returns first element.

int first =
    nums.First();

⸻

First with Condition

int first =
    nums.First(n => n > 3);

⸻

Problem with First()

Throws exception if no data found.

⸻

14. FirstOrDefault()

Safer version.

int first =
    nums.FirstOrDefault(n => n > 100);

Default value for int = 0

⸻

15. Single()

Exactly one item required.

var result =
    students.Single(s => s.Id == 1);

Throws exception if:

* No record
* Multiple records

⸻

16. SingleOrDefault()

Safe version of Single.

var result =
    students.SingleOrDefault(s => s.Id == 1);

⸻

17. Take()

Take first records.

var result =
    nums.Take(3);

⸻

18. Skip()

Skip records.

var result =
    nums.Skip(2);

⸻

Pagination Example

var result =
    nums.Skip(10)
        .Take(5);

⸻

19. Distinct()

Removes duplicates.

int[] nums = { 1, 1, 2, 2, 3 };
var result =
    nums.Distinct();

⸻

20. Contains()

Search item.

bool found =
    nums.Contains(5);

⸻

21. ToList()

Converts into List.

List<int> list =
    nums.ToList();

⸻

22. ToArray()

int[] arr =
    nums.ToArray();

⸻

Method Chaining

LINQ methods can chain together.

var result =
    nums.Where(n => n > 2)
        .OrderBy(n => n)
        .Select(n => n);

⸻

Real Example

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
        List<Student> students =
            new List<Student>()
        {
            new Student(){ Id=1, Name="Ram", Marks=80 },
            new Student(){ Id=2, Name="Amit", Marks=40 },
            new Student(){ Id=3, Name="Shyam", Marks=70 }
        };
        var result =
            students.Where(s => s.Marks > 50)
                    .OrderBy(s => s.Name)
                    .Select(s => new
                    {
                        s.Id,
                        s.Name,
                        s.Marks
                    });
        foreach (var x in result)
        {
            Console.WriteLine(
                x.Id + " " +
                x.Name + " " +
                x.Marks);
        }
    }
}

⸻

Deferred Execution

Query executes only during iteration.

var result =
    nums.Where(n => n > 2);

Execution happens here:

foreach(var x in result)
{
    Console.WriteLine(x);
}

⸻

Immediate Execution

Methods causing immediate execution:

Method

ToList()

ToArray()

Count()

First()

Sum()

Example:

var list =
    nums.Where(n => n > 2)
        .ToList();

⸻

LINQ Execution Types

Type	Meaning
Deferred	Executes later
Immediate	Executes immediately

⸻

IEnumerable vs IQueryable

IEnumerable	IQueryable
In-memory	Database query
LINQ to Objects	LINQ to SQL / EF Core
Faster small data	Better DB optimization

⸻

LINQ in EF Core

Example:

var students =
    context.Students
           .Where(s => s.Marks > 50)
           .OrderBy(s => s.Name)
           .ToList();

Generated SQL internally:

SELECT *
FROM Students
WHERE Marks > 50
ORDER BY Name

⸻

Advantages of Method Syntax

Advantage

More powerful

Supports all LINQ operators

Better for complex operations

Most used in EF Core

Easy method chaining

⸻

Disadvantages

Disadvantage

Harder to read for beginners

Complex nested lambdas

⸻

Query Syntax Internally Converts To Method Syntax

from n in nums
where n > 2
select n;

becomes:

nums.Where(n => n > 2)
    .Select(n => n);

⸻

Important Interview Questions

Difference Between Select and Where

Select	Where
Chooses data	Filters data

⸻

Difference Between First and Single

First	Single
Returns first match	Requires exactly one match

⸻

Difference Between Any and All

Any	All
At least one true	All must be true

⸻

Most Important LINQ Flow

Where → OrderBy → Select → ToList

⸻

Summary Table

Method	Work
Where()	Filter
Select()	Select
OrderBy()	Sort
GroupBy()	Group
Join()	Join
Count()	Count
Sum()	Sum
First()	First item
Take()	Take records
Skip()	Skip records
Distinct()	Remove duplicates
ToList()	Convert to List
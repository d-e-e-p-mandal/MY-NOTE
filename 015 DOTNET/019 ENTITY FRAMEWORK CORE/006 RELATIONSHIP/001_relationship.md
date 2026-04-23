Here is your 📘 UNIT 8: RELATIONSHIPS (FULL DETAILED NOTES)
👉 Written in very clear + step-by-step + exam + interview format 👇

⸻

🔗 UNIT 8: RELATIONSHIPS IN EF CORE

⸻

🔹 1. What is Relationship?

🧠 Definition

👉 Relationship means:

Connection between two tables in database

⸻

📌 Example
	•	One Department → Many Employees
	•	One Student → Many Courses

⸻

🧠 Why Relationships?
	•	Avoid data duplication
	•	Maintain data integrity
	•	Organize data properly

⸻

🔹 2. Types of Relationships

⸻

🔥 1. ONE-TO-ONE (1 : 1)

⸻

🧠 Definition

👉 One record in Table A → One record in Table B

⸻

📌 Example
	•	One Person → One Passport

⸻

📌 Model Example

public class Person
{
    public int Id { get; set; }
    public string Name { get; set; }

    public Passport Passport { get; set; }
}

public class Passport
{
    public int Id { get; set; }
    public string Number { get; set; }

    public int PersonId { get; set; }
    public Person Person { get; set; }
}


⸻

🧠 Key Point

👉 Foreign key is usually in dependent table (Passport)

⸻

🔥 2. ONE-TO-MANY (1 : M) ⭐ MOST IMPORTANT

⸻

🧠 Definition

👉 One record → Many records

⸻

📌 Example
	•	One Department → Many Employees

⸻

📌 Model Example

public class Department
{
    public int Id { get; set; }
    public string Name { get; set; }

    public List<Employee> Employees { get; set; }
}

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }

    public int DepartmentId { get; set; }
    public Department Department { get; set; }
}


⸻

🧠 Key Points
	•	Department → Parent
	•	Employee → Child
	•	Foreign key → DepartmentId

⸻

🔥 3. MANY-TO-MANY (M : M)

⸻

🧠 Definition

👉 Many records ↔ Many records

⸻

📌 Example
	•	Students ↔ Courses

⸻

📌 Model Example (EF Core 5+)

public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }

    public List<Course> Courses { get; set; }
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; }

    public List<Student> Students { get; set; }
}


⸻

🧠 Internal Working

👉 EF automatically creates junction table

StudentCourse
(StudentId, CourseId)


⸻

🔹 3. Navigation Properties

⸻

🧠 Definition

👉 Properties used to navigate between related entities

⸻

📌 Example

public Department Department { get; set; }
public List<Employee> Employees { get; set; }


⸻

🔥 Types

Type	Example
Reference	Department
Collection	List


⸻

🧠 Why Use?
	•	Easy access to related data
	•	Enables joins automatically

⸻

🔹 4. Foreign Keys

⸻

🧠 Definition

👉 Foreign Key = Column that links two tables

⸻

📌 Example

public int DepartmentId { get; set; }


⸻

🧠 Role
	•	Maintains relationship
	•	Ensures data integrity

⸻

🔥 EF Convention

👉 EF automatically detects:
	•	ClassNameId → Foreign key

⸻

🔹 5. Relationship Configuration

⸻

✅ Using Convention (Automatic)

👉 EF detects relationships automatically

⸻

✅ Using Data Annotation

[ForeignKey("Department")]
public int DepartmentId { get; set; }


⸻

✅ Using Fluent API

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Employee>()
        .HasOne(e => e.Department)
        .WithMany(d => d.Employees)
        .HasForeignKey(e => e.DepartmentId);
}


⸻

🔹 6. Loading Related Data

⸻

🔥 Eager Loading

var data = db.Employees
             .Include(e => e.Department)
             .ToList();


⸻

🔥 Lazy Loading

👉 Data loads automatically when accessed

⸻

🔥 Explicit Loading

db.Entry(emp).Reference(e => e.Department).Load();


⸻


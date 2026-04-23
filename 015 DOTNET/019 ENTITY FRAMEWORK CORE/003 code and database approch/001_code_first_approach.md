Here is your 📘 UNIT 4: Code First Approach (FULL DETAILED NOTES)
👉 Includes Data Annotations + Fluent API (both approaches in depth) 👇

⸻

🧱 UNIT 4: CODE FIRST APPROACH (EF CORE)

⸻

🔹 1. Concept of Code First

🧠 Definition

👉 Code First means:

You write C# classes → EF Core creates database automatically

⸻

🔥 Flow

C# Classes → DbContext → Migration → Database


⸻

📌 Why Code First?
	•	No need to design DB manually
	•	Full control from code
	•	Easy to maintain
	•	Used in modern applications

⸻

🔹 2. Creating Models (Entities)

👉 Models = Tables

⸻

📌 Example

public class Employee
{
    public int Id { get; set; }      // Primary Key
    public string Name { get; set; }
    public int Salary { get; set; }
}


⸻

🔥 Rules
	•	Class must be public
	•	Must have primary key
	•	Properties → columns

⸻

🔹 3. Add DbContext

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Employee> Employees { get; set; }
}


⸻

🔹 4. Generating Database (Migrations)

🧠 What is Migration?

👉 Migration = Process to create/update database from models

⸻

📌 Commands

dotnet ef migrations add InitialCreate
dotnet ef database update


⸻

🔥 What happens?
	•	EF creates migration file
	•	Generates SQL
	•	Creates database

⸻

🔹 5. Data Annotations (Attribute-Based Approach)

🧠 Definition

👉 Configuration using attributes inside model class

⸻

📌 Example

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Employee
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; }

    [Column("EmpSalary")]
    public int Salary { get; set; }
}


⸻

🔥 Common Attributes

Attribute	Purpose
[Key]	Primary key
[Required]	Not null
[MaxLength]	Limit size
[Column]	Rename column
[Table]	Rename table
[NotMapped]	Ignore property


⸻

✅ Advantages
	•	Easy to use
	•	Quick setup
	•	Good for small projects

⸻

❌ Disadvantages
	•	Limited flexibility
	•	Mixes logic with model

⸻

🔹 6. Fluent API (Method-Based Approach)

🧠 Definition

👉 Configuration using code inside OnModelCreating()

⸻

📌 Example

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Employee>(entity =>
    {
        entity.HasKey(e => e.Id);

        entity.Property(e => e.Name)
              .IsRequired()
              .HasMaxLength(50);

        entity.Property(e => e.Salary)
              .HasColumnName("EmpSalary");
    });
}


⸻

🔥 Common Methods

Method	Purpose
HasKey()	Primary key
Property()	Configure column
IsRequired()	Not null
HasMaxLength()	Length
ToTable()	Table name
HasOne()	Relationship


⸻

✅ Advantages
	•	More powerful
	•	Full control
	•	Better for complex systems

⸻

❌ Disadvantages
	•	More code
	•	Slightly complex

⸻

🔥 Data Annotation vs Fluent API

Feature	Data Annotation	Fluent API
Type	Attribute	Code
Location	Inside model	DbContext
Flexibility	Low	High
Best for	Small apps	Large apps


⸻

🔹 7. Which One to Use?

👉 Rule:
	•	Small project → Data Annotation
	•	Large project → Fluent API
	•	Complex mapping → Fluent API

⸻

🔹 8. Real Example (Combined)

[Table("Employees")]
public class Employee
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }
}

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Employee>()
        .Property(e => e.Name)
        .HasMaxLength(100);
}


⸻

🎯 FINAL SUMMARY
	•	Code First = C# → DB
	•	Migration = Create/update DB
	•	Data Annotation = Attribute-based config
	•	Fluent API = Advanced config
	•	Fluent API > Data Annotation in flexibility


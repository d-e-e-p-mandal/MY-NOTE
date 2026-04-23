
🧱 DATABASE FIRST APPROACH (EF CORE)

⸻

🔹 1. Concept of Database First

🧠 Definition

👉 Database First means:

Database is already created → EF Core generates C# classes from it

⸻

🔥 Flow

Database → EF Core → Models (Classes) → DbContext


⸻

📌 Example

👉 You already have database:
	•	Table: Employees
	•	Columns: Id, Name, Salary

👉 EF will generate:

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}


⸻

🔹 2. When to Use Database First?
	•	Existing database project
	•	Legacy systems
	•	Database designed by DBA
	•	Large enterprise systems

⸻

🔹 3. Steps to Use Database First

⸻

🔹 Step 1: Install Tools

dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Tools


⸻

🔹 Step 2: Scaffold Database

👉 Command:

dotnet ef dbcontext scaffold "Server=.;Database=TestDB;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o Models


⸻

🔥 What this does?
	•	Reads database schema
	•	Creates:
	•	Entity classes
	•	DbContext

⸻

🔹 4. Generated Files

📌 Example Entity

public partial class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}


⸻

📌 DbContext

public partial class TestDbContext : DbContext
{
    public virtual DbSet<Employee> Employees { get; set; }
}


⸻

🔹 5. Key Features
	•	Auto-generated code
	•	Uses existing tables
	•	No need to write models manually

⸻

🔹 6. Limitations

❌ Database changes → need to re-scaffold
❌ Hard to customize
❌ Code may be overwritten

⸻

🔹 7. Code First vs Database First

Feature	Code First	Database First
Start point	Code	Database
Control	Developer	Database
Flexibility	High	Medium
Use case	New apps	Existing DB


⸻

🔹 8. Important Options in Scaffold

dotnet ef dbcontext scaffold "connection" provider -o Models -f

👉 Options:
	•	-o → Output folder
	•	-f → Force overwrite
	•	-t → Specific table

⸻

🎯 FINAL SUMMARY
	•	Database First = DB → Code
	•	Uses scaffold command
	•	Generates models automatically
	•	Best for existing databases

⸻

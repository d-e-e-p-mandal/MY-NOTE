Got it 👍 — I’ll rewrite UNIT 5: Migrations in a very simple + clear + step-by-step way (easy to understand & remember)

⸻

🔄 UNIT 5: MIGRATIONS (SIMPLE & CLEAR NOTES)

⸻

🔹 1. What is Migration?

👉 Migration means:

Updating database automatically when your C# model changes

⸻

🧠 Simple Idea

Change Model → Create Migration → Update Database


⸻

📌 Example

👉 You create model:

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}

👉 Migration will create table:

Employees (Id, Name)


⸻

🔹 2. Creating Migration

👉 Command:

dotnet ef migrations add InitialCreate


⸻

🧠 What happens?
	•	EF checks your model
	•	Creates a migration file
	•	Stores changes

⸻

📌 Output

👉 Folder created:

Migrations/

👉 Inside:
	•	Migration file
	•	Snapshot file

⸻

🔹 3. Updating Database

👉 Command:

dotnet ef database update


⸻

🧠 What happens?
	•	EF converts migration → SQL
	•	Executes SQL
	•	Creates table in database

⸻

🔹 4. Modifying Database (Schema Change)

👉 Example: Add new column

public int Salary { get; set; }


⸻

🔁 Steps

dotnet ef migrations add AddSalary
dotnet ef database update


⸻

🧠 Result

👉 Database updated automatically

⸻

🔹 5. Removing Migration

👉 Command:

dotnet ef migrations remove


⸻

⚠️ Important

👉 Works only if:
	•	Migration NOT applied yet

⸻

🔹 6. Migration Files (IMPORTANT)

⸻

📂 Migration File

public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        // Apply changes
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        // Undo changes
    }
}


⸻

🔥 Up() Method

👉 Used to:
	•	Create table
	•	Add column

👉 Forward changes

⸻

🔥 Down() Method

👉 Used to:
	•	Delete table
	•	Remove column

👉 Rollback changes

⸻

📂 Snapshot File

👉 Keeps record of:
	•	Last database structure

👉 Helps EF compare changes

⸻

🔹 7. Full Flow (VERY IMPORTANT)

1. Create Model
2. Add Migration
3. Update Database
4. Change Model
5. Add Migration
6. Update Database


⸻

🔹 8. Common Commands

Command	Meaning
migrations add	Create migration
database update	Apply changes
migrations remove	Delete last migration


⸻

🔹 9. Common Errors
	•	EF tools not installed
	•	Wrong connection string
	•	DbContext not found

⸻

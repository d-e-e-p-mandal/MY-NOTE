
⸻

🔁 UNIT 6: CRUD OPERATIONS (FULL DETAILED NOTES)

⸻

🔹 1. What is CRUD?

👉 CRUD = Basic database operations:

Operation	Meaning
Create	Insert new data
Read	Fetch data
Update	Modify data
Delete	Remove data


⸻

🧠 In EF Core

👉 CRUD is done using:
	•	DbContext
	•	DbSet<T>

⸻

🔹 2. INSERT (Create Data)

⸻

📌 Example

var emp = new Employee
{
    Name = "Deep",
    Salary = 50000
};

db.Employees.Add(emp);
db.SaveChanges();


⸻

🧠 Internal Working
	1.	Add() → Entity state becomes Added
	2.	EF starts tracking object
	3.	SaveChanges():
	•	Converts to SQL:

INSERT INTO Employees (Name, Salary) VALUES ('Deep', 50000);

	•	Executes query

⸻

⚡ Key Point

👉 Add() only prepares data
👉 SaveChanges() actually saves data

⸻

🔹 3. READ (Fetch Data)

⸻

📌 Examples

Get all

var list = db.Employees.ToList();

Get by ID

var emp = db.Employees.Find(1);

With condition

var emp = db.Employees
            .Where(e => e.Name == "Deep")
            .FirstOrDefault();


⸻

🧠 Internal Working

👉 EF converts LINQ → SQL:

SELECT * FROM Employees WHERE Name = 'Deep';


⸻

⚡ Important Concepts

🔥 Find()
	•	Uses Primary Key
	•	Checks memory first (cache)
	•	Faster

⸻

🔥 FirstOrDefault()
	•	Executes query directly
	•	Flexible condition

⸻

🔹 4. UPDATE (Modify Data)

⸻

📌 Example

var emp = db.Employees.Find(1);

emp.Name = "Updated";
emp.Salary = 60000;

db.SaveChanges();


⸻

🧠 Internal Working
	1.	EF tracks entity
	2.	Detects changes
	3.	Generates SQL:

UPDATE Employees SET Name = 'Updated', Salary = 60000 WHERE Id = 1;


⸻

⚡ Important

👉 No need to call Update() manually (in most cases)

⸻

🔹 5. DELETE (Remove Data)

⸻

📌 Example

var emp = db.Employees.Find(1);

db.Employees.Remove(emp);
db.SaveChanges();


⸻

🧠 Internal Working
	•	Entity state → Deleted
	•	SQL:

DELETE FROM Employees WHERE Id = 1;


⸻

🔹 6. SaveChanges() (VERY IMPORTANT 🔥)

⸻

🧠 Definition

👉 SaveChanges() commits all tracked changes to database

⸻

🔥 Internal Steps
	1.	Detect changes
	2.	Generate SQL
	3.	Execute SQL
	4.	Update database

⸻

⚡ Key Concept

👉 EF works on Unit of Work pattern

👉 You can do multiple operations:

db.Add(emp1);
db.Add(emp2);
db.Remove(emp3);

db.SaveChanges();   // Executes all together


⸻

🔹 7. ASYNC OPERATIONS (VERY IMPORTANT 🔥🔥🔥)

⸻

🧠 What is Async?

👉 Async = Non-blocking execution

👉 Instead of waiting, program continues work

⸻

📌 Example

await db.SaveChangesAsync();


⸻

🔥 Why Use Async? (VERY IMPORTANT)

⸻

⚡ Problem with Sync (Normal)

db.SaveChanges();

👉 Issues:
	•	Blocks thread
	•	Slower in web apps
	•	Cannot handle multiple users efficiently

⸻

⚡ Async Solution

await db.SaveChangesAsync();

👉 Benefits:
	•	Does NOT block thread
	•	Improves performance
	•	Handles multiple requests
	•	Best for Web API

⸻

🔥 Real Example (Web API)

👉 Without async:
	•	100 users → 100 blocked threads ❌

👉 With async:
	•	Threads are free → better scalability ✅

⸻

🔹 Async Read Example

var list = await db.Employees.ToListAsync();


⸻

🔹 Async Insert Example

await db.Employees.AddAsync(emp);
await db.SaveChangesAsync();


⸻

🔥 When to Use Async?

Scenario	Use Async?
Console app	Optional
Web API	MUST ✅
High traffic app	MUST ✅


⸻

🔹 8. Entity States (IMPORTANT)

State	Meaning
Added	Insert
Modified	Update
Deleted	Delete
Unchanged	No change


⸻

🔹 9. Full Example (Sync vs Async)

⸻

❌ Sync

db.Employees.Add(emp);
db.SaveChanges();


⸻

✅ Async

await db.Employees.AddAsync(emp);
await db.SaveChangesAsync();


⸻

🔹 10. Best Practices
	•	Use async in Web API 🔥
	•	Use Find() for primary key
	•	Minimize multiple SaveChanges calls
	•	Use tracking wisely

⸻

🎯 FINAL SUMMARY
	•	CRUD = Create, Read, Update, Delete
	•	SaveChanges = Commit data
	•	EF tracks changes automatically
	•	Async = Non-blocking, better performance

⸻

💡 INTERVIEW QUESTIONS
	1.	What is SaveChanges()?
	2.	Difference between SaveChanges and SaveChangesAsync?
	3.	Why async is used?
	4.	What is entity tracking?
	5.	Difference between Find() and FirstOrDefault()?

⸻

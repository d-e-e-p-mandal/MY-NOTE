
📦 UNIT 9: LOADING DATA IN EF CORE

⸻

🔹 1. What is Loading Data?

🧠 Definition

👉 Loading data means:

How EF Core loads related data (from other tables)

⸻

📌 Example

👉 Tables:
	•	Employee
	•	Department

👉 Question:
	•	When we fetch Employee → should Department also be loaded?

👉 This is called loading strategy

⸻

🔥 TYPES OF LOADING

⸻

🔹 2. EAGER LOADING (Include) 🔥

⸻

🧠 Definition

👉 Related data is loaded immediately with main query

⸻

📌 Example

var data = db.Employees
             .Include(e => e.Department)
             .ToList();


⸻

🧠 What happens?

👉 Single SQL query:

SELECT * FROM Employees
JOIN Departments ON Employees.DepartmentId = Departments.Id;


⸻

🔥 Key Points
	•	Data loaded in one query
	•	Fast for known requirements
	•	Avoids multiple queries

⸻

✅ Advantages
	•	Better performance (fewer queries)
	•	Simple to use

⸻

❌ Disadvantages
	•	Loads extra data (may be unnecessary)
	•	Can slow down if too much data

⸻

🔹 3. LAZY LOADING 🔥

⸻

🧠 Definition

👉 Related data is loaded only when accessed

⸻

📌 Example

var emp = db.Employees.First();

var dept = emp.Department;  // Loaded here


⸻

🧠 What happens?

👉 First query:

SELECT * FROM Employees;

👉 Second query (when accessed):

SELECT * FROM Departments WHERE Id = 1;


⸻

🔥 Requirements

👉 Install package:

dotnet add package Microsoft.EntityFrameworkCore.Proxies

👉 Enable:

options.UseLazyLoadingProxies();

👉 Navigation property must be:

public virtual Department Department { get; set; }


⸻

⚠️ Problem: N+1 Issue

👉 Example:
	•	1 query for employees
	•	N queries for departments

👉 Total = N+1 queries ❌

⸻

✅ Advantages
	•	Loads only needed data
	•	Saves memory

⸻

❌ Disadvantages
	•	Multiple queries (slow)
	•	Hard to debug

⸻

🔹 4. EXPLICIT LOADING 🔥

⸻

🧠 Definition

👉 Related data is loaded manually when needed

⸻

📌 Example

var emp = db.Employees.First();

db.Entry(emp)
  .Reference(e => e.Department)
  .Load();


⸻

🧠 What happens?

👉 Separate query only when called

⸻

🔥 Collection Example

db.Entry(dept)
  .Collection(d => d.Employees)
  .Load();


⸻

✅ Advantages
	•	Full control
	•	Load only when needed

⸻

❌ Disadvantages
	•	More code
	•	Developer responsibility

⸻

🔹 5. Comparison (VERY IMPORTANT)

Feature	Eager	Lazy	Explicit
Query count	1	Many	Controlled
Performance	Good	Poor (N+1)	Medium
Control	Low	Low	High
Use case	Known data	Small data	Conditional


⸻

🔹 6. When to Use What?

⸻

✅ Use Eager Loading
	•	When you know related data is needed
	•	Example: Employee + Department

⸻

❌ Avoid Lazy Loading
	•	Large data
	•	Performance-critical apps

⸻

✅ Use Explicit Loading
	•	When condition-based loading needed
	•	When you want control

⸻

🔹 7. Real Example (IMPORTANT)

⸻

Eager

var employees = db.Employees
                  .Include(e => e.Department)
                  .ToList();


⸻

Lazy

var emp = db.Employees.First();
var dept = emp.Department;


⸻

Explicit

var emp = db.Employees.First();

db.Entry(emp)
  .Reference(e => e.Department)
  .Load();


⸻

🎯 FINAL SUMMARY
	•	Loading = fetching related data
	•	Eager → Immediate
	•	Lazy → On demand
	•	Explicit → Manual


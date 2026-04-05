Here is your 📘 UNIT 4: Routing & Controllers (FULL DETAILED + SIMPLE NOTES) 👇

⸻

🛣️ UNIT 4: ROUTING & CONTROLLERS

⸻

🔹 1. Routing Concept

🧠 Definition

👉 Routing means:

Mapping URL → Controller → Action method

⸻

📌 Example

https://localhost:5001/api/employee

👉 This URL will call:
	•	Controller → EmployeeController
	•	Action → method inside it

⸻

🔥 Simple Flow

URL → Routing → Controller → Action → Response


⸻

🔹 2. Conventional Routing

⸻

🧠 Definition

👉 Routing defined in one central place (Program.cs)

⸻

📌 Example

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);


⸻

🧠 Meaning

/controller/action/id

👉 Example:

/home/index/1


⸻

✅ Advantage
	•	Simple
	•	Central control

⸻

❌ Disadvantage
	•	Less flexible

⸻

🔹 3. Attribute Routing 🔥

⸻

🧠 Definition

👉 Routing defined directly on controller or method

⸻

📌 Example

[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Data");
    }
}


⸻

🧠 URL

/api/employee


⸻

✅ Advantage
	•	Flexible
	•	Easy to understand

⸻

❌ Disadvantage
	•	More code

⸻

🔹 4. Route Parameters

⸻

🧠 Definition

👉 Passing values through URL

⸻

📌 Example

[HttpGet("{id}")]
public IActionResult GetById(int id)
{
    return Ok(id);
}


⸻

🧠 URL

/api/employee/5

👉 id = 5

⸻

🔥 Multiple Parameters

[HttpGet("{id}/{name}")]
public IActionResult Get(int id, string name)


⸻

🔹 5. Controllers and Action Methods

⸻

🧠 Controller

👉 Class that handles requests

⸻

📌 Example

public class EmployeeController : ControllerBase
{
}


⸻

🧠 Action Method

👉 Method inside controller

⸻

📌 Example

[HttpGet]
public IActionResult GetAll()
{
    return Ok("Employees");
}


⸻

🔥 Types of Actions

Method	Use
GET	Read data
POST	Insert
PUT	Update
DELETE	Remove


⸻

🔹 6. Full Example

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok("All Employees");
    }

    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        return Ok(id);
    }

    [HttpPost]
    public IActionResult Create()
    {
        return Ok("Created");
    }
}


⸻

🎯 FINAL SUMMARY
	•	Routing = URL → method
	•	Conventional = defined in Program.cs
	•	Attribute = defined in controller
	•	Route parameter = value in URL
	•	Controller = handles request
	•	Action = method

⸻

💡 INTERVIEW QUESTIONS
	1.	What is routing?
	2.	Difference between conventional and attribute routing?
	3.	What are route parameters?
	4.	What is controller?
	5.	What is action method?

⸻
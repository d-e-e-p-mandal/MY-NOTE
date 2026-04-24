
# WEB API (ASP.NET CORE)

# Introduction to Web API

**Definition :** Web API is used to Send and receive data between client and server (mostly JSON)

Example :
Mobile app / React app ↔ Web API ↔ Database

Simple Flow :
Client → API → Database → API → Client


🔹 2. RESTful Services

Definition : REST = Standard way to build APIs using HTTP

Rules of REST
	•	Use proper HTTP methods
	•	Use URL for resources
	•	Stateless (no memory of previous request)

Example URL
GET /api/employees

### HTTP METHOD ATTRIBUTES

| Attribute      | Purpose             |
|---------------|--------------------|
| [HttpGet]     | Fetch data         |
| [HttpPost]    | Create data        |
| [HttpPut]     | Update full data   |
| [HttpPatch]   | Partial update     |
| [HttpDelete]  | Delete data        |

Example
```cs
[HttpGet]
public IActionResult Task<List<string>> GetAll()
```

⸻

4. API Controllers

Definition : Controller that handles API requests

⸻

📌 Example

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
}


⸻

🔥 Key Points
	•	[ApiController] → Enables API features
	•	ControllerBase → No UI, only data

⸻

🔹 5. IActionResult

🧠 Definition

👉 Return type for API responses

⸻

📌 Example

public IActionResult Get()
{
    return Ok("Hello");
}


⸻

🔥 Common Results

Method	Meaning
Ok()	200 success
NotFound()	404 error
BadRequest()	400 error


⸻

🔹 6. Status Codes

🧠 Definition

👉 HTTP response codes

⸻

📌 Common Codes

Code	Meaning
200	Success
201	Created
400	Bad request
404	Not found
500	Server error


⸻

📌 Example

return NotFound();


⸻

🔹 7. Model Binding

🧠 Definition

👉 Converts request data → C# object

⸻

📌 Example

[HttpPost]
public IActionResult Create(Employee emp)
{
    return Ok(emp);
}


⸻

🧠 How it works?

👉 JSON from client:

{
  "name": "Deep"
}

👉 Converted into:

Employee emp


⸻

🔹 8. Validation 🔥

🧠 Definition

👉 Ensures data is correct

⸻

📌 Example

using System.ComponentModel.DataAnnotations;

public class Employee
{
    [Required]
    public string Name { get; set; }
}


⸻

📌 Controller Check

if (!ModelState.IsValid)
{
    return BadRequest(ModelState);
}


⸻

🔥 Benefits
	•	Prevents wrong data
	•	Improves security

⸻

🔹 9. Full Example

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Data");
    }

    [HttpPost]
    public IActionResult Create(Employee emp)
    {
        if (!ModelState.IsValid)
            return BadRequest();

        return Ok(emp);
    }
}


⸻

🎯 FINAL SUMMARY
	•	Web API → Data communication
	•	REST → Standard design
	•	HTTP methods → CRUD
	•	IActionResult → Response
	•	Model binding → JSON → Object
	•	Validation → Check data

⸻

💡 INTERVIEW QUESTIONS
	1.	What is Web API?
	2.	What is REST?
	3.	Difference between GET and POST?
	4.	What is IActionResult?
	5.	What is model binding?

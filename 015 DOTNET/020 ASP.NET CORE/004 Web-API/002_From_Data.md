Good 👍 — now let’s cover ALL types of From* attributes in ASP.NET Core (FULL DETAIL + examples) 👇

⸻

📘 ALL MODEL BINDING ATTRIBUTES (From*)

👉 Used to tell ASP.NET:

“Data is coming from where?”

⸻

🔹 1. [FromBody] 🔥

🧠 Meaning

👉 Read data from request body (JSON)

⸻

📌 Example

[HttpPost]
public IActionResult Create([FromBody] Employee emp)
{
    return Ok(emp);
}

⸻

📌 Request

{
  "name": "Deep",
  "salary": 50000
}

⸻

🔥 Notes

* Used in POST / PUT
* Only one FromBody allowed
* Uses JSON deserialization

⸻

🔹 2. [FromQuery]

🧠 Meaning

👉 Read from query string

⸻

📌 Example

[HttpGet]
public IActionResult Get([FromQuery] int id)
{
    return Ok(id);
}

⸻

📌 URL

/api/employee?id=5

⸻

🔥 Notes

* Used in GET
* Good for filters, pagination

⸻

🔹 3. [FromRoute]

🧠 Meaning

👉 Read from URL path

⸻

📌 Example

[HttpGet("{id}")]
public IActionResult Get([FromRoute] int id)
{
    return Ok(id);
}

⸻

📌 URL

/api/employee/5

⸻

🔥 Notes

* Used for resource identification
* Matches route parameter

⸻

🔹 4. [FromForm]

🧠 Meaning

👉 Read from form-data

⸻

📌 Example

[HttpPost]
public IActionResult Upload([FromForm] string name)
{
    return Ok(name);
}

⸻

📌 Used for

* File upload
* HTML forms

⸻

🔹 5. [FromHeader]

🧠 Meaning

👉 Read from request headers

⸻

📌 Example

[HttpGet]
public IActionResult Get([FromHeader] string token)
{
    return Ok(token);
}

⸻

📌 Header

token: abc123

⸻

🔹 6. [FromServices] 🔥

🧠 Meaning

👉 Inject service from Dependency Injection

⸻

📌 Example

[HttpGet]
public IActionResult Get([FromServices] ILogger logger)
{
    return Ok("Service injected");
}

⸻

🔥 Notes

* Rarely used in parameters
* Usually use constructor injection

⸻

🔹 7. [FromQuery(Name = "...")]

🧠 Meaning

👉 Rename query parameter

⸻

📌 Example

[HttpGet]
public IActionResult Get([FromQuery(Name = "emp_id")] int id)
{
    return Ok(id);
}

⸻

📌 URL

/api/employee?emp_id=5

⸻

🔹 8. [FromRoute(Name = "...")]

[HttpGet("{emp_id}")]
public IActionResult Get([FromRoute(Name = "emp_id")] int id)
{
    return Ok(id);
}

⸻

🔹 9. `[FromBody] vs Others (IMPORTANT)

Attribute	Source
FromBody	JSON body
FromQuery	Query string
FromRoute	URL path
FromForm	Form-data
FromHeader	Headers
FromServices	DI container

⸻

🔥 AUTO BEHAVIOR (VERY IMPORTANT)

👉 With [ApiController]:

Simple types (int, string) → FromQuery  
Complex types (class) → FromBody  

⸻

🔥 FULL EXAMPLE (ALL TOGETHER)

[HttpPost("{id}")]
public IActionResult Test(
    [FromRoute] int id,            // URL
    [FromQuery] string name,       // query
    [FromHeader] string token,     // header
    [FromBody] Employee emp        // body
)
{
    return Ok(new { id, name, token, emp });
}

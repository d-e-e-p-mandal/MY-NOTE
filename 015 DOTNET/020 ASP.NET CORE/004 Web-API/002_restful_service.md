
📘 RESTful SERVICES – FULL DETAILED NOTE

⸻

🔹 1. WHAT IS REST?

👉 REST = Representational State Transfer

👉 It is an architectural style used to design web APIs.

👉 In simple:

REST → rules to build APIs using HTTP

⸻

🔹 2. WHAT IS A RESTFUL SERVICE?

👉 A RESTful service is an API that:

* Follows REST principles
* Uses HTTP methods
* Uses URLs to represent resources

⸻

📌 Example

/api/employees

👉 “employees” = resource

⸻

🔹 3. CORE CONCEPTS OF REST

⸻

✅ 1. Resource

👉 Anything that can be accessed via API

Employee, Product, User

⸻

✅ 2. URI (Uniform Resource Identifier)

👉 Unique address of resource

/api/employees/1

⸻

✅ 3. Representation

👉 Data format of resource

{
  "id": 1,
  "name": "Deep"
}

👉 Formats:

* JSON (most common)
* XML

⸻

🔹 4. HTTP METHODS (VERY IMPORTANT)

⸻

🔹 GET → Read data

GET /api/employees

👉 Fetch data

⸻

🔹 POST → Create data

POST /api/employees

👉 Add new record

⸻

🔹 PUT → Update full data

PUT /api/employees/1

👉 Replace data

⸻

🔹 PATCH → Partial update

PATCH /api/employees/1

👉 Update specific fields

⸻

🔹 DELETE → Remove data

DELETE /api/employees/1

👉 Delete resource

⸻

🔹 5. HTTP STATUS CODES

⸻

200 → OK  
201 → Created  
204 → No Content  
400 → Bad Request  
401 → Unauthorized  
403 → Forbidden  
404 → Not Found  
500 → Server Error  

⸻

🔹 6. REST PRINCIPLES (IMPORTANT)

⸻

✅ 1. Stateless

Each request is independent

👉 Server does not store client state

⸻

✅ 2. Client-Server

Frontend ≠ Backend

👉 Separation of concerns

⸻

✅ 3. Uniform Interface

Same rules for all APIs

👉 Example:

GET /employees
POST /employees

⸻

✅ 4. Resource-Based

URL represents resource, not action

❌ Wrong:

/getEmployees

✅ Correct:

/employees

⸻

✅ 5. Cacheable

👉 Responses can be cached

⸻

🔹 7. REST API DESIGN RULES

⸻

✔ Use nouns, not verbs

/employees ✔  
/getEmployees ❌  

⸻

✔ Use plural resources

/employees ✔  
/employee ❌  

⸻

✔ Use proper HTTP methods

GET    → fetch  
POST   → create  
PUT    → update  
DELETE → delete  

⸻

✔ Use status codes properly

⸻

🔹 8. REST IN ASP.NET CORE

⸻

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok();
    }
    [HttpPost]
    public IActionResult Create(Employee emp)
    {
        return CreatedAtAction(nameof(Get), new { id = 1 }, emp);
    }
}

⸻

🔹 9. REST FLOW

⸻

Client → HTTP Request → Controller → DB → Response → Client

⸻

🔹 10. EXAMPLE (FULL)

⸻

📌 Request

POST /api/employees

📌 Body

{
  "name": "Deep"
}

⸻

📌 Response

201 Created
Location: /api/employees/1
{
  "id": 1,
  "name": "Deep"
}

⸻

🔹 11. ADVANTAGES

⸻

✔ Simple
✔ Scalable
✔ Platform independent
✔ Uses HTTP

⸻

🔹 12. DISADVANTAGES

⸻

❌ No strict standard
❌ Over-fetching / under-fetching

⸻

🎯 FINAL SUMMARY

REST → API design style  
Resource → data entity  
URI → address  
GET → read  
POST → create  
PUT → update  
DELETE → remove  
Stateless → no memory  

⸻

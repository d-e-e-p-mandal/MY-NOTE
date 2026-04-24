
# ASP.NET CORE – CONTROLLER & ROUTING

**CONTROLLER :** A Controller is a class that:
* Receives HTTP requests
* Processes data
* Returns response
```cs
[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
}
```
Meaning: Entry point for API requests


### 2. [ApiController] (VERY IMPORTANT)

👉 📍 UNIT 3: Web API

⸻

✅ Definition

[ApiController]

👉 Special attribute for Web API controllers

⸻

🔥 FEATURES

✔ 1. Automatic Model Validation

[HttpPost]
public IActionResult Create(Employee emp)
{
    return Ok(emp);
}

👉 If data is invalid:

{
  "errors": {
    "Name": ["Required"]
  }
}

👉 Automatically returns 400 BadRequest

⸻

✔ 2. Automatic [FromBody]

public IActionResult Create(Employee emp)

👉 No need to write [FromBody] manually

⸻

✔ 3. Binding Source Detection

GET → Query / Route  
POST → Body  

⸻

🎯 Meaning

[ApiController] → enables automatic API behavior

⸻

### 3. [Route] ATTRIBUTE

👉 📍 UNIT 4: Routing

⸻

✅ Definition

[Route("api/[controller]")]

👉 Defines URL pattern

⸻

🔥 Example

[Route("api/employee")]

👉 URL:

https://localhost:5001/api/employee

⸻

### TOKEN [controller]

[Route("api/[controller]")]

👉 Automatically replaced with:

EmployeeController → employee

⸻

### ROUTE PARAMETERS

[HttpGet("{id}")]
public IActionResult Get(int id)

👉 URL:

/api/employee/5

👉 id = 5

⸻

### 4. HTTP METHOD ATTRIBUTES

👉 📍 UNIT 3 + UNIT 4

⸻

✅ [HttpGet]

[HttpGet]
public IActionResult Get()

👉 Fetch data

⸻

✅ [HttpPost]

[HttpPost]
public IActionResult Create(Employee emp)

👉 Create data

⸻

✅ [HttpPut]

[HttpPut("{id}")]
public IActionResult Update(int id, Employee emp)

👉 Update full data

⸻

✅ [HttpDelete]

[HttpDelete("{id}")]
public IActionResult Delete(int id)

👉 Delete data

⸻

✅ [HttpPatch]

[HttpPatch("{id}")]
public IActionResult Patch(int id, Employee emp)

👉 Partial update

⸻

### 5. CONTROLLER + ROUTING FLOW

⸻

🔥 INTERNAL FLOW

Client Request
   ↓
Routing System ([Route])
   ↓
Controller Selected
   ↓
Action Method ([HttpGet])
   ↓
Model Binding
   ↓
Return Result (Ok, NotFound)
   ↓
HTTP Response

⸻

### 6. FULL CONTROLLER EXAMPLE

⸻

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        if (id <= 0)
            return BadRequest("Invalid ID");
        return Ok(new { Id = id, Name = "Deep" });
    }
    [HttpPost]
    public IActionResult Create(Employee emp)
    {
        return CreatedAtAction(nameof(Get), new { id = 1 }, emp);
    }
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        return NoContent();
    }
}

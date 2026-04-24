
# CONTROLLER & ROUTING

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


### 2. [ApiController]

Definition : Special attribute for Web API controllers

```cs
[ApiController]
```

**FEATURES :**
- Automatic Model Validation
```cs
[HttpPost]
public IActionResult Create(Employee emp)
{
    return Ok(emp);
}
```

**Binding Source Detection :**
- GET → Query / Route  
- POST → Body  


If data is invalid: Automatically returns 400 BadRequest
```json
{
  "errors": {
    "Name": ["Required"]
  }
}
```

### 3. [Route] ATTRIBUTE

Definition : Defines URL pattern
```cs
[Route("api/[controller]")]
```
Example : [Route("api/employee")]

URL: https://localhost:5001/api/employee

### TOKEN [controller]
```cs
[Route("api/[controller]")]
```
Automatically replaced with: EmployeeController → employee

### ROUTE PARAMETERS
```cs
[HttpGet("{id}")]
public IActionResult Get(int id)
```
URL : /api/employee/5
> id = 5

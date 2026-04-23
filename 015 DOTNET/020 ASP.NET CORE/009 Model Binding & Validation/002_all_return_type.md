
# ASP.NET CORE – ALL RETURN TYPES 

### 1. BASIC RETURN TYPES
```cs
// IActionResult → most flexible return type
public IActionResult Get()
{
    return Ok("Hello"); // can return any type of response
}
```


```cs
// ActionResult<T> → best practice (data + error support)
public ActionResult<string> Get()
{
    return "Hello"; // returns data directly
}
```


```cs
// Direct type → only data (no error handling)
public string Get()
{
    return "Hello";
}
```


### 2. SUCCESS RESPONSES (2xx)
```cs
return Ok(data);
// 200 OK → success response with data

```cs
return new OkObjectResult(data);
// same as Ok() → explicit class version
```

```cs
return Created("api/employee/1", data);
// 201 Created → resource created + URL

```cs
return CreatedAtAction(nameof(Get), new { id = 1 }, data);
// 201 Created → returns data + auto URL to Get method
```cs

return NoContent();
// 204 → success but no data
```

### 3. CLIENT ERROR RESPONSES (4xx)
```cs
return BadRequest("Invalid data");
// 400 → bad input from client

```cs
return new BadRequestObjectResult("Error");
// same as BadRequest() → explicit class
```

```cs
return Unauthorized();
// 401 → user not logged in

```cs
return Forbid();
// 403 → user has no permission

```cs
return NotFound();
// 404 → data not found

```cs
return new NotFoundObjectResult("Not found");
// same as NotFound() → explicit class
```

### 4. SERVER ERROR RESPONSES (5xx)
```cs
return StatusCode(500, "Server error");
// 500 → internal server error


```cs
return new ObjectResult(data)
{
    StatusCode = 500
};
// custom response using ObjectResult
```


### 5. CUSTOM STATUS CODE (VERY IMPORTANT)
```cs
return StatusCode(202, data);
// custom status → 202 Accepted + data
```

```cs
return StatusCode(201, data);
// custom status → 201 Created + data
```

### 6. OTHER RETURN TYPES
```cs
return Content("Hello");
// return plain text
```

```cs
return File(bytes, "application/pdf");
// return file (pdf, image, etc.)
```

```cs
return Redirect("https://google.com");
// redirect to another URL
```

FULL REAL EXAMPLE
```cs
[HttpGet]
public async Task<IActionResult> GetEmployees()
{
    var data = await _context.Employees.ToListAsync();
    if (data == null)
        return NotFound(); // 404 if no data
    return Ok(data); // 200 success
}
```

CREATE EXAMPLE (BEST PRACTICE)
```cs
[HttpPost]
public async Task<IActionResult> Create(Employee emp)
{
    _context.Employees.Add(emp);
    await _context.SaveChangesAsync();
    return CreatedAtAction(nameof(Get), new { id = emp.Id }, emp);
    // 201 Created + location header
}
```
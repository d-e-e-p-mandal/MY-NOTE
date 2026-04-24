
# COMPLETE ASP.NET CORE MODEL + REQUEST + RESPONSE NOTES
* ✅ Data Annotations
* ✅ JSON attributes
* ✅ Request (input) model behavior
* ✅ Response (output) control
* ✅ All in one place


### 1. CLASS LEVEL
```cs
[Table("Employees")]   // DB table name

[Keyless]              // no primary key (used for views / read-only)
```

### 2. PROPERTY LEVEL (CORE VALIDATION)
```cs
[Key]                  // primary key

[Required]             // cannot be null (request validation)

[Range(1000, 100000)]  // numeric validation

[StringLength(50)]     // string length

[MaxLength(100)]       // max length

[MinLength(3)]         // min length

[EmailAddress]         // email format
```


### 3. VALIDATION (REQUEST SIDE)

- Used when client sends data (POST/PUT)
```cs
[Phone]                        // phone validation

[Url]                          // URL validation

[Compare("Password")]          // compare fields

[RegularExpression("pattern")] // custom validation

[DataType(DataType.Password)]  // UI hint (password/date)
```


### 4. DATABASE / SCHEMA (EF CORE)
```cs
using System.ComponentModel.DataAnnotations.Schema;
```

```cs
[Column("EmpName")]    // column name in DB

[NotMapped]            // not stored in DB

[ForeignKey("DeptId")] // foreign key

[DatabaseGenerated(DatabaseGeneratedOption.Identity)] // auto increment
```


### 5. DISPLAY / UI
```cs
[Display(Name = "Employee Name")] // UI label

[DisplayFormat]                  // format output

[ScaffoldColumn(false)]          // hide in UI
```


### 6. ADVANCED
```cs
[Timestamp]          // concurrency control

[ConcurrencyCheck]   // prevent overwrite

[BindNever]          // ignore in request binding

[BindRequired]       // must be present in request
```


### 7. JSON ATTRIBUTES (REQUEST + RESPONSE CONTROL)

- Namespace:
```cs
using System.Text.Json.Serialization;
```
**JSON ATTRIBUTES :**
```cs
[JsonPropertyName("name")]   // change JSON name (request + response)

[JsonIgnore]  // ignore in request + response

[JsonInclude]  // include private fields

[JsonConverter(typeof(MyConverter))]  // custom conversion

[JsonNumberHandling(JsonNumberHandling.AllowReadingFromString)]  // allow "1000" as string → int

[JsonPropertyOrder(1)]  // control JSON output order
```


### 8. REQUEST MODEL (INPUT FROM CLIENT)

- Used in API (POST / PUT)
```cs
public class EmployeeRequest
{
    [Required]                         // must come from client
    public string Name { get; set; }
    [Range(1000, 100000)]             // validate input
    public int Salary { get; set; }
    [BindNever]                       // ignore even if client sends
    public int InternalId { get; set; }
}
```


📌 Controller (Request Handling)
```cs
[HttpPost]
public IActionResult Create(EmployeeRequest req)
{
    // Automatic validation with [ApiController]
    return Ok(req); // valid data comes here
}
```


### 9. RESPONSE MODEL (OUTPUT TO CLIENT)

- Used to control what client sees
```cs
public class EmployeeResponse
{
    public int Id { get; set; }
    [JsonPropertyName("employee_name")]  
    public string Name { get; set; }
    public int Salary { get; set; }
    [JsonIgnore]   // hide sensitive data
    public string InternalCode { get; set; }
}
```


### 10. FULL MODEL (COMBINED EXAMPLE)
```cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
[Table("Employees")]
public class Employee
{
    [Key]
    public int Id { get; set; }
    [Required]
    [JsonPropertyName("employee_name")]
    public string Name { get; set; }
    [Range(1000, 100000)]
    public int Salary { get; set; }
    [JsonIgnore]        // not sent to client
    public string InternalCode { get; set; }
    [NotMapped]         // not saved in DB
    public string TempData { get; set; }
}
```


### 11. REQUEST vs RESPONSE In Attrubute

| Feature            | Request | Response |
|------------------|--------|----------|
| Validation        | ✔      | ❌        |
| DataAnnotations   | ✔      | ❌        |
| JsonPropertyName  | ✔      | ✔        |
| JsonIgnore        | ✔      | ✔        |
| BindNever         | ✔      | ❌        |


Client → Request Model → Model Binding → Validation  → Controller → Entity → Response Model → JSON Output


Your notes are already very strong 👍 — but yes, a few important attributes are still missing (especially for validation, binding, and JSON).
I’ll add only the missing + important ones so your notes become 100% complete 👇

⸻

🔥 ADD THESE (MISSING IMPORTANT ATTRIBUTES)

⸻

🔹 1. EXTRA VALIDATION ATTRIBUTES (IMPORTANT)

[CreditCard]          // validate credit card number
[EnumDataType(typeof(MyEnum))]  
// restrict value to enum
[FileExtensions(Extensions = "jpg,png")]  
// validate file type
[Length(min, max)]  
// .NET 8+ → combine MinLength + MaxLength

⸻

🔹 2. MODEL BINDING ATTRIBUTES (VERY IMPORTANT 🔥)

👉 Namespace:

using Microsoft.AspNetCore.Mvc;
[FromBody]     // get data from request body (JSON)
[FromQuery]    // get from query string (?id=1)
[FromRoute]    // get from URL route (/api/1)
[FromForm]     // get from form-data
[FromHeader]   // get from request headers
[FromServices] // inject service from DI

⸻

🔹 3. JSON ADVANCED (MISSING IMPORTANT)

[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
// ignore only when null
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
// ignore default values (0, null, false)

⸻

🔹 4. EF CORE ADVANCED (IMPORTANT)

[Index(nameof(Name))]  
// create index (performance)
[Precision(10,2)]  
// decimal precision (e.g., salary)
[Owned]  
// owned entity (value object)

⸻

🔹 5. API BEHAVIOR / RESPONSE (IMPORTANT)

[Produces("application/json")]  
// response type
[Consumes("application/json")]  
// request type
[ProducesResponseType(200)]  
// expected response code
[ProducesResponseType(404)]  
// document API response

⸻

🔹 6. CONTROLLER / ROUTING ATTRIBUTES (IMPORTANT)

[ApiController]  
// enables auto validation + binding
[Route("api/[controller]")]  
// base route
[HttpGet]
[HttpPost]
[HttpPut]
[HttpDelete]
// HTTP methods

⸻

🎯 FINAL ADDITION SUMMARY

Add these sections to your notes:

✔ Model Binding → [FromBody], [FromQuery], etc.
✔ Extra Validation → CreditCard, EnumDataType
✔ JSON Advanced → JsonIgnoreCondition
✔ EF Core Advanced → Index, Precision
✔ API Response → Produces, ProducesResponseType
✔ Routing → ApiController, HttpGet/Post


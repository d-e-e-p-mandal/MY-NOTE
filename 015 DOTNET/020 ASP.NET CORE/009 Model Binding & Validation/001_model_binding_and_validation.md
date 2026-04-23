# MODEL BINDING & VALIDATION

## 1. Model Binding

Definition : Convert incoming request data → C# object automatically

Example : Client sends JSON:
```json
{
  "name": "Deep",
  "salary": 50000
}
```

Controller receives:
```cs
[HttpPost]
public IActionResult Create(Employee emp)
{
    return Ok(emp);
}
```
Automatically converted to: `Employee emp`

Sources of Data : Model binding can read from:
* Body (JSON)
* Route
* Query string
* Form data

⸻

Example (Route)
```cs
[HttpGet("{id}")]
public IActionResult Get(int id)
```
URL: /api/employee/5
id = 5

----

## INTERNAL CODE FLOW

Step 1: Read Request Body

ASP.NET reads raw request body:
```cs
var bodyStream = httpContext.Request.Body;
using var reader = new StreamReader(bodyStream);
string json = await reader.ReadToEndAsync();
```
Now: json = "{ \"name\": \"Deep\", \"salary\": 50000 }"

Step 2: Deserialize JSON → Object

Uses built-in JSON serializer:
```cs
var employee = JsonSerializer.Deserialize<Employee>(json);
```

🔄Internally this happens:

// pseudo internal logic
Employee emp = new Employee();
emp.Name = json["name"];   // map value
emp.Salary = json["salary"];

Step 3: Property Matching

👉 ASP.NET uses reflection to match properties:
```cs
foreach (var property in typeof(Employee).GetProperties())
{
    var value = jsonData[property.Name.ToLower()];
    property.SetValue(emp, Convert(value));
}
```

🔹 Step 4: ModelState Creation

ModelState["Name"] = "Deep";
ModelState["Salary"] = 50000;

Also tracks errors

🔹 Step 5: Validation (Annotations)
```cs
if (emp.Name == null)
{
    ModelState.AddError("Name", "Required");
}
```

🔹 Step 6: Pass to Controller
```cs
public IActionResult Create(Employee emp)
```
Now:
```cs
emp.Name = "Deep";
emp.Salary = 50000;
```

REAL ASP.NET CORE CLASSES (ACTUAL INTERNAL) :
ASP.NET actually uses:
- * ModelBinder
- * BodyModelBinder
- * SystemTextJsonInputFormatter

🔹 Actual internal call (simplified)
```cs
var formatter = new SystemTextJsonInputFormatter(...);
var result = await formatter.ReadRequestBodyAsync(context);
var model = result.Model;
```

🔹 Core Line (REAL ENGINE)
```cs
JsonSerializer.Deserialize<T>(json, options);
```

FULL INTERNAL FLOW :
```
HTTP Request
   ↓
Read Body Stream
   ↓
Convert Stream → String (JSON)
   ↓
JsonSerializer.Deserialize<T>()
   ↓
Reflection → Map properties
   ↓
Create Object (Employee)
   ↓
Validate → ModelState
   ↓
Pass to Controller
```

SIMPLE UNDERSTANDING : ASP.NET internally does:
```cs
var json = ReadBody();
var obj = JsonSerializer.Deserialize<T>(json);
return obj;
```



----


## 2. Data Annotations

Definition : Attributes used to: validate and control data

Example Model
```cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema; //Database Mapping 
public class Employee
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Range(1000, 100000)]
    public int Salary { get; set; }
    [EmailAddress]
    public string Email { get; set; }
}
```
⸻

##### Attributes

Attribute : Use


1. CLASS LEVEL ATTRIBUTES

🧾 [Table("Name")] : Defines table name in database

🧾 [Keyless] : Entity has no primary key (used for views / read-only)

2. PROPERTY LEVEL : Written above properties

🧾 [Key] : Defines primary key

🧾 [Required] : Field cannot be null or empty

🧾 [Range(min, max)] : Value must be within range

🧾 [StringLength(n)] : Sets max (and optional min) length

🧾 [MaxLength(n)] : Maximum allowed length

🧾 [MinLength(n)] : Minimum required length

🧾 [EmailAddress] : Valid email format

3. VALIDATION ATTRIBUTES (IMPORTANT)

🧾 [Phone] : Valid phone number

🧾 [Url] : Valid URL format

🧾 [Compare("Property")] : Compare two fields (e.g., password confirm)

🧾 [RegularExpression("pattern")] : Custom validation using regex

🧾 [DataType(DataType.Password)] : Specifies data type (UI purpose)

4. DATABASE / SCHEMA ATTRIBUTES

Namespace:
```cs
using System.ComponentModel.DataAnnotations.Schema;
```

🧾 [Column("Name")] : Set column name

🧾 [NotMapped] : Ignore property (not stored in DB)

🧾 [ForeignKey("Name")] : Define foreign key relationship

🧾 [DatabaseGenerated(DatabaseGeneratedOption.Identity)] : Auto-generated value (auto increment)


5. DISPLAY / UI ATTRIBUTES

🧾 [Display(Name = "Text")] : Custom display name

🧾 [DisplayFormat] : Format output

🧾 [ScaffoldColumn(false)] : Hide field in UI

6. ADVANCED ATTRIBUTES

🧾 [Timestamp] : Used for concurrency (row version)

🧾 [ConcurrencyCheck] : Prevent multiple updates conflict

🧾 [BindNever] : Prevent model binding

🧾 [BindRequired] : Must be provided in request

Class Level:
  Table, Keyless
Property Level:
  Key, Required, Range, Column, ForeignKey, etc.


# Validation Techniques

🔹 Automatic Validation (BEST)

👉 When using [ApiController]

[ApiController]
public class EmployeeController : ControllerBase

👉 If data is invalid → automatic error response

⸻

🔹 Manual Validation

[HttpPost]
public IActionResult Create(Employee emp)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }
    return Ok(emp);
}

⸻

🔹 Custom Validation

👉 Create your own validation

public class CustomSalary : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext context)
    {
        if ((int)value < 5000)
            return new ValidationResult("Salary too low");
        return ValidationResult.Success;
    }
}

⸻

📌 Use it

[CustomSalary]
public int Salary { get; set; }

⸻

🔥 Full Flow

Client → Send Data → Model Binding → Validation → Controller

⸻

🎯 FINAL SUMMARY

* Model Binding → JSON → Object
* Data Annotation → Validate data
* Validation → Prevent wrong input
* ApiController → auto validation

⸻

💡 INTERVIEW QUESTIONS

1. What is model binding?
2. What are data annotations?
3. What is ModelState?
4. Difference between automatic and manual validation?
5. What is custom validation?

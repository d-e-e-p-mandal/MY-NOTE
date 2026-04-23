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

### INTERNAL CODE FLOW

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

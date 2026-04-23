
ROUTING & CONTROLLERS

Routing means : Mapping URL → Controller → Action method

Example : https://localhost:5001/api/employee

This URL will call:
	•	Controller → EmployeeController
	•	Action → method inside it

Simple Flow : URL → Routing → Controller → Action → Response

## Conventional Routing : [002]

Definition : Routing defined in one central place (Program.cs)

Example
```cs
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);
```

Meaning : /controller/action/id
Example : /home/index/1

*Advantage*
	•	Simple
	•	Central control

*Disadvantage*
	•	Less flexible

⸻

## Attribute Routing [003]

Definition : Routing defined directly on controller or method

Example
```cs
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Data");
    }
}
```

>URL : /api/employee

*Advantage*  
	•	Flexible  
	•	Easy to understand

*Disadvantage*  
	•	More code


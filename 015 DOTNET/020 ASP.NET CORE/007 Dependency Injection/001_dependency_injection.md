# Dependency Injection : 

📘 1️⃣ Models
```cs
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

📘 2️⃣ DbContext (Data Layer)
```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    public DbSet<Employee> Employees { get; set; }
}
```

📘 3️⃣ DTO
```cs
public class EmployeeDto
{
    public string Name { get; set; }
}
```

📘 4️⃣ Service Interface
```cs
public interface IEmployeeService
{
    List<Employee> GetAll();
    void Add(EmployeeDto dto);
}
```

📘 5️⃣ Service Implementation
```cs
public class EmployeeService : IEmployeeService
{
    private readonly AppDbContext _context;

    public EmployeeService(AppDbContext context)
    {
        _context = context; // injected
    }

    public List<Employee> GetAll()
    {
        return _context.Employees.ToList();
    }

    public void Add(EmployeeDto dto)
    {
        var emp = new Employee
        {
            Name = dto.Name
        };

        _context.Employees.Add(emp);
        _context.SaveChanges();
    }
}
```

📘 6️⃣ Controller (DI used here)
```cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _service;

    public EmployeeController(IEmployeeService service)
    {
        _service = service; // ✅ injected
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_service.GetAll());
    }

    [HttpPost]
    public IActionResult Add(EmployeeDto dto)
    {
        _service.Add(dto);
        return Ok("Added");
    }
}
```

📘 7️⃣ Program.cs (DI Configuration)
```cs
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// 🔹 Add DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// 🔹 Register Service (DI)
builder.Services.AddScoped<IEmployeeService, EmployeeService>();

// 🔹 Add Controllers
builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

```json
📘 8️⃣ appsettings.json

{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=MyDb;Trusted_Connection=True;"
  }
}
```

Flow (WITH DI)
```
Request
   ↓
Controller (gets Service from DI)
   ↓
Service (gets DbContext from DI)
   ↓
Database
```

⸻

What DI is doing internally  :  

You register :
```cs
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
```
- Then ASP.NET Core automatically :  
Creates object → injects into constructor → manages lifecycle

**Advantages of DI :**
- Loose coupling
- Easy testing (mock services)
- Better maintainability
- Reusable code
- Centralized configuration


----


# Without Dependency Injection :
📘 1️⃣ Models
```cs
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

📘 2️⃣ DbContext (Data)
```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer("Server=.;Database=MyDb;Trusted_Connection=True;");
    }

    public DbSet<Employee> Employees { get; set; }
}
```
- No constructor injection ❌
- Configuration inside class ✔

📘 3️⃣ DTO
```cs
public class EmployeeDto
{
    public string Name { get; set; }
}
```

📘 4️⃣ Service (NO DI)
```cs
public class EmployeeService
{
    private AppDbContext _context;

    public EmployeeService()
    {
        _context = new AppDbContext(); // ❌ manual creation
    }

    public List<Employee> GetAll()
    {
        return _context.Employees.ToList();
    }

    public void Add(EmployeeDto dto)
    {
        var emp = new Employee
        {
            Name = dto.Name
        };

        _context.Employees.Add(emp);
        _context.SaveChanges();
    }
}
```

📘 5️⃣ Controller (NO DI)
```cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private EmployeeService _service;

    public EmployeeController()
    {
        _service = new EmployeeService(); // ❌ manual object
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_service.GetAll());
    }

    [HttpPost]
    public IActionResult Add(EmployeeDto dto)
    {
        _service.Add(dto);
        return Ok("Added");
    }
}
```

📘 6️⃣ Program.cs (Simple)
```cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(); // only controllers

var app = builder.Build();

app.MapControllers();

app.Run();
```

📘 7️⃣ appsettings.json (Not required here)

- We are NOT using it (hardcoded connection string)


Flow (Without DI)
```
Request
   ↓
Controller (creates Service)
   ↓
Service (creates DbContext)
   ↓
Database
```
**⚠️ Problems Without DI :**

- Tight coupling  
- Hard to test  
- Hard to maintain  
- No flexibility  
- Duplicate object creation  

Example Problem :
```cs
_service = new EmployeeService();
```
>You cannot:  
    - Replace with mock  
    - Change implementation easily 

----
Compare :

With DI	-> Without DI  
Loose coupling	-> Tight coupling   
Testable -> Hard to test   
Flexible -> Rigid   
⸻

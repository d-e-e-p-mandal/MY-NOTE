
## DbContext:

### 1. Method 1 :
```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        options.UseSqlServer(
            "Server=.;Database=TestDB;Trusted_Connection=True;"
        );
    }
}
```

### 2. Method 2 : (Most Used, Best Practice)
```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options) {}

    public DbSet<Employee> Employees { get; set; }
}
```

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=TestDB;Trusted_Connection=True;"
  }
}
```

👉 In Program.cs:
```cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));
```

⸻

📌 Key Points:
	•	Keep connection string in appsettings.json
	•	Improves security & flexibility
	•	Avoid hardcoding

⸻



MySql : 
Program.cs
```cs
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    ));

var app = builder.Build();

app.Run();
```
appsetting.json
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "server=localhost;database=testdb;user=root;password=1234;"
  }
}
```
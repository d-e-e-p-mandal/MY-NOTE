
# 1. Installing EF Core Packages

To use Entity Framework Core, we need to install required packages.

👉 Using .NET CLI:
```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Tools
```
- SQL Server : (Most Recomened and used with dotnet environment)
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

- MySql
```bash
dotnet add package Pomelo.EntityFrameworkCore.MySql
```

👉 Using Visual Studio:
	•	Go to Tools → NuGet Package Manager
	•	Install:
	•	Microsoft.EntityFrameworkCore
	•	Microsoft.EntityFrameworkCore.SqlServer
	•	Microsoft.EntityFrameworkCore.Tools

📌 Important Packages:
	•	Microsoft.EntityFrameworkCore → Core functionality
	•	SqlServer → SQL Server support
	•	Tools → Migrations support

⸻

📌 Basic Structure:
	•	Models (Entities)
	•	DbContext
	•	Program.cs

⸻

🔹 3. Database Providers

👉 EF Core supports multiple databases using providers.

📌 Common Providers:
	•	SQL Server
	•	SQLite
	•	MySQL
	•	PostgreSQL

⸻

👉 Example (SQL Server):
```cs
options.UseSqlServer("connection_string");
```
👉 Example (SQLite):
```cs
options.UseSqlite("Data Source=test.db");
```
- Provider decides which database EF will work with

⸻

🔹 4. Connection String Configuration

👉 Connection string is used to connect application to database.

⸻

👉 Example (SQL Server):
```
"Server=.;Database=TestDB;Trusted_Connection=True;"
```

⸻
## In DbContext:

1. Method 1 :
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

2. Method 2 :
```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

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
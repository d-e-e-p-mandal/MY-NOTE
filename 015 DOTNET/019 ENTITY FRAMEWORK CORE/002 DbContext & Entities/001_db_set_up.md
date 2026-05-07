
## DbContext:

### Method 1 : Basic (Not recomended to use)

```cs
string connectionString = "Server=.;Database=YourDB;Trusted_Connection=True;";
        using (SqlConnection con = new SqlConnection(connectionString))
        {
            con.Open(); // open connection
            string query = "SELECT Id, Name FROM Students";
            SqlCommand cmd = new SqlCommand(query, con);
            SqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                Console.WriteLine(reader["Id"] + " " + reader["Name"]);
            }
        }
```

### Method 2 : (Old System)
Program.cs:
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

### Method 3 : (Most Used, Best Practice)
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

Program.cs:
```cs
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));
```

```cs
// Create Scope (for DB seeding / initialization)
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        var db = services.GetRequiredService<AppDbContext>();

        // Example: ensure DB created
        db.Database.EnsureCreated();

        // OR you can call:
        // DbSeeder.Seed(db);
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}
```

Key Points:
	•	Keep connection string in appsettings.json
	•	Improves security & flexibility
	•	Avoid hardcoding



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
# Program.cs :

```cs
using Microsoft.EntityFrameworkCore;

// Create builder
var builder = WebApplication.CreateBuilder(args);

// Add services to DI container

// 1. Add Controllers
builder.Services.AddControllers();

// 2. Add DbContext
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));

// 3. Add Custom Services (Extension Method)
builder.Services.AddApplicationServices();

// Build app
var app = builder.Build();

// Middleware pipeline

app.UseHttpsRedirection();

app.UseAuthorization();

// Map Controllers
app.MapControllers();

// Run application
app.Run();
```


Here is your 📘 COMPLETE STEP-BY-STEP NOTES on DbContext (Full Deep Explanation)
👉 Written in exam + interview + practical format 👇

⸻

🧠 DbContext in EF Core (FULL DETAILED NOTES)

⸻

🔹 STEP 1: What is DbContext?

🧠 Definition

👉 DbContext is the core class of Entity Framework Core that:
	•	Connects your application to the database
	•	Manages data operations

👉 It acts as a bridge between C# objects and database tables

⸻

📌 Comes From

👉 Microsoft.EntityFrameworkCore

👉 Namespace:

using Microsoft.EntityFrameworkCore;


⸻

🔹 STEP 2: Create Your Own DbContext

👉 You create a custom class by inheriting:

public class AppDbContext : DbContext
{
}


⸻

🔹 STEP 3: Add DbSet (Table Representation)

👉 Add properties for tables:

public class AppDbContext : DbContext
{
    public DbSet<Employee> Employees { get; set; }
}

👉 Meaning:
	•	Employees → Table
	•	Employee → Structure

⸻

🔹 STEP 4: Configure DbContext

👉 Two ways:

⸻

✅ Method 1: ASP.NET Core (Best Practice 🔥)

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    ));


⸻

❌ Method 2: OnConfiguring()

protected override void OnConfiguring(DbContextOptionsBuilder options)
{
    options.UseSqlServer("connection_string");
}


⸻

🔹 STEP 5: Constructor (VERY IMPORTANT)

👉 Required in ASP.NET Core:

public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
{
}

👉 Purpose:
	•	Receives configuration from DI
	•	Passes to base DbContext

⸻

🔹 STEP 6: What DbContext Does Internally

👉 When you write:

db.Employees.Add(emp);
db.SaveChanges();

👉 Internally:
	1.	Tracks entity
	2.	Converts to SQL
	3.	Executes query
	4.	Updates database

⸻

🔹 STEP 7: Lifecycle of DbContext

🔄 Full Flow

1. Creation

👉 Created by ASP.NET Core (DI)

⸻

2. Tracking

👉 EF tracks entity changes

db.Employees.Add(emp);


⸻

3. Saving

db.SaveChanges();


⸻

4. Disposal

👉 Automatically destroyed after request

⸻

🔹 STEP 8: Entity States (VERY IMPORTANT)

State	Meaning
Added	New data
Modified	Updated
Deleted	Removed
Unchanged	No change


⸻

🔹 STEP 9: Overridable Methods (CUSTOMIZATION)

⸻

🔥 1. OnConfiguring()

protected override void OnConfiguring(DbContextOptionsBuilder options)
{
    options.UseSqlServer("connection_string");
}

👉 Configure DB connection

⸻

🔥 2. OnModelCreating() (VERY IMPORTANT)

protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Employee>()
        .ToTable("EmpTable");
}

👉 Configure:
	•	Table name
	•	Keys
	•	Relationships

⸻

🔥 3. SaveChanges()

public override int SaveChanges()
{
    Console.WriteLine("Saving...");
    return base.SaveChanges();
}

👉 Used for:
	•	Logging
	•	Validation
	•	Auditing

⸻

🔥 4. SaveChangesAsync()

public override async Task<int> SaveChangesAsync(CancellationToken token = default)
{
    return await base.SaveChangesAsync(token);
}


⸻

🔥 5. Dispose()

protected override void Dispose(bool disposing)
{
    base.Dispose(disposing);
}


⸻

🔹 STEP 10: Important Methods of DbContext

Method	Purpose
Add()	Insert
Find()	Get by ID
Remove()	Delete
SaveChanges()	Save to DB


⸻

🔹 STEP 11: Real Example (Complete Flow)

using (var db = new AppDbContext(options))
{
    var emp = new Employee { Name = "Deep" };

    db.Employees.Add(emp);   // Tracking
    db.SaveChanges();        // Insert into DB
}


⸻

🔹 STEP 12: Key Points
	•	DbContext = Core of EF Core
	•	DbSet = Table
	•	Entity = Data
	•	Constructor = Required for DI
	•	OnModelCreating = Most important override

⸻

🎯 FINAL SUMMARY

👉 DbContext:
	•	Comes from EF Core
	•	Manages database operations
	•	Tracks changes
	•	Converts LINQ → SQL
	•	Can be customized using override methods

⸻


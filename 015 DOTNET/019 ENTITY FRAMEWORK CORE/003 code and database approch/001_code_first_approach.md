# CODE FIRST APPROACH (EF CORE)

# 1. Concept of Code First

Code First means:
- First we create C# classes  
- Then Entity Framework Core automatically creates the database


# Flow of Code First

```text
C# Classes → DbContext → Migration → Database
```


# Why Use Code First?

- No need to create database manually
- Database is generated automatically
- Easy to maintain
- Full control using code
- Mostly used in modern applications


# 2. Creating Models (Entities)

## What is a Model?

- Model represents a table in database

---

# Example

```csharp
public class Employee
{
    public int Id { get; set; }      // Primary Key
    public string Name { get; set; }
    public int Salary { get; set; }
}
```

---

# Explanation

| Property | Meaning |
|---|---|
| Id | Primary Key |
| Name | Employee Name |
| Salary | Employee Salary |

---

# Rules for Model Class

- Class must be `public`
- Must contain primary key
- Properties become table columns

---

# 3. Adding DbContext

## What is DbContext?

- DbContext connects application with database

- It manages:
- Tables
- Queries
- Save operations

---

# Example

```csharp
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Employee> Employees { get; set; }
}
```

---

# Explanation

| Code | Meaning |
|---|---|
| DbContext | Main EF Core class |
| DbSet<Employee> | Represents Employee table |
| Employees | Table name |

---

# 4. Migrations

# What is Migration?

- Migration is used to create or update database from model classes

---

# Migration Commands

```bash
dotnet ef migrations add InitialCreate
```

- Creates migration file

---

```bash
dotnet ef database update
```

- Creates database and tables

---

# What Happens Internally?

1. EF checks model classes
2. Creates migration file
3. Generates SQL queries
4. Creates database tables

---

# 5. Data Annotations (Attribute-Based Configuration)

# Definition

- Data Annotation means configuring models using attributes

- Attributes are written above properties

---

# Example

```csharp
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Employee
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Name { get; set; }

    [Column("EmpSalary")]
    public int Salary { get; set; }
}
```

---

# Explanation of Attributes

| Attribute | Purpose |
|---|---|
| [Key] | Makes primary key |
| [Required] | Cannot be null |
| [MaxLength(50)] | Maximum length 50 |
| [Column()] | Rename column |
| [Table()] | Rename table |
| [NotMapped] | Ignore property |

---

# Example of Table Attribute

```csharp
[Table("Employees")]
public class Employee
{
    public int Id { get; set; }
}
```

- Table name becomes `Employees`

---

# Example of NotMapped

```csharp
[NotMapped]
public int TempValue { get; set; }
```

- This property will NOT create column in database

---

# Advantages of Data Annotation

- Easy to learn
- Less code
- Fast configuration
- Good for small projects

---

# Disadvantages of Data Annotation

- Limited features
- Difficult for complex mapping
- Mixes configuration with model class

---

# 6. Fluent API (Method-Based Configuration)

# Definition

- Fluent API configures models using methods inside `OnModelCreating()`

- Used for advanced configuration

---

# Example

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Employee>(entity =>
    {
        entity.HasKey(e => e.Id);

        entity.Property(e => e.Name)
              .IsRequired()
              .HasMaxLength(50);

        entity.Property(e => e.Salary)
              .HasColumnName("EmpSalary");
    });
}
```

---

# Explanation

| Method | Purpose |
|---|---|
| HasKey() | Sets primary key |
| Property() | Configures property |
| IsRequired() | Makes NOT NULL |
| HasMaxLength() | Sets max length |
| HasColumnName() | Renames column |
| ToTable() | Renames table |
| HasOne() | Creates relationship |

---

# Example of Table Rename

```csharp
modelBuilder.Entity<Employee>()
    .ToTable("Employees");
```

---

# Example of Relationship

```csharp
modelBuilder.Entity<Order>()
    .HasOne(o => o.Customer);
```

- Creates relationship between tables

---

# Advantages of Fluent API

- Very powerful
- Full control
- Better for large projects
- Supports complex mapping

---

# Disadvantages of Fluent API

- More code
- Slightly difficult
- Takes more time

---

# 7. Data Annotation vs Fluent API

| Feature | Data Annotation | Fluent API |
|---|---|---|
| Type | Attribute-based | Method-based |
| Written In | Model class | DbContext |
| Flexibility | Low | High |
| Complexity | Easy | Medium |
| Best For | Small projects | Large projects |

---

# 8. Which One Should We Use?

# Use Data Annotation When

- Project is small
- Simple configuration needed
- Fast development needed

---

# Use Fluent API When

- Project is large
- Complex relationships needed
- Advanced configuration needed

---

# 9. Combined Example

# Model Class

```csharp
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Employees")]
public class Employee
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }
}
```

---

# Fluent API Configuration

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Employee>()
        .Property(e => e.Name)
        .HasMaxLength(100);
}
```

---

# Explanation

- `[Table]` changes table name
- `[Key]` creates primary key
- `[Required]` makes field mandatory
- `HasMaxLength(100)` sets column length

---

# FINAL SUMMARY

| Topic | Meaning |
|---|---|
| Code First | Create DB using C# classes |
| Model | Represents table |
| DbContext | Connects app and database |
| Migration | Creates/updates DB |
| Data Annotation | Attribute-based configuration |
| Fluent API | Method-based advanced configuration |
| Best Flexible Approach | Fluent API |

---

# Important Points to Remember

- Code First = C# → Database
- DbSet = Table
- Properties = Columns
- Migration updates database
- Data Annotation is simple
- Fluent API is more powerful
- Fluent API is preferred in large applications
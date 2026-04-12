
# 1. Installing EF Core Packages

To use Entity Framework Core, we need to install required packages.

##### a. Using .NET CLI:
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

##### b. Using Visual Studio:
	•	Go to Tools → NuGet Package Manager
	•	Install:
	•	Microsoft.EntityFrameworkCore
	•	Microsoft.EntityFrameworkCore.SqlServer
	•	Microsoft.EntityFrameworkCore.Tools

Important Packages:
	•	Microsoft.EntityFrameworkCore → Core functionality
	•	SqlServer → SQL Server support
	•	Tools → Migrations support

1. Database Providers

- EF Core supports multiple databases using providers.
Common Providers:
	•	SQL Server
	•	SQLite
	•	MySQL
	•	PostgreSQL

👉 Example (SQL Server):
```cs
options.UseSqlServer("connection_string");
```
👉 Example (SQLite):
```cs
options.UseSqlite("Data Source=test.db");
```
- Provider decides which database EF will work with

2. Connection String Configuration

- Connection string is used to connect application to database.

Example (SQL Server):
```json
"Server=.;Database=TestDB;Trusted_Connection=True;"
```

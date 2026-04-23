
# 🧠 Exception Handling in C#

## 🔹 What is Exception?

An exception is an **error that occurs during program execution (runtime error)**.

👉 Example:
- Divide by zero
- Invalid input
- File not found

---

## 🔹 Why Exception Handling?

- Prevent program crash  
- Handle errors gracefully  
- Improve program reliability  

---

# 🔹 Basic Syntax

```csharp
try
{
    // risky code
}
catch
{
    // handle error
}


⸻

🔹 Example

using System;

class Program
{
    static void Main()
    {
        try
        {
            int a = 10, b = 0;
            int c = a / b;   // error
        }
        catch
        {
            Console.WriteLine("Cannot divide by zero");
        }
    }
}


⸻

🔹 Types of Blocks

1️⃣ try
	•	Contains code that may cause error

⸻

2️⃣ catch
	•	Handles exception

catch(Exception e)
{
    Console.WriteLine(e.Message);
}


⸻

3️⃣ finally
	•	Always executes (error or not)

finally
{
    Console.WriteLine("Done");
}


⸻

🔹 Full Example

using System;

class Program
{
    static void Main()
    {
        try
        {
            int x = int.Parse("abc");
        }
        catch(Exception e) // (System.Exception ex)
        {
            Console.WriteLine("Error: " + e.Message);
        }
        finally
        {
            Console.WriteLine("Program End");
        }
    }
}


⸻

🔹 Multiple Catch Blocks

try
{
    int x = int.Parse("abc");
}
catch(FormatException)
{
    Console.WriteLine("Invalid format");
}
catch(Exception)
{
    Console.WriteLine("General error");
}

👉 Specific catch first, general later

⸻

🔹 Common Exception Types

Exception	Meaning
DivideByZeroException	Division by zero
FormatException	Wrong format
NullReferenceException	Null object
IndexOutOfRangeException	Invalid index


⸻

🔹 throw Keyword

Used to manually throw exception

throw new Exception("Error occurred");


⸻

🔹 Custom Exception

class MyException : Exception
{
    public MyException(string msg) : base(msg) { }
}


⸻

🔹 Checked & Unchecked

checked
{
    int x = int.MaxValue;
    x++;   // error
}

unchecked
{
    int x = int.MaxValue;
    x++;   // no error
}


⸻

🔹 Important Points
	•	Exceptions occur at runtime
	•	try-catch handles errors
	•	finally always runs
	•	Use multiple catch blocks
	•	Use specific exception types
	•	Prevent program crash

⸻

🎯 Final Answer

Exception handling in C# is a mechanism to handle runtime errors using try, catch, and finally blocks, ensuring smooth program execution and preventing crashes.

---


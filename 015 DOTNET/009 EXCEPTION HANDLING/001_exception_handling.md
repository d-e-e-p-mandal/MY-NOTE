
# Exception Handling in C#

- An exception is an **error that occurs during program execution (runtime error)**.
- Prevent program crash  
- Handle errors gracefully  
- Improve program reliability  

**Example:**
- Divide by zero
- Invalid input
- File not found

**Basic Syntax :**

```csharp
try
{
    // risky code
}
catch
{
    // handle error
}
```

**Example 1:**
```cs
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
```

**Example 2:**
```cs
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
```

**Types of Blocks :**

**try :**
- Contains code that may cause error

**catch :**
- Handles exception
```cs
catch(Exception e)
{
    Console.WriteLine(e.Message);
}
```

**finally :**
- Always executes (error or not)
```cs
finally
{
    Console.WriteLine("Done");
}
```



##### Multiple Catch Blocks
```cs
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
```
- Specific catch first, general later

Common Exception Types

Exception	Meaning
DivideByZeroException	Division by zero
FormatException	Wrong format
NullReferenceException	Null object
IndexOutOfRangeException	Invalid index



### throw Keyword

- Used to manually throw exception
```cs
throw new Exception("Error occurred");
```

⸻

##### Custom Exception
```cs
class MyException : Exception
{
    public MyException(string msg) : base(msg) { }
}
```

##### Checked & Unchecked
```cs
checked
{
    int x = int.MaxValue;
    x++;   // error
}
```
```cs
unchecked
{
    int x = int.MaxValue;
    x++;   // no error
}
```

⸻

**Points :**
- Exceptions occur at runtime
- try-catch handles errors
- finally always runs
- Use multiple catch blocks
- Use specific exception types
- Prevent program crash


## C# Syntax (Simple Notes)

👉 Syntax = rules to write a C# program

⸻

🔹 1. Basic Structure of C# Program

using System;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello World");
    }
}

📌 Points:
	•	using System; → imports library
	•	class Program → main class
	•	Main() → entry point
	•	{ } → block of code
	•	; → statement terminator

⸻

🔹 2. Case Sensitive

👉 C# is case-sensitive
```cs
Console.WriteLine("Hi");   // ✔️ correct
console.writeline("Hi");   // ❌ wrong
```

⸻

🔹 3. Variables and Data Types

int a = 10;
string name = "Deep";
double price = 99.5;

📌 Point:
	•	Must declare type before variable

⸻

🔹 4. Comments

// Single-line comment

/* Multi-line
   comment */


⸻

🔹 5. Input / Output

Console.WriteLine("Hello");   // output

string name = Console.ReadLine();  // input


⸻

🔹 6. Control Statements

👉 If-Else

int a = 10;

if (a > 5)
{
    Console.WriteLine("Greater");
}
else
{
    Console.WriteLine("Smaller");
}


⸻

👉 Loop

for (int i = 0; i < 3; i++)
{
    Console.WriteLine(i);
}


⸻

🔹 7. Methods

static int Add(int x, int y)
{
    return x + y;
}


⸻

🔹 8. Object Creation

class Test
{
    public int a = 5;
}

Test obj = new Test();
Console.WriteLine(obj.a);


⸻

🔹 9. Access Modifiers

public int a;
private int b;

👉 Default = private

⸻

🔹 10. Namespace

namespace MyApp
{
    class Program { }
}

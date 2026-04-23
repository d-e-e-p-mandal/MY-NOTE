 VARIABLES IN C# (FULL DETAILS)

👉 Variable = named memory location used to store data

int a = 10;

👉 a stores value 10

⸻

🔹 1. Syntax

dataType variableName = value;

✔️ Example:

int age = 20;
string name = "Deep";


⸻

🔹 2. Types of Variables

⸻

1️⃣ Local Variable

void Show()
{
    int x = 5;
}

📌 Points:
	•	Declared inside method
	•	Scope → inside method only
	•	Must initialize before use

⸻

2️⃣ Instance Variable (Field)

class Test
{
    int a;
}

📌 Points:
	•	Declared inside class
	•	Default value assigned automatically
	•	Access through object

⸻

3️⃣ Static Variable

class Test
{
    static int count = 0;
}

📌 Points:
	•	Shared among all objects
	•	Access using class name

Test.count;


⸻

🔹 3. Data Types of Variables

⸻

📌 Value Types

int a = 10;
float f = 2.5f;
bool b = true;
char c = 'A';

✔️ Stored in stack
✔️ Holds actual value

⸻

📌 Reference Types

string name = "Deep";
object obj = new object();

✔️ Stored in heap
✔️ Stores reference (address)

⸻

🔹 4. Default Values

Type	Default
int	0
float	0.0
bool	false
string	null


⸻

🔹 5. var Keyword (Implicit Typing)

var x = 10;
var name = "Deep";

📌 Points:
	•	Type decided by compiler
	•	Must initialize at declaration

⸻

🔹 6. dynamic Keyword

dynamic x = 10;
x = "Hello";

📌 Points:
	•	Type can change at runtime
	•	No compile-time checking

⸻

🔹 7. Constants (const)

const int a = 10;

📌 Points:
	•	Value cannot change
	•	Must assign at declaration
	•	Compile-time constant

⸻

🔹 8. Readonly Variable

class Test
{
    readonly int x;

    public Test()
    {
        x = 10;
    }
}

📌 Points:
	•	Assigned at runtime
	•	Can assign in constructor only
	•	Cannot change after that

⸻

🔹 9. Difference: const vs readonly

Feature	const	readonly
Assignment	Compile-time	Runtime
Change allowed	❌ No	❌ After init
Where assigned	Declaration only	Constructor allowed


⸻

🔹 10. Scope of Variables

Type	Scope
Local	Inside method
Instance	Inside class (via object)
Static	Whole class


⸻

🔹 11. Naming Rules

✔️ Must start with letter or _
✔️ Cannot use keywords
✔️ Case-sensitive

❌ Invalid:

int 1a;

✔️ Valid:

int a1;


⸻

🔹 12. Example Program

using System;

class Test
{
    public int a = 10;          // instance
    public static int b = 20;   // static
}

class Program
{
    static void Main()
    {
        int x = 5;              // local
        const int y = 100;      // constant

        Test obj = new Test();

        Console.WriteLine(obj.a);
        Console.WriteLine(Test.b);
        Console.WriteLine(x);
        Console.WriteLine(y);
    }
}


⸻

⚡ Important Points
	•	Variables store data in memory
	•	Must declare before use
	•	Local variables must be initialized
	•	Instance variables get default values
	•	const and readonly are used for fixed values

⸻

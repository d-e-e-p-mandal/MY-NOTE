# INPUT & OUTPUT IN C#

## 1. Output in C#

(a) Console.WriteLine()
```cs
Console.WriteLine("Hello World");
```
✔️ Prints text + moves to next line

⸻

(b) Console.Write()
```cs
Console.Write("Hello ");
Console.Write("World");
```
✔️ Prints on same line

⸻

(c) Formatted Output
```cs
int a = 10;
Console.WriteLine("Value is " + a);
```

⸻

(d) String Interpolation 
```cs
int a = 10;
Console.WriteLine($"Value is {a}");
```
✔️ Cleaner and recommended

⸻

## 2. Input in C#

(a) Console.ReadLine()
```cs
string name = Console.ReadLine();
Console.WriteLine("Hello " + name);
```
✔️ Takes input as string

⸻

(b) Taking Integer Input
```cs
int num = Convert.ToInt32(Console.ReadLine());
```
✔️ Converts string → integer

⸻

(c) Other Conversions
```cs
double d = Convert.ToDouble(Console.ReadLine());
float f = Convert.ToSingle(Console.ReadLine());
bool b = Convert.ToBoolean(Console.ReadLine());
```

⸻

(d) Using Parse()
```cs
int num = int.Parse(Console.ReadLine());
```
✔️ Another way to convert

⸻

(e) Safe Input (Best Practice)
```cs
int num;
bool result = int.TryParse(Console.ReadLine(), out num);

if(result)
    Console.WriteLine("Valid number");
else
    Console.WriteLine("Invalid input");
```
- input store in in num, result show true/false (conversion is successful or not)
- ✔️ Avoids crash

⸻

🔹 3. Character Input
```cs
char ch = Console.ReadKey().KeyChar;
Console.WriteLine(ch);
```
✔️ Reads single character

⸻

🔹 4. Difference Between Input Methods

Method	    Use
ReadLine()	Full line input
ReadKey()	Single key input


⸻

🔹 5. Escape Sequences (Output Formatting)

Console.WriteLine("Hello\nWorld");
Console.WriteLine("Name:\tDeep");

Escape	Meaning
\n	New line
\t	Tab
\"	Double quote


⸻

🔹 6. Complete Example
```cs
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();

        Console.Write("Enter your age: ");
        int age = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine($"Hello {name}, Age: {age}");
    }
}
```

⸻

⚡ Important Points
	•	Input is always string by default
	•	Must convert to required type
	•	Use TryParse() for safe coding
	•	WriteLine() adds new line

⸻

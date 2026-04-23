
# 🧠 Typecasting in C#

## What is Typecasting?
Typecasting means converting one data type into another data type.

It is used when:
- we want to store one type of value in another type variable
- we want compatible conversion
- we want user input conversion

Example:
```csharp
int a = 10;
double b = a;

Here int is converted into double.

⸻

🔹 Why Typecasting is Needed

Typecasting is needed because:
	•	different variables store different types of data
	•	sometimes one operation needs same or compatible type
	•	input from user comes mostly as string
	•	large type to small type conversion may need manual conversion

⸻

🔹 Types of Typecasting in C#

There are mainly two types:
	1.	Implicit Typecasting
	2.	Explicit Typecasting

Also related conversions:
3. Using Convert class
4. Using Parse
5. Using TryParse
6. Boxing and Unboxing

⸻

1️⃣ Implicit Typecasting

🔹 Meaning

Implicit typecasting is automatic conversion done by the compiler.

🔹 When it happens

When:
	•	conversion is safe
	•	no data loss
	•	small type is converted to larger compatible type

🔹 Example

int a = 10;
double b = a;

Console.WriteLine(a);
Console.WriteLine(b);

🔹 Output

10
10

🔹 More Examples

char ch = 'A';
int x = ch;

int a = 25;
long b = a;

float f = 10;
double d = f;

🔹 Common Implicit Conversions
	•	byte → short → int → long → float → double
	•	char → int
	•	derived class object → base class reference

🔹 Points
	•	automatic
	•	safe
	•	no special syntax needed
	•	no chance of major data loss

⸻

2️⃣ Explicit Typecasting

🔹 Meaning

Explicit typecasting is manual conversion done by the programmer.

🔹 When it happens

When:
	•	conversion is not fully safe
	•	large type is converted to smaller type
	•	data may be lost
	•	compiler needs instruction

🔹 Syntax

datatype variable = (datatype)value;

🔹 Example

double x = 10.75;
int y = (int)x;

Console.WriteLine(x);
Console.WriteLine(y);

🔹 Output

10.75
10

👉 Decimal part is lost.

🔹 More Examples

long a = 100;
int b = (int)a;

float p = 9.8f;
int q = (int)p;

int n = 65;
char ch = (char)n;

🔹 Points
	•	manual conversion
	•	may lose data
	•	programmer writes cast operator
	•	used when compiler does not convert automatically

⸻

🔹 Difference Between Implicit and Explicit Typecasting

Feature	Implicit	Explicit
Conversion	Automatic	Manual
Safety	Safe	May be unsafe
Data loss	No	Possible
Syntax	No special syntax	Uses (type)
Example	int to double	double to int


⸻

🔹 Example Program of Both

using System;

class Program
{
    static void Main()
    {
        // Implicit
        int a = 10;
        double b = a;

        // Explicit
        double x = 12.56;
        int y = (int)x;

        Console.WriteLine("Implicit: " + b);
        Console.WriteLine("Explicit: " + y);
    }
}


⸻

3️⃣ Type Conversion Using Convert Class

🔹 Meaning

Convert class is used to convert one type into another.

🔹 Examples

string s = "123";
int n = Convert.ToInt32(s);

string x = "10.5";
double d = Convert.ToDouble(x);

string b = "true";
bool flag = Convert.ToBoolean(b);

🔹 Points
	•	useful for user input
	•	easy to use
	•	works with many types
	•	may throw exception for invalid format

⸻

4️⃣ Using Parse()

🔹 Meaning

Parse() converts string into a specific type.

🔹 Example

string s = "100";
int x = int.Parse(s);

string d = "12.5";
double y = double.Parse(d);

🔹 Points
	•	only works mainly with string
	•	input must be valid
	•	throws exception if input is wrong

⸻

5️⃣ Using TryParse()

🔹 Meaning

TryParse() safely converts string into another type.

🔹 Example

string s = "123";
int num;

bool result = int.TryParse(s, out num);

Console.WriteLine(result);
Console.WriteLine(num);

🔹 Output

true
123

🔹 Invalid Example

string s = "abc";
int num;

bool result = int.TryParse(s, out num);

Console.WriteLine(result);
Console.WriteLine(num);

🔹 Output

false
0

🔹 Points
	•	safest way
	•	does not crash program
	•	returns true or false
	•	good for user input validation

⸻

🔹 Parse vs Convert vs TryParse

Method	Input Type	Invalid Input
Parse	String	Error
Convert	Many types	Error / special behavior
TryParse	String	No error, returns false


⸻

6️⃣ Boxing and Unboxing

🔹 Boxing

Converting value type into reference type.

int a = 10;
object obj = a;

🔹 Unboxing

Converting reference type back into value type.

object obj = 10;
int a = (int)obj;

🔹 Points
	•	boxing is automatic
	•	unboxing is explicit
	•	object stores boxed value

⸻

🔹 Numeric Conversion Examples

Example 1

int a = 50;
double b = a;
Console.WriteLine(b);

Example 2

double x = 45.99;
int y = (int)x;
Console.WriteLine(y);

Example 3

char ch = 'A';
int code = ch;
Console.WriteLine(code);

Example 4

int code = 66;
char ch = (char)code;
Console.WriteLine(ch);


⸻

🔹 User Input Typecasting Example

using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter age: ");
        int age = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Age is: " + age);
    }
}


⸻

🔹 Important Points to Remember
	•	typecasting means type conversion
	•	implicit is automatic and safe
	•	explicit is manual and may lose data
	•	Convert, Parse, and TryParse are common conversion methods
	•	TryParse is best for safe input handling
	•	explicit conversion can remove decimal part
	•	object conversion may involve boxing and unboxing

⸻

🔹 Common Errors in Typecasting

1. Data Loss

double x = 9.99;
int y = (int)x;

Result: 9

2. Invalid Format

string s = "abc";
int x = int.Parse(s);

This gives error.

3. Overflow

int x = 300;
byte b = (byte)x;

May give unexpected result because byte range is small.

⸻

🔹 Real Difference Example

using System;

class Program
{
    static void Main()
    {
        string a = "25";
        int x = Convert.ToInt32(a);

        string b = "30";
        int y = int.Parse(b);

        string c = "abc";
        int z;
        bool ok = int.TryParse(c, out z);

        Console.WriteLine(x);
        Console.WriteLine(y);
        Console.WriteLine(ok);
    }
}

⸻
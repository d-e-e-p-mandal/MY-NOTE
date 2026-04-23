
# 🧠 C# Data Types (Full Notes)

## 🔹 What is Data Type?
A data type defines what kind of value a variable can store.

Example:
int a = 10;

---

# 🔹 Types of Data Types in C#

## 1️⃣ Value Types
- Store actual value
- Stored in stack memory
- Faster access

### 🔸 Built-in Value Types

| Type   | Example     | Size |
|--------|------------|------|
| int    | 10         | 4B   |
| float  | 2.5f       | 4B   |
| double | 10.25      | 8B   |
| decimal| 100.50m    | 16B  |
| char   | 'A'        | 2B   |
| bool   | true/false | 1B   |

---

### 🔸 Signed Integer Types

| Type  | Size | Range |
|-------|------|------|
| sbyte | 1B   | -128 to 127 |
| short | 2B   | -32K to 32K |
| int   | 4B   | large |
| long  | 8B   | very large |

---

### 🔸 Unsigned Types

| Type   | Size |
|--------|------|
| byte   | 1B   |
| ushort | 2B   |
| uint   | 4B   |
| ulong  | 8B   |

---

## 2️⃣ Reference Types
- Store reference (address)
- Stored in heap memory

### Examples:
- string → "Hello"
- object → base class
- array → collection
- class → user-defined type
- interface

---

## 3️⃣ Pointer Types (Advanced)
- Store memory address
- Used with `unsafe`

Example:
int* p;

---

# 🔹 4. Special Data Types

## 🔸 var (Implicit Type)
```csharp
var x = 10;
```
	•	Compiler decides type
	•	Must initialize

⸻

🔸 dynamic

dynamic x = 10;
x = "Hello";

	•	Type can change at runtime

⸻

🔸 object

object x = 10;
x = "Hello";

	•	Can store any type

⸻

🔹 5. Nullable Types

int? a = null;

	•	Allows null values for value types

⸻

🔹 6. Default Values

Type	Default
int	0
float	0.0
bool	false
char	‘\0’
string	null


⸻

🔹 7. Type Conversion

🔸 Implicit (Automatic)

int a = 10;
double b = a;

🔸 Explicit (Manual)

double x = 10.5;
int y = (int)x;


⸻

🔹 8. Boxing and Unboxing

Boxing:

int a = 10;
object obj = a;

Unboxing:

int b = (int)obj;


⸻

🔹 9. Example Program

using System;

class Program
{
    static void Main()
    {
        int a = 10;
        float b = 2.5f;
        double c = 5.5;
        char d = 'A';
        bool e = true;
        string name = "Deep";

        Console.WriteLine(a);
        Console.WriteLine(name);
    }
}


⸻

🔹 10. Important Points
	•	C# is strongly typed
	•	Every variable must have a data type
	•	Value types → store value
	•	Reference types → store address
	•	Use var for simplicity
	•	Use dynamic carefully

# 🧠 dynamic vs object (C#)

## 🔹 object
- Base type of all data types
- Type checking at compile-time
- Casting required

### Example:
object x = 10;
int y = (int)x;

---

## 🔹 dynamic
- Type decided at runtime
- No compile-time checking
- No casting required

### Example:
dynamic x = 10;
Console.WriteLine(x + 5);

---

## 🔹 Difference Table

| Feature | object | dynamic |
|--------|--------|---------|
| Type checking | Compile-time | Runtime |
| Casting | Required | Not required |
| Safety | High | Low |
| Flexibility | Less | More |

---

## 🎯 Final

object is safe and strict, while dynamic is flexible but risky.

# Functions and Methods in C#

## 🔹 What is a Function/Method?

- A function (called **method** in C#) is a block of code that performs a specific task.

- In C#, all functions are called **methods** because they are defined inside a class.

---

# 🔹 Syntax of Method

returnType methodName(parameters)
{
    // code
}

---

# 🔹 Example

```csharp
using System;

class Program
{
    static void Main()
    {
        int result = Add(5, 10);
        Console.WriteLine(result);
    }

    static int Add(int a, int b)
    {
        return a + b;
    }
}
```

⸻

🔹 Types of Methods

1️⃣ Without Parameters & Without Return Value

static void Show()
{
    Console.WriteLine("Hello");
}


⸻

2️⃣ With Parameters but No Return Value

static void Show(int a)
{
    Console.WriteLine(a);
}


⸻

3️⃣ With Return Value but No Parameters

static int GetValue()
{
    return 10;
}


⸻

4️⃣ With Parameters and Return Value

static int Add(int a, int b)
{
    return a + b;
}


⸻

🔹 Method Parameters Types

🔸 1. Value Parameter (Default)

void Show(int x)
{
    x = 20;
}

👉 Original value does not change

⸻

🔸 2. ref Parameter

void Change(ref int x)
{
    x = 50;
}

👉 Original value changes
👉 Must initialize before passing

⸻

🔸 3. out Parameter

void GetValue(out int x)
{
    x = 100;
}

👉 Used to return value
👉 No need to initialize before

⸻

🔸 4. params Parameter (Important 🔥)

📌 Definition:

params allows a method to accept variable number of arguments.

📌 Syntax:
```
void MethodName(params dataType[] name)
```
📌 Example:
```cs
static int Sum(params int[] numbers)
{
    int total = 0;

    foreach(int n in numbers)
        total += n;

    return total;
}
```
📌 Calling:
```cs
Console.WriteLine(Sum(1, 2));        // 3
Console.WriteLine(Sum(1, 2, 3, 4));  // 10
```

- Without params (for comparison ❗)
```cs
Sum(new int[] {1, 2, 3});   // must create array manually
```
- With params
```cs
Sum(1, 2, 3);   // direct values
```

⸻

📌 Rules of params:
	•	Must be last parameter
	•	Only one params allowed
	•	Internally treated as array
	•	Can pass:
	•	multiple values
	•	OR an array

⸻

📌 Example with mixed parameters:

static void Show(string name, params int[] marks)
{
    Console.WriteLine(name);

    foreach(int m in marks)
        Console.WriteLine(m);
}

Show("Deep", 80, 90, 85);


⸻

🔹 Static vs Instance Method

Static Method

static void Show()
{
}

	•	Belongs to class
	•	Called without object

Instance Method

void Show()
{
}

	•	Belongs to object
	•	Requires object

⸻

🔹 Method Overloading

👉 Same method name, different parameters

int Add(int a, int b)
{
    return a + b;
}

double Add(double a, double b)
{
    return a + b;
}


⸻

🔹 Recursion

👉 Method calling itself

int Fact(int n)
{
    if(n == 1)
        return 1;

    return n * Fact(n - 1);
}


⸻

🔹 Local Functions 
```cs
void Main()
{
    int Add(int a, int b)
    {
        return a + b;
    }

    Console.WriteLine(Add(2,3));
}
```

⸻

🔹 Expression-bodied Methods
```cs
int Add(int a, int b) => a + b;
```

⸻

🔹 Important Points
	•	Methods improve code reuse
	•	Reduce duplication
	•	Increase readability
	•	Must be inside class
	•	Can return value or void
	•	params makes method flexible

⸻

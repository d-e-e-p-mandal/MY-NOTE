
# Generics in C# 

**What are Generics?**

- Generics allow you to write **type-safe and reusable code** by using a placeholder for data type.

- Instead of using fixed types like `int`, `string`, we use a **type parameter (T)**.

**Why Generics?**
- Code reusability  
- Type safety  
- Better performance (no boxing/unboxing)  
- Compile-time error checking  


**Basic Syntax :**

**Generic in Function :**
```cs
using System;

class Helper
{
    public T Show<T>(T data)
    {
        return data;
    }
}

class Program
{
    static void Main()
    {
        Helper h = new Helper();   // create object

        Console.WriteLine(h.Show<int>(10));
        Console.WriteLine(h.Show<string>("Hello"));
    }
}
```
Output : 
```
10
Hello
```

**Generic Type in CLass :**
Example 1 :

```csharp
class ClassName<T>
{
    public T data;
}
```
Usage:
```cs
Test<int> obj1 = new Test<int>();
obj1.value = 10;

Test<string> obj2 = new Test<string>();
obj2.value = "Hello";
```

**Without Generics : Problem**
```cs
class Test
{
    public object data;
}
```
Issues:
- No type safety
- Requires casting
- Runtime errors possible


Example 2 :
```cs
using System;

// Generic Class
class Test<T>
{
    public T value;
}

// Main Class
class Program
{
    // Generic Function using Generic Class
    public static void ShowData<T>(T input)
    {
        Test<T> obj = new Test<T>();  // create generic class object
        obj.value = input;

        Console.WriteLine(obj.value);
    }

    static void Main()
    {
        ShowData<int>(10);
        ShowData<string>("Hello");
    }
}
``

⸻
 With Generics (Solution ✅)

class Test<T>
{
    public T data;
}

👉 Benefits:
	•	Type-safe
	•	No casting
	•	Compile-time checking

⸻
 Generic Method

static void Show<T>(T value)
{
    Console.WriteLine(value);
}

Calling:

Show(10);
Show("Hello");


⸻
 Generic Class with Multiple Types

class Pair<T, U>
{
    public T First;
    public U Second;
}

Example:

Pair<int, string> p = new Pair<int, string>();
p.First = 1;
p.Second = "One";


⸻
 Generic Collections (Very Important 🔥)

using System.Collections.Generic;

List<int> list = new List<int>();
list.Add(10);
list.Add(20);

Dictionary<int, string> dict = new Dictionary<int, string>();
dict.Add(1, "One");

👉 Common Generic Collections:
	•	List
	•	Dictionary<TKey, TValue>
	•	Stack
	•	Queue
	•	HashSet

⸻
 Constraints in Generics

👉 Used to restrict type of T

class Test<T> where T : class
{
}


⸻

🔸 Types of Constraints

Constraint	Meaning
where T : class	Reference type
where T : struct	Value type
where T : new()	Must have default constructor
where T : BaseClass	Must inherit
where T : Interface	Must implement interface


⸻
 Example with Constraint

class Test<T> where T : new()
{
    public T Create()
    {
        return new T();
    }
}


⸻
 Generic Interface

interface ITest<T>
{
    void Show(T value);
}


⸻
 Generic Delegate

delegate T MyDelegate<T>(T value);


⸻
 Boxing and Generics

❌ Without Generics:

ArrayList list = new ArrayList();
list.Add(10);   // boxing

✔️ With Generics:

List<int> list = new List<int>();
list.Add(10);   // no boxing


⸻
 Advantages of Generics
	•	Type safety
	•	Reusable code
	•	Better performance
	•	No casting required
	•	Compile-time checking

⸻
 Disadvantages
	•	Slightly complex syntax
	•	Hard for beginners

⸻
 Generics vs Non-Generics

Feature	Generic	Non-Generic
Type safety	Yes	No
Casting	Not required	Required
Performance	Fast	Slower
Errors	Compile-time	Runtime


⸻
 Real-Life Example

👉 Think like a box:
	•	Non-generic box → can store anything (confusing)
	•	Generic box → stores only one type (safe)

⸻
 Important Points
	•	Use <T> as placeholder
	•	Used in collections and methods
	•	Avoids runtime errors
	•	Improves performance
	•	Supports multiple type parameters

⸻

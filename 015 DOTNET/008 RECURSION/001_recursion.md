
# Recursion in C#

**What is Recursion? :**

- Recursion is a process where a method **calls itself** to solve a problem.

---

##  Why Recursion?

- Used to solve problems in smaller parts  
- Useful for problems like factorial, Fibonacci, tree traversal  

---

##  Basic Structure

```csharp
returnType MethodName(parameters)
{
    if(base condition)
        return value;

    return MethodName(smaller input);
}
```

⸻

 Important Terms

1️⃣ Base Case
	•	Condition where recursion stops
	•	Prevents infinite loop

2️⃣ Recursive Call
	•	Method calling itself

⸻

🔹 Example 1: Factorial

using System;

class Program
{
    static void Main()
    {
        Console.WriteLine(Fact(5));
    }

    static int Fact(int n)
    {
        if(n == 1)
            return 1;

        return n * Fact(n - 1);
    }
}

Output:

120

⸻

🔹 Example 2: Fibonacci

static int Fib(int n)
{
    if(n <= 1)
        return n;

    return Fib(n-1) + Fib(n-2);
}


⸻

🔹 Working of Recursion (Factorial)

Fact(5)
= 5 × Fact(4)
= 5 × 4 × Fact(3)
= 5 × 4 × 3 × Fact(2)
= 5 × 4 × 3 × 2 × Fact(1)
= 120

⸻

🔹 Advantages
	•	Simple and clean code
	•	Good for complex problems
	•	Useful in tree/graph problems

⸻

🔹 Disadvantages
	•	Uses more memory (stack)
	•	Can be slow
	•	Risk of infinite recursion

⸻

🔹 Recursion vs Loop

Feature	Recursion	Loop
Call	Function calls itself	Repeats block
Memory	More	Less
Code	Simple	Sometimes complex


⸻

🔹 Important Points
	•	Must have base case
	•	Each call reduces problem size
	•	Uses stack memory
	•	Can be replaced by loops

⸻

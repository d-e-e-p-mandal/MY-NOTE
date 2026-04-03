# 🧠 Operators in C#

## 🔹 What is an Operator?
An operator is a symbol used to perform operations on variables and values.

Example:
int c = a + b;

---

# 🔹 Types of Operators in C#

1. Arithmetic Operators  
2. Relational Operators  
3. Logical Operators  
4. Assignment Operators  
5. Unary Operators  
6. Bitwise Operators  
7. Conditional (Ternary) Operator  

---

# 1️⃣ Arithmetic Operators

Used for mathematical operations

| Operator | Meaning | Example |
|---------|--------|--------|
| + | Addition | a + b |
| - | Subtraction | a - b |
| * | Multiplication | a * b |
| / | Division | a / b |
| % | Modulus | a % b |

### Example:
int a = 10, b = 3;
Console.WriteLine(a + b); // 13
Console.WriteLine(a % b); // 1

---

# 2️⃣ Relational Operators

Used to compare values

| Operator | Meaning |
|---------|--------|
| == | Equal |
| != | Not equal |
| > | Greater than |
| < | Less than |
| >= | Greater or equal |
| <= | Less or equal |

### Example:
int a = 10, b = 5;
Console.WriteLine(a > b); // true

---

# 3️⃣ Logical Operators

Used with boolean values

| Operator | Meaning |
|---------|--------|
| && | AND |
| || | OR |
| ! | NOT |

### Example:
bool x = true, y = false;
Console.WriteLine(x && y); // false

---

# 4️⃣ Assignment Operators

Used to assign values

| Operator | Example | Meaning |
|---------|---------|--------|
| = | a = 5 | Assign |
| += | a += 2 | a = a + 2 |
| -= | a -= 2 | a = a - 2 |
| *= | a *= 2 | a = a * 2 |
| /= | a /= 2 | a = a / 2 |

---

# 5️⃣ Unary Operators

Operate on single operand

| Operator | Meaning |
|---------|--------|
| + | Positive |
| - | Negative |
| ++ | Increment |
| -- | Decrement |

### Example:
int a = 5;
a++; // 6
a--; // 5

---

# 6️⃣ Bitwise Operators (Advanced)

Work on bits

| Operator | Meaning |
|---------|--------|
| & | AND |
| | | OR |
| ^ | XOR |
| ~ | NOT |
| << | Left shift |
| >> | Right shift |

### Example:
int a = 5, b = 3;
Console.WriteLine(a & b);

---

# 7️⃣ Conditional (Ternary) Operator

Short form of if-else

### Syntax:
condition ? value1 : value2;

### Example:
int a = 10, b = 5;
int max = (a > b) ? a : b;

---

# 🔹 Operator Precedence (Order)

Highest → Lowest:
1. Unary
2. Arithmetic
3. Relational
4. Logical
5. Assignment

---

# 🔹 Example Program

using System;

class Program
{
    static void Main()
    {
        int a = 10, b = 5;

        Console.WriteLine(a + b); // arithmetic
        Console.WriteLine(a > b); // relational
        Console.WriteLine(true && false); // logical

        int x = (a > b) ? a : b;
        Console.WriteLine(x);
    }
}

---

# 🔹 Important Points

- Operators perform operations on data  
- Used in expressions  
- Follow precedence rules  
- Logical operators return boolean  
- Bitwise works on binary values  

---

# 🎯 Final Answer

Operators in C# are symbols used to perform operations on variables and values. They are classified into arithmetic, relational, logical, assignment, unary, bitwise, and conditional operators.
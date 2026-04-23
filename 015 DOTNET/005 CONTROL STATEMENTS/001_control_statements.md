# 🧠 Control Statements in C#

## 🔹 What are Control Statements?
Control statements are used to control the flow of execution of a program.

They decide:
- which statement to execute
- how many times to execute

---

# 🔹 Types of Control Statements

1. Decision Making (Selection)
2. Looping (Iteration)
3. Jump Statements

---

# 1️⃣ Decision Making Statements

## 🔸 if

### Syntax:
if(condition)
{
    // code
}

### Example:
int a = 10;
if(a > 5)
{
    Console.WriteLine("Greater");
}

---

## 🔸 if-else

### Syntax:
if(condition)
{
    // true block
}
else
{
    // false block
}

### Example:
int a = 5;
if(a > 10)
{
    Console.WriteLine("Greater");
}
else
{
    Console.WriteLine("Smaller");
}

---

## 🔸 if-else if ladder

### Example:
int marks = 75;

if(marks >= 90)
    Console.WriteLine("A");
else if(marks >= 70)
    Console.WriteLine("B");
else
    Console.WriteLine("C");

---

## 🔸 switch

### Syntax:
switch(value)
{
    case 1:
        // code
        break;
    default:
        // code
        break;
}

### Example:
int day = 2;

switch(day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Invalid");
        break;
}

---

# 2️⃣ Looping Statements

## 🔸 for loop

### Syntax:
for(initialization; condition; increment)
{
    // code
}

### Example:
for(int i = 0; i < 3; i++)
{
    Console.WriteLine(i);
}

---

## 🔸 while loop

### Syntax:
while(condition)
{
    // code
}

### Example:
int i = 0;
while(i < 3)
{
    Console.WriteLine(i);
    i++;
}

---

## 🔸 do-while loop

### Syntax:
do
{
    // code
} while(condition);

### Example:
int i = 0;
do
{
    Console.WriteLine(i);
    i++;
} while(i < 3);

---

## 🔸 foreach loop

### Syntax:
foreach(type var in collection)
{
    // code
}

### Example:
int[] arr = {1,2,3};

foreach(int x in arr)
{
    Console.WriteLine(x);
}

---

# 3️⃣ Jump Statements

## 🔸 break
- Stops loop or switch

Example:
for(int i=0;i<5;i++)
{
    if(i==3) break;
}

---

## 🔸 continue
- Skips current iteration

Example:
for(int i=0;i<5;i++)
{
    if(i==3) continue;
    Console.WriteLine(i);
}

---

## 🔸 return
- Exits method and returns value

Example:
int Add(int a,int b)
{
    return a + b;
}

---

## 🔸 goto (rare)
- Jumps to labeled statement

Example:
goto label;
label:
Console.WriteLine("Hello");

---

# 🔹 Important Points

- Control statements manage program flow  
- if and switch are decision statements  
- loops repeat code  
- break and continue control loops  
- foreach is used for collections  

---

# 🎯 Final Answer

Control statements in C# control the flow of execution of a program and are mainly divided into decision-making, looping, and jump statements.
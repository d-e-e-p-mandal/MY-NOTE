
# Nullable Value Type (?)
- Used to allow null values for value types


**Normally not allowed:**
```cs
int x = null; // ERROR
```

**Using : `?`**
```cs
int? x = null;
```

**Now x can store:**
* a number (10, 20)
* OR null

**Example :**
```cs
int? age = null;
if (age.HasValue)
{
    Console.WriteLine(age.Value);
}
else
{
    Console.WriteLine("No value");
}
```

-----------------------------------------------

# Null-Coalescing Operator (??)

- Used to give default value if null
```cs
int? x = null;
int y = x ?? 0;
Console.WriteLine(y); // 0
```

**Meaning :**
* If x is null → use 0
* Otherwise → use x

## Null-Conditional Operator (?.)
- Prevents null reference error

**Without ?.**
```cs
string name = null;
Console.WriteLine(name.Length); // ERROR
```

**With ?.**
```cs
string name = null;
Console.WriteLine(name?.Length); // no error
```
Output: nothing (safe)

--------------------------------------------
--------------------------------------------

## Ternary Operator (?:)

- Short form of if-else
```cs
int age = 18;
strin`g result = (age >= 18) ? "Adult" : "Minor";
Console.WriteLine(result);
```

Same as:
```cs
if (age >= 18)
    result = "Adult";
else
    result = "Minor";
```

## Null-Coalescing Assignment (??=)

- Assign value only if null
```cs
string name = null;
name ??= "Default Name";
Console.WriteLine(name);
```

---------------------------------------------

**Summary Table**

Symbol	Name	Use
?	Nullable	allow null
??	Null-coalescing	default value
?.	Null-safe access	avoid error
?:	Ternary	if-else short
??=	Assign if null	default assign


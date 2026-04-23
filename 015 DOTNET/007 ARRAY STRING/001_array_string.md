Here is a complete and simple Markdown (.md) note ONLY on Arrays and Strings in C# 👇

⸻


# 🧠 Arrays and Strings in C#

---

# 🔹 1. ARRAY

## 📌 What is Array?
An array is a collection of elements of the same data type stored in contiguous memory locations.

---

## 🔹 Syntax

dataType[] arrayName = new dataType[size];

---

## 🔹 Example

```csharp
int[] arr = new int[3];
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;


⸻

🔹 Direct Initialization

int[] arr = {1, 2, 3, 4};


⸻

🔹 Types of Arrays

1️⃣ One-Dimensional Array

int[] a = {1, 2, 3};


⸻

2️⃣ Two-Dimensional Array

int[,] a = {{1,2},{3,4}};


⸻

3️⃣ Jagged Array

int[][] a = new int[2][];
a[0] = new int[] {1,2};
a[1] = new int[] {3,4,5};


⸻

🔹 Accessing Elements

Console.WriteLine(arr[0]);


⸻

🔹 Looping Array

for(int i = 0; i < arr.Length; i++)
{
    Console.WriteLine(arr[i]);
}

foreach(int x in arr)
{
    Console.WriteLine(x);
}


⸻

🔹 Important Properties
	•	Length → number of elements
	•	Index starts from 0

⸻

🔹 Array Methods

Array.Sort(arr);
Array.Reverse(arr);
Array.IndexOf(arr, 2);


⸻

🔹 Passing Array to Method

static void Show(int[] a)
{
    foreach(int x in a)
        Console.WriteLine(x);
}


⸻

🔹 Important Points
	•	Fixed size
	•	Same data type
	•	Faster access
	•	Stored in contiguous memory

⸻

🔹 2. STRING

📌 What is String?

A string is a sequence of characters.

string name = "Deep";


⸻

🔹 Properties of String
	•	Immutable (cannot change after creation)
	•	Reference type
	•	Stored in heap

⸻

🔹 Common String Methods

string s = "Hello";

s.Length           // 5
s.ToUpper()        // HELLO
s.ToLower()        // hello
s.Contains("He")   // true
s.Substring(1)     // ello
s.Replace("H","J") // Jello


⸻

🔹 String Concatenation

string a = "Hello";
string b = "World";

string c = a + " " + b;


⸻

🔹 String Interpolation

string name = "Deep";
Console.WriteLine($"Hello {name}");


⸻

🔹 String Comparison

string a = "Hello";
string b = "hello";

Console.WriteLine(a == b);   // false


⸻

🔹 StringBuilder (Mutable String)

using System.Text;

StringBuilder sb = new StringBuilder("Hello");
sb.Append(" World");

Console.WriteLine(sb);


⸻

🔹 Escape Sequences

Console.WriteLine("Hello\nWorld");
Console.WriteLine("Name:\tDeep");

Escape	Meaning
\n	New line
\t	Tab
"	Double quote


⸻

🔹 Important Points
	•	String is immutable
	•	Use StringBuilder for modification
	•	Supports many built-in methods
	•	Used for text handling

⸻

🔹 Difference: Array vs String

Feature	Array	String
Data	Multiple values	Text
Type	Can be any type	char sequence
Size	Fixed	Fixed (immutable)
Modify	Yes	No (use new string)


⸻

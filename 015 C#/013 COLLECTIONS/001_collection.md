Here is a complete and simple Markdown (.md) note on Collections in C# (full details) 👇

⸻


# 🧠 Collections in C#

---

# 🔹 What are Collections?

Collections are data structures used to store and manage groups of data dynamically.

👉 Unlike arrays:
- Collections are **dynamic (size can change)**
- Provide many built-in methods

---

# 🔹 Types of Collections in C#

1. Non-Generic Collections  
2. Generic Collections  
3. Specialized Collections  

---

# 🔹 1️⃣ Non-Generic Collections

👉 Store data as `object` type (not type-safe)

## 🔸 ArrayList

```csharp
using System.Collections;

ArrayList list = new ArrayList();
list.Add(10);
list.Add("Hello");
list.Add(20);

📌 Features:
	•	Can store different data types
	•	Dynamic size
	•	Slower (boxing/unboxing)

⸻

🔸 Hashtable

using System.Collections;

Hashtable ht = new Hashtable();
ht.Add(1, "One");
ht.Add(2, "Two");

📌 Features:
	•	Key-value pairs
	•	No type safety

⸻

🔹 2️⃣ Generic Collections (Important 🔥)

👉 Type-safe and faster

Namespace:

using System.Collections.Generic;


⸻

🔸 List

List<int> list = new List<int>();
list.Add(10);
list.Add(20);
list.Remove(10);

📌 Features:
	•	Dynamic array
	•	Same data type
	•	Most commonly used

⸻

🔸 Dictionary<TKey, TValue>

Dictionary<int, string> dict = new Dictionary<int, string>();
dict.Add(1, "One");
dict.Add(2, "Two");

📌 Features:
	•	Key-value pairs
	•	Fast lookup

⸻

🔸 Stack

Stack<int> stack = new Stack<int>();
stack.Push(1);
stack.Push(2);
stack.Pop();

📌 Features:
	•	LIFO (Last In First Out)

⸻

🔸 Queue

Queue<int> q = new Queue<int>();
q.Enqueue(1);
q.Enqueue(2);
q.Dequeue();

📌 Features:
	•	FIFO (First In First Out)

⸻

🔸 HashSet

HashSet<int> set = new HashSet<int>();
set.Add(1);
set.Add(1);  // duplicate ignored

📌 Features:
	•	Unique values only
	•	No duplicates

⸻

🔹 3️⃣ Specialized Collections

🔸 SortedList

SortedList<int, string> sl = new SortedList<int, string>();
sl.Add(2, "Two");
sl.Add(1, "One");

👉 Automatically sorted

⸻

🔹 Common Methods

Method	Use
Add()	Add element
Remove()	Remove element
Clear()	Remove all
Contains()	Check element
Count	Number of elements


⸻

🔹 Array vs Collection

Feature	Array	Collection
Size	Fixed	Dynamic
Type safety	Yes	Yes (Generic)
Flexibility	Low	High


⸻

🔹 Advantages of Collections
	•	Dynamic size
	•	Easy data handling
	•	Built-in methods
	•	Type safety (Generic)

⸻

🔹 Disadvantages
	•	Slightly slower than arrays
	•	More memory usage

⸻

🔹 Example Program

using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<int> list = new List<int>();
        list.Add(10);
        list.Add(20);

        foreach(int x in list)
            Console.WriteLine(x);
    }
}


⸻

🔹 Important Points
	•	Prefer Generic collections
	•	List is most used
	•	Dictionary is best for lookup
	•	Stack → LIFO
	•	Queue → FIFO
	•	HashSet → unique values

⸻
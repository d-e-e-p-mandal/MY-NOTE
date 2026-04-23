
## Comments in C#

👉 Comments = non-executable text
👉 Used to explain code or disable code

✔️ Compiler ignores comments

⸻

🔹 Types of Comments in C#

⸻

1️⃣ Single-Line Comment

// This is a single-line comment
Console.WriteLine("Hello");

📌 Use:
	•	Short explanations
	•	Debugging (temporarily disable line)

⸻

2️⃣ Multi-Line Comment

/* This is a
   multi-line comment */
Console.WriteLine("Hello");

📌 Use:
	•	Long descriptions
	•	Documentation

⸻

3️⃣ XML Documentation Comment (Advanced 🔥)

/// <summary>
/// This method adds two numbers
/// </summary>
int Add(int a, int b)
{
    return a + b;
}

📌 Use:
	•	For documentation
	•	Used in tools like IntelliSense

⸻

🔹 Example

using System;

class Program
{
    static void Main()
    {
        // Taking input
        Console.Write("Enter number: ");

        /* Reading input
           from user */
        int num = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Number is " + num);
    }
}


⸻

⚡ Important Points
	•	Comments do not affect program execution
	•	Used for readability & understanding
	•	Helpful for team projects

⸻

❗ Shortcut (VS Code / Visual Studio)
	•	Ctrl + / → single-line comment toggle
	•	Shift + Alt + A → multi-line comment

⸻

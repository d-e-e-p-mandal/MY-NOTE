
# File Handling in C#

File handling is used to **create, read, write, append, and delete files** in C#.

👉 Used to store data permanently (in files)

---

# 🔹 Namespace Required

```csharp
using System.IO;


⸻

🔹 Types of Files
	1.	Text Files (.txt)
	2.	Binary Files (.bin)

⸻

🔹 1️⃣ File Class (Basic Operations)

📌 Create File

File.Create("test.txt");


⸻

📌 Write to File

File.WriteAllText("test.txt", "Hello World");


⸻

📌 Read File

string data = File.ReadAllText("test.txt");
Console.WriteLine(data);


⸻

📌 Append Data

File.AppendAllText("test.txt", " Welcome");


⸻

📌 Delete File

File.Delete("test.txt");


⸻

🔹 2️⃣ StreamWriter (Write File)

using System.IO;

StreamWriter sw = new StreamWriter("test.txt");
sw.WriteLine("Hello");
sw.Close();


⸻

🔹 3️⃣ StreamReader (Read File)

StreamReader sr = new StreamReader("test.txt");
string line = sr.ReadLine();
Console.WriteLine(line);
sr.Close();


⸻

🔹 4️⃣ Using Statement (Best Practice 🔥)

using (StreamWriter sw = new StreamWriter("test.txt"))
{
    sw.WriteLine("Hello");
}

👉 Automatically closes file

⸻

🔹 5️⃣ Binary Files

Write Binary

BinaryWriter bw = new BinaryWriter(File.Open("data.bin", FileMode.Create));
bw.Write(100);
bw.Close();

Read Binary

BinaryReader br = new BinaryReader(File.Open("data.bin", FileMode.Open));
int x = br.ReadInt32();
Console.WriteLine(x);
br.Close();


⸻

🔹 6️⃣ FileInfo Class

FileInfo file = new FileInfo("test.txt");

Console.WriteLine(file.Name);
Console.WriteLine(file.Length);


⸻

🔹 7️⃣ Directory Handling

Directory.CreateDirectory("MyFolder");
Directory.Delete("MyFolder");


⸻

🔹 8️⃣ Common File Modes

Mode	Use
Create	Create new file
Open	Open existing
Append	Add data
OpenOrCreate	Open or create


⸻

🔹 9️⃣ Exception Handling in File

try
{
    string data = File.ReadAllText("test.txt");
}
catch(Exception e)
{
    Console.WriteLine(e.Message);
}


⸻

🔹 10️⃣ Important Points
	•	Always close file (or use using)
	•	Use try-catch for safety
	•	File class is simple for basic tasks
	•	Streams are used for advanced control
	•	Binary files store non-text data

⸻

🔹 Example Program

using System;
using System.IO;

class Program
{
    static void Main()
    {
        File.WriteAllText("demo.txt", "Hello C#");

        string data = File.ReadAllText("demo.txt");
        Console.WriteLine(data);
    }
}


⸻
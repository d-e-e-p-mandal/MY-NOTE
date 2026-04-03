Class :
- class is a blueprint of Object 
- C# cannot run completely without a class.


Object :
- It is a instance of class


```cs
using System;

class Student
{
    public string name;
}

class Program
{
    static void Main()
    {
        Student s1 = new Student();  // object created
        s1.name = "Deep";

        Console.WriteLine(s1.name);
    }
}
```


Yes 👍 — let’s make it very clear and exam-ready 👇

⸻

🧠 Default Access Modifiers in C#

👉 “By default” = when you don’t write anything

⸻

🔑 1. Class Members (Fields, Methods)

class Test {
    int a;   // no modifier
}

👉 Default = private ❗

✔️ Meaning:
	•	Accessible only inside the same class
	•	❌ Not accessible from other classes

⸻

🔑 2. Classes (Top-level)

class Test {
}

👉 Default = internal

✔️ Meaning:
	•	Accessible within same project/assembly
	•	❌ Not outside project

⸻

🔑 3. Methods

class Test {
    void Show() { }
}

👉 Default = private

⸻

📊 Summary Table

Element	Default :   Access
Variable (field):  	private
Method	        :   private
Class	        :   internal


⸻

⚡ Example

using System;

class Test {
    int a = 10;  // private by default
}

class Program {
    static void Main() {
        Test t = new Test();
        // Console.WriteLine(t.a); ❌ ERROR
    }
}


⸻


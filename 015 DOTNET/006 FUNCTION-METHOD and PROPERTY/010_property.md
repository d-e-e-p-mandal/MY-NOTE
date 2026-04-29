# Property :

```cs

```



The line

public string Brand { get; set; }

belongs to the topic of Properties in C# (specifically Auto-Implemented Properties) in the C#.

⸻

🧠 What is get and set?

👉 This is a property, not a normal variable.

public string Brand { get; set; }

* get → used to read the value
* set → used to write/change the value

⸻

🔹 Equivalent (Expanded Form)

The above line is shorthand for:

private string _brand;
public string Brand
{
    get { return _brand; }
    set { _brand = value; }
}

👉 C# automatically creates the backing field for you

⸻

🔥 Why Use Properties?

Feature	Benefit
Encapsulation	Controls access to data
Safety	You can validate data
Clean code	Less boilerplate

⸻

🔹 Example

class Product
{
    public string Brand { get; set; }
}
class Program
{
    static void Main()
    {
        Product p = new Product();
        p.Brand = "Apple";        // set
        Console.WriteLine(p.Brand); // get
    }
}

⸻

🧠 Topic Name (Important)

👉 This comes under:

* OOP (Object-Oriented Programming)
* Encapsulation
* Properties (Auto-properties)

⸻

🚀 Interview One-Liner

👉

“get and set are accessors used in properties to read and write values, and they are part of encapsulation in C#.”

⸻

If you want, I can explain:

* 🔥 get; private set;
* 🔥 Read-only properties
* 🔥 Validation inside set (important for exams)
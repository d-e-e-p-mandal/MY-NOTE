
# Field :
```cs
public string Brand;
```

# Property :
- `Fields work, but properties give control, safety, and flexibility.`

* get → used to read the value
* set → used to write/change the value

##### C# Field vs Property

| Feature            | Field | Property |
|-------------------|-------|----------|
| Simple            | ✔     | ✔        |
| Validation        | ❌     | ✔        |
| Encapsulation     | ❌     | ✔        |
| Control access    | ❌     | ✔        |
| Framework support | ❌     | ✔        |


### Public :
```cs
public string Brand { get; set; }
```
- The line is shorthand form.
- specifically Auto-Implemented Properties in the C#.
- C# automatically creates the backing field for you

**Equivalent Expanded Form :**
```cs
private string _brand;
public string Brand
{
    get { return _brand; }
    set { _brand = value; }
}
```

**Why Use Properties?**

Encapsulation -> Controls access to data
Safety -> You can validate data
Clean code	-> Less boilerplate


--------------------
### Private

1. Fully Private Property
```cs
class A
{
    private int X { get; set; }
}
```
Meaning:
* Only accessible inside the same class
* Cannot be used outside

2. Private Field + Public Property (Most Used ✔)
```cs
class A
{
    private int x;   // private field
    public int X     // public property
    {
        get { return x; }
        set { x = value; }
    }
}
```
Best practice:

* Data is hidden (private x)
* Access controlled via property (public X)

⸻

3. Public Read, Private Write (Very Important ⭐)
```cs
class A
{
    public int X { get; private set; }
}
```
Meaning:

* Outside class → only read
* Inside class → can set value

⸻

✅ 4. Private Get, Public Set (rare)

class A
{
    public int X { private get; set; }
}

👉 Outside:

* Can set value
* Cannot read value

⸻

**Example :**
```cs
class A
{
    public int X { get; private set; }
    public void SetValue(int value)
    {
        X = value; // allowed (inside class)
    }
}
class Program
{
    static void Main()
    {
        A obj = new A();
        obj.SetValue(100);
        Console.WriteLine(obj.X); // ✔ read allowed
        // obj.X = 200; ❌ not allowed
    }
}
```

--------------------------
### Protected

✅ protected in C# (with properties)

👉 protected means:

* ✔ Accessible inside the same class
* ✔ Accessible in derived (child) classes
* ❌ NOT accessible outside (no direct access via object)

⸻

🔹 1. Protected Property

class A
{
    protected int X { get; set; }
}

👉 X can be used:

* inside A
* inside any class that inherits A

⸻

🔹 2. Example with Inheritance

using System;
class A
{
    protected int X { get; set; }
}
class B : A
{
    public void SetValue()
    {
        X = 100; // ✔ allowed (derived class)
    }
    public void Show()
    {
        Console.WriteLine(X); // ✔ allowed
    }
}
class Program
{
    static void Main()
    {
        B obj = new B();
        obj.SetValue();
        obj.Show();
        // Console.WriteLine(obj.X); ❌ NOT allowed (outside class)
    }
}

⸻

🔥 Key Point

👉 Even if object exists:

B obj = new B();

❌ You cannot do:

obj.X; // ❌ ERROR

⸻

🔹 3. Protected Setter (Very Useful ⭐)

class A
{
    public int X { get; protected set; }
}

👉 Meaning:

* ✔ Everyone can read
* ✔ Only derived classes can set

⸻

🔹 4. Example

class A
{
    public int X { get; protected set; }
}
class B : A
{
    public void SetValue()
    {
        X = 200; // ✔ allowed
    }
}

⸻

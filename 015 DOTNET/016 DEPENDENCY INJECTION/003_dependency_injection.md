
# DEPENDENCY INJECTION (DI) – FULL NOTE


**What is Dependency Injection?**

- Dependency Injection (DI) is a design pattern where a class does not create its dependencies itself.
- Instead, dependencies are provided (injected) from outside.
- “Don’t create objects, receive them.”


**Why DI is needed?**

- Problem without DI (Tight Coupling)
```cs
using System;
class Engine
{
    public void Start()
    {
        Console.WriteLine("Engine Started");
    }
}
class Car
{
    private Engine engine = new Engine(); // tightly coupled
    public void StartCar()
    {
        engine.Start();
    }
}
class Program
{
    static void Main()
    {
        Car car = new Car();
        car.StartCar();
    }
}
```
**Problems:**
* Cannot change Engine easily
* Hard to test
* Not flexible


With DI (Loose Coupling)
```cs
using System;
interface IEngine
{
    void Start();
}
class PetrolEngine : IEngine
{
    public void Start()
    {
        Console.WriteLine("Petrol Engine Started");
    }
}
class DieselEngine : IEngine
{
    public void Start()
    {
        Console.WriteLine("Diesel Engine Started");
    }
}
class Car
{
    private IEngine engine;
    public Car(IEngine eng) // dependency injected
    {
        engine = eng;
    }
    public void StartCar()
    {
        engine.Start();
    }
}
class Program
{
    static void Main()
    {
        IEngine engine = new PetrolEngine(); // choose engine
        Car car = new Car(engine);
        car.StartCar();
    }
}
```

## Types of Dependency Injection

### Constructor Injection

👉 Dependency is passed via constructor
```cs
class Car
{
    private IEngine engine;
    public Car(IEngine eng)
    {
        engine = eng;
    }
}
```
- Required dependency
- Safe and recommended

⸻

### Property Injection

class Car
{
    public IEngine Engine { get; set; }
    public void StartCar()
    {
        Engine.Start();
    }
}

Usage:

Car car = new Car();
car.Engine = new PetrolEngine();
car.StartCar();

❌ Risk: Engine may be null

⸻

### Method Injection
```cs
class Car
{
    public void StartCar(IEngine engine)
    {
        engine.Start();
    }
}
```
Usage:

Car car = new Car();
car.StartCar(new PetrolEngine());

✔ Used only when needed

⸻

🔷 5. DI Container (Automatic Injection)

Used in:
👉 ASP.NET Core

⸻

🔹 Registration

builder.Services.AddScoped<IEngine, PetrolEngine>();

⸻

🔹 Usage

class Car
{
    private IEngine engine;
    public Car(IEngine eng)
    {
        engine = eng;
    }
}

👉 .NET automatically injects dependency

⸻

🔷 6. Service Lifetimes

⸻

🟡 1. Transient

services.AddTransient<IEngine, PetrolEngine>();

👉 New object every time

⸻

🟡 2. Scoped

services.AddScoped<IEngine, PetrolEngine>();

👉 One object per request

⸻

🟡 3. Singleton

services.AddSingleton<IEngine, PetrolEngine>();

👉 Single instance for entire app

⸻

🔷 7. Real-life Analogy

👉 Car does not build engine
👉 Factory provides engine

👉 Same in DI:

* Class does not create object
* Object is injected

⸻

🔷 8. Advantages of DI

✔ Loose coupling
✔ Easy testing (mocking)
✔ Reusable code
✔ Easy maintenance
✔ Flexible design

⸻

🔷 9. DI vs Without DI

Feature	Without DI	With DI
Coupling	Tight	Loose
Flexibility	Low	High
Testing	Hard	Easy
Maintenance	Difficult	Easy

⸻

🔷 10. Key Terms

Term	Meaning
Dependency	Required object
Injection	Providing object
DI Container	Manages objects

⸻

🔥 FINAL EXAM ANSWER

👉 Dependency Injection is a design pattern in which dependencies are provided to a class from outside rather than created inside the class. It promotes loose coupling, improves flexibility, and is implemented using constructor, property, and method injection.

⸻

🔥 SHORT REVISION

* DI = Provide object from outside
* Types = Constructor, Property, Method
* Best = Constructor Injection
* Benefit = Loose coupling

⸻

If you want next:

* diagram (very helpful for exams)
* real ASP.NET project structure
* tricky interview questions

Just tell 👍




**Custom Code Of All (For Undersstanding) :**
```cs
using System;

class Engine
{
    public Guid Id = Guid.NewGuid(); // unique ID
}

class Container
{
    private static Engine singletonInstance; // for Singleton
    private Engine scopedInstance;           // for Scoped

    // Transient → new every time
    public Engine GetTransient()
    {
        return new Engine();
    }

    // Singleton → same for whole app
    public Engine GetSingleton()
    {
        if (singletonInstance == null)
            singletonInstance = new Engine();

        return singletonInstance;
    }

    // Scoped → same within one scope
    public Engine GetScoped()
    {
        if (scopedInstance == null)
            scopedInstance = new Engine();

        return scopedInstance;
    }

    // Reset scope
    public void NewScope()
    {
        scopedInstance = null;
    }
}

class Program
{
    static void Main()
    {
        Container c = new Container();

        // TRANSIENT
        Console.WriteLine( TRANSIENT");
        var t1 = c.GetTransient();
        var t2 = c.GetTransient();
        Console.WriteLine($"t1: {t1.Id}");
        Console.WriteLine($"t2: {t2.Id}");

        // SINGLETON
        Console.WriteLine("\n🔷 SINGLETON");
        var s1 = c.GetSingleton();
        var s2 = c.GetSingleton();
        Console.WriteLine($"s1: {s1.Id}");
        Console.WriteLine($"s2: {s2.Id}");

        // SCOPED (Same Scope)
        Console.WriteLine("\n🔷 SCOPED (Same Scope)");
        var sc1 = c.GetScoped();
        var sc2 = c.GetScoped();
        Console.WriteLine($"sc1: {sc1.Id}");
        Console.WriteLine($"sc2: {sc2.Id}");

        // SCOPED (New Scope)
        Console.WriteLine("\n🔷 SCOPED (New Scope)");
        c.NewScope();
        var sc3 = c.GetScoped();
        Console.WriteLine($"sc3: {sc3.Id}");
    }
}
```
Here is a complete, detailed, and exam-ready Markdown (.md) note on Delegates and Events in C# 👇

⸻


# 🧠 Delegates and Events in C# (Full Notes)

---

# 🔹 1. DELEGATES

## 📌 What is a Delegate?

A delegate is a **type-safe function pointer** that holds reference to a method.

👉 It allows methods to be passed as parameters and called dynamically.

---

## 🔹 Why Delegates?

- To call methods dynamically  
- To pass methods as arguments  
- To implement callback methods  
- Used in event handling  

---

## 🔹 Syntax

```csharp
delegate returnType DelegateName(parameters);


⸻

🔹 Example (Basic Delegate)

using System;

class Program
{
    delegate void MyDelegate();

    static void Show()
    {
        Console.WriteLine("Hello Delegate");
    }

    static void Main()
    {
        MyDelegate d = Show;
        d();   // invoke
    }
}


⸻

🔹 Delegate with Parameters

delegate int AddDelegate(int a, int b);

static int Add(int x, int y)
{
    return x + y;
}

AddDelegate d = Add;
Console.WriteLine(d(5, 10));


⸻

🔹 Delegate with Instance Method

class Test
{
    public void Show()
    {
        Console.WriteLine("Instance Method");
    }
}

Test obj = new Test();
MyDelegate d = obj.Show;
d();


⸻

🔹 Multicast Delegate

👉 One delegate → multiple methods

delegate void MyDelegate();

static void A() { Console.WriteLine("A"); }
static void B() { Console.WriteLine("B"); }

MyDelegate d = A;
d += B;

d();   // calls A and B


⸻

🔹 Delegate Invocation Methods

d();              // direct call
d.Invoke();       // same as above


⸻

🔹 Anonymous Method

MyDelegate d = delegate()
{
    Console.WriteLine("Anonymous");
};


⸻

🔹 Lambda Expression

MyDelegate d = () => Console.WriteLine("Lambda");


⸻

🔹 Built-in Delegates

🔸 Action (no return)

Action<string> act = msg => Console.WriteLine(msg);

🔸 Func (returns value)

Func<int, int, int> add = (a, b) => a + b;

🔸 Predicate (returns bool)

Predicate<int> check = x => x > 10;


⸻

🔹 Advantages of Delegates
	•	Flexible method calling
	•	Supports callback
	•	Used in event-driven programming
	•	Type-safe

⸻

🔹 Important Points
	•	Signature must match
	•	Can point to static & instance methods
	•	Supports multiple methods (multicast)

⸻

🔹 2. EVENTS

📌 What is an Event?

An event is a mechanism that notifies other objects when something happens.

👉 Built on delegates

⸻

🔹 Why Events?
	•	Used in GUI (button click)
	•	Used in notifications
	•	Implements publisher-subscriber pattern

⸻

🔹 Syntax

event DelegateName EventName;


⸻

🔹 Basic Example

using System;

class Program
{
    public delegate void MyDelegate();

    public static event MyDelegate OnPrint;

    static void Show()
    {
        Console.WriteLine("Event Triggered");
    }

    static void Main()
    {
        OnPrint += Show;   // subscribe
        OnPrint();         // trigger
    }
}


⸻

🔹 Publisher-Subscriber Example

class Publisher
{
    public delegate void Notify();
    public event Notify OnNotify;

    public void Raise()
    {
        if(OnNotify != null)
            OnNotify();
    }
}

class Subscriber
{
    public void Message()
    {
        Console.WriteLine("Received Notification");
    }
}


⸻

🔹 Using Event

Publisher p = new Publisher();
Subscriber s = new Subscriber();

p.OnNotify += s.Message;
p.Raise();


⸻

🔹 Event Keywords
	•	event → declare event
	•	+= → subscribe
	•	-= → unsubscribe

⸻

🔹 Important Rules of Events
	•	Cannot be called directly outside class
	•	Must subscribe before use
	•	Uses delegate internally

⸻

🔹 Delegate vs Event

Feature	Delegate	Event
Purpose	Method reference	Notification
Access	Direct	Restricted
Use	Call methods	Trigger actions


⸻

🔹 Advantages of Events
	•	Loose coupling
	•	Better modular design
	•	Event-driven programming
	•	Safe execution

⸻

🔹 Real-Life Example

👉 Button click:
	•	Button → event
	•	Click → action
	•	Code runs when clicked

⸻

🔹 Common Use Cases
	•	GUI applications
	•	Notifications
	•	Logging systems
	•	Callbacks

⸻

🔹 Important Points
	•	Delegates = method reference
	•	Events = notification system
	•	Events are based on delegates
	•	Used in real-world applications

⸻

# What is Method Hiding?
- Method hiding means the child class defines a method with the same name as the parent, but it does not override it.
- Instead, it hides the parent method.

**Keyword Used :** *new*
```cs
class A
{
    public void Show()
    {
        Console.WriteLine("Parent");
    }
}
class B : A
{
    public new void Show()   // method hiding
    {
        Console.WriteLine("Child");
    }
}
```
 
```cs
A obj1 = new B();
obj1.Show();   // 
B obj2 = new B();
obj2.Show();   //
```
**Output:**
Parent   // because reference type is A
Child    // because reference type is B


⚠️**Why this happens?**
- Because method hiding uses compile-time binding (early binding)
* Compiler decides method based on reference type
* Not actual object type

------------------------------

### Method Hiding vs Method Overriding

Feature	Method Hiding	Method Overriding
Keyword	new	            override
Parent method	normal method	virtual method
Binding	Compile-time	Runtime
Polymorphism	❌ No	✅ Yes
Output depends on	Reference type	Object type

-------------------------------
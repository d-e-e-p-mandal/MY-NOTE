# Extension Method :

- Method must be static 

```cs
using System;

public static class A
{
    public static void Extra(this string str) 
    { 
        Console.WriteLine("Extra method: " + str);
    }
}

public class HelloWorld
{
    public static void Main(string[] args)
    {
        string name = "Deep";

        name.Extra(); // correct call
    }
}
```

Same Code in simple Method
```cs
using System;

public class A
{
    public static void Extra(string str) 
    { 
        Console.WriteLine("Extra method: " + str);
    }
}

public class HelloWorld
{
    public static void Main(string[] args)
    {
        string name = "Deep";

        A.Extra(name); // simple method call
    }
}
```
----

Taking Class In Extension Method :
```cs
using System;

// Your class
public class MyClass
{
    public string Name = "Test";
}

// Extension class
public static class MyClassExtensions
{
    public static void Extra(this MyClass obj)
    {
        Console.WriteLine("Hello " + obj.Name);
    }
}

// Main program
public class Program
{
    public static void Main(string[] args)
    {
        MyClass m = new MyClass();

        m.Extra(); // calling extension method
    }
}
```
# Structure : 

### Without Class :
- C# code without explicitly writing a class, but only in modern C# (.NET 6+).
```cs
Console.WriteLine("Hello, World!");
int a = 5, b = 10;
Console.WriteLine("Sum = " + (a + b));
```


### With Class :
```cs
class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}
```


## Structure with Namespace :
```cs
using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}
```
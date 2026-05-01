## Directive Of : `System.Threading.Task;`

**1. `Task.Delay(1000)`**




**2. `await Task.Delay(1000)`**





**3. `Task.Delay(1000).Wait()`**





**4. `Task.WhenAll()`**

```cs
using System;
using System.Threading.Tasks;

class Car
{
    public async Task A()
    {
        Console.WriteLine("A started");
        await Task.Delay(3000);
        Console.WriteLine("A ended");
    }

    public async Task B()
    {
        Console.WriteLine("B started");
        await Task.Delay(3000);
        Console.WriteLine("B ended");
    }

    public async Task C()
    {
        Console.WriteLine("C started");
        await Task.Delay(3000);
        Console.WriteLine("C ended");
    }
}

class Program
{
    static async Task Main()
    {
        Car c = new Car();

        Console.WriteLine("Started");

        await Task.WhenAll(
            c.A(),
            c.B(),
            c.C()
        );

        Console.WriteLine("Ended");
    }
}
```
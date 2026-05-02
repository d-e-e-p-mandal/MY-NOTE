
# What is Multithreading?

- Multithreading means running multiple tasks (threads) at the same time inside a program to improve performance and responsiveness.

**Example:**
* Download file + update UI simultaneously
* Process multiple requests in a web app


**Thread vs Process :**
| Feature        | Process              | Thread             |
|----------------|----------------------|--------------------|
| Definition     | Independent program  | Part of process    |
| Memory         | Separate             | Shared             |
| Communication  | Hard                 | Easy               |
| Speed          | Slower               | Faster             |


#### Ways to Implement Multithreading in C#

1. Using Thread Class (Low-level)

**Directive :** `System.Threading.Thread;`

```cs
using System;
using System.Threading;
class Program
{
    static void Print()
    {
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine("Thread running: " + i);
            Thread.Sleep(1000);
        }
    }
    static void Main()
    {
        Thread t1 = new Thread(Print);
        t1.Start();
        Thread.Sleep(1000);

        Console.WriteLine("Main thread running...");
    }
}
```

- Full control over threads
- Not recommended for modern apps (use Task instead)


2. Using Task (Modern & Recommended)

**Directive :** `using System.Threading.Tasks;`

Example 1 :
```cs
using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        Console.WriteLine($"Main Thread ID: {Thread.CurrentThread.ManagedThreadId}");

        Task task = Task.Run(() =>
        {
            for (int i = 1; i <= 5; i++)
            {
                Console.WriteLine($"[Task] Iteration: {i}, Thread ID: {Thread.CurrentThread.ManagedThreadId}");
                Thread.Sleep(500); // simulate work
            }
        });

        task.Wait();

        Console.WriteLine("Task Completed");
    }
}
```

Example : 2 
```cs
using System;
using System.Threading;
using System.Threading.Tasks;
class Program
{
    static void Main()
    {
        Task t1 = Task.Run(() => Print("Task 1"));
        Task t2 = Task.Run(() => Print("Task 2"));

        Task.WaitAll(t1, t2);

        Console.WriteLine("All Tasks Completed");
    }

    static void Print(string name)
    {
        for (int i = 1; i <= 50; i++)
        {
            Console.WriteLine($"{name} - Iteration {i} - Thread {Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(500);
        }
    }
}
```

* Async programming
* Parallel execution

⸻

3. Using async/await (High-level)


```cs
using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        Console.WriteLine($"Main START → Thread ID: {Thread.CurrentThread.ManagedThreadId}");

        Task task = Task.Run(() =>
        {
            Console.WriteLine($"Task START → Thread ID: {Thread.CurrentThread.ManagedThreadId}");

            for (int i = 1; i <= 5; i++)
            {
                Console.WriteLine($"[Task Thread {Thread.CurrentThread.ManagedThreadId}] Count: {i}");
                Thread.Sleep(500);
            }

            Console.WriteLine($"Task END → Thread ID: {Thread.CurrentThread.ManagedThreadId}");
        });

        Console.WriteLine($"Main CONTINUES → Thread ID: {Thread.CurrentThread.ManagedThreadId}");

        await task;

        Console.WriteLine($"Main END → Thread ID: {Thread.CurrentThread.ManagedThreadId}");
    }
}
```


* I/O operations (API, DB, files)


4. Parallel Programming

Example 1: 
```cs
using System;
using System.Threading.Tasks;
class Program
{
    static void Main()
    {
        Parallel.For(1, 5, i =>
        {
            Console.WriteLine($"Value: {i}");
        });
    }
}
```

Example 2:

```cs
using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static void Main()
    {
        var options = new ParallelOptions
        {
            MaxDegreeOfParallelism = 2
        };

        Parallel.For(1, 6, options, i =>
        {
            Console.WriteLine($"Value: {i} | Thread: {Thread.CurrentThread.ManagedThreadId}");
            Thread.Sleep(500);
        });
    }
}
```

* CPU-intensive tasks


5. Thread Pool
```cs
using System;
using System.Threading;

class Program
{
    static void Work(object? state)
    {
        Console.WriteLine($"Work started → Thread: {Thread.CurrentThread.ManagedThreadId}");
        
        Thread.Sleep(500); // simulate work
        
        Console.WriteLine($"Work finished → Message: {state}");
    }

    static void Main()
    {
        Console.WriteLine($"Main Thread: {Thread.CurrentThread.ManagedThreadId}");

        ThreadPool.QueueUserWorkItem(Work, "Hello from ThreadPool");

        Console.WriteLine("Main continues...");

        Thread.Sleep(1000); // keep app alive
    }
}
```
- Efficient reuse of threads



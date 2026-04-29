### Method → Function inside a class
```cs
class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        int result = Add(5, 10);
        Console.WriteLine(result);
    }
}
```
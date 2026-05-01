# using Keyword :

**This code:**
```cs
using (SqlConnection con = new SqlConnection(cs))
{
    con.Open();
}
```
**Is converted by compiler into :**
```cs
SqlConnection con = new SqlConnection(cs);
try
{
    con.Open();
}
finally
{
    if (con != null)
        con.Dispose(); // closes connection
}
```
- So using = try + finally + Dispose()

-----------------------------------

## Try-Catch :
- using does NOT replace try-catch
* using → resource cleanup
* try-catch → error handling
- You often use both together

**Using with try-catch** (Best Pattern)
```cs
try
{
    using (SqlConnection con = new SqlConnection(cs))
    {
        con.Open();
        using (SqlCommand cmd = new SqlCommand("SELECT * FROM Students", con))
        using (SqlDataReader reader = cmd.ExecuteReader())
        {
            while (reader.Read())
            {
                Console.WriteLine(reader["Name"]);
            }
        }
    }
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}
```
------------------------------------------

## Where can we use using Keyword :

- Use using for objects that implement:
- IDisposable interface


1. Database (ADO.NET)

* SqlConnection
* SqlCommand
* SqlDataReader
* SqlTransaction

2. File Handling

* FileStream
* StreamReader
* StreamWriter
* BinaryReader
* BinaryWriter


3. Graphics / UI

* Bitmap
* Graphics
* Pen, Brush


4. Network / IO

* HttpClient (with care, usually reused)
* MemoryStream


5. Others

* Timer
* CancellationTokenSource


##### How to check if using is needed?

Rule:
- If class implements IDisposable → use using
```cs
class MyClass : IDisposable
```

**New syntax** (C# 8+)
```cs
using SqlConnection con = new SqlConnection(cs);
con.Open();
```
- No braces needed
- Auto-disposed at end of scope


# Return Type in ASP DOTNET:

## DIRECT TYPE (T) → ONLY DATA
```cs
public Employee Get()
{
    return new Employee();
}
```
- ✔ Returns data only
- ✔ Auto → 200 OK
- No error/status control


## COLLECTION TYPES

### List<T>
```cs
public List<Employee> Get()
{
    return _context.Employees.ToList();
}
```
- Concrete collection

### IEnumerable<T>
```CS
public IEnumerable<Employee> Get()
{
    return _context.Employees.ToList();
}
```
- In-memory collection


### IQueryable<T> 
```CS
public IQueryable<Employee> Get()
{
    return _context.Employees;
}
```
- DB query (lazy execution)

### ICollection<T> 
```cs
public ICollection<Employee> Get()
{
    return new List<Employee>();
}
```
- Supports add/remove

### 3. IActionResult (CORE/Best Use)
```cs
public IActionResult Get()
{
    return Ok("Hello");
}
```
- ✔ Full control
- ✔ Any status code

### ActionResult<T>
```cs
public ActionResult<Employee> Get(int id)
{
    var emp = _context.Employees.Find(id);
    if (emp == null)
        return NotFound();
    return emp;
}
```
- ✔ Strongly typed


## ASYNC RETURN TYPES : Task<T>
```cs
public async Task<List<Employee>> Get()
{
    return await _context.Employees.ToListAsync();
}
```

### Task<IActionResult>
```cs
public async Task<IActionResult> Get()
{
    return Ok(await _context.Employees.ToListAsync());
}
```

### Task<ActionResult<T>> 
```cs
public async Task<ActionResult<List<Employee>>> Get()
{
    var data = await _context.Employees.ToListAsync();
    if (!data.Any())
        return NotFound();
    return data;
}
```

## STREAMING TYPES

### IAsyncEnumerable<T>
```cs
public async IAsyncEnumerable<Employee> Get()
{
    await foreach (var emp in _context.Employees.AsAsyncEnumerable())
    {
        yield return emp;
    }
}
```
- Large data streaming

**MIXED TYPE RETURNS :**

### Combination
```cs
public ActionResult<IEnumerable<Employee>> Get()
{
    return _context.Employees.ToList();
}
```

### EDGE CASES / ADVANCED


### ValueTask<T>
```cs
public async ValueTask<Employee> Get()
{
    return new Employee();
}
```
- Rare optimization


### void / Task

public void Get() { }     // not recommended
public Task Get() { }     // avoid


EXAMPLE :
```cs
[HttpGet]
public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
{
    IQueryable<Employee> query = _context.Employees;
    query = query.Where(e => e.Salary > 1000);
    var data = await query.ToListAsync();
    if (!data.Any())
        return NotFound();
    return data;
}
```

T / List<T>        → only data  
IEnumerable        → in-memory  
IQueryable         → DB query  
IActionResult      → full control  
ActionResult<T>    → best practice  
Task<>             → async  
IAsyncEnumerable   → streaming  
ObjectResult       → custom  
File/Content       → special  

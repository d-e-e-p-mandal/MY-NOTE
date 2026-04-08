
### Method 2 : Differen Funtion create and cache used (Recomended)

Write Interface
```cs
public class RedisConfig
{
    public bool IsEnabled { get; set; }
    public string ConnectionString { get; set; }
    public string InstanceName { get; set; }
    public int DefaultCacheTimeInMinutes { get; set; }
    public int SlidingExpirationInMinutes { get; set; }
    public int AbsoluteExpirationInMinutes { get; set; }
}
```

RedisCacheService.cs
```cs
using System.Text.Json;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Options;

public class RedisCacheService
{
    private readonly IDistributedCache _cache;
    private readonly RedisConfig _config;

    public RedisCacheService(
        IDistributedCache cache,
        IOptions<RedisConfig> config)
    {
        _cache = cache;
        _config = config.Value;
    }

    // 🔹 GET DATA
    public async Task<T?> GetAsync<T>(string key)
    {
        // 👉 If Redis disabled → skip
        if (!_config.IsEnabled)
            return default;

        var data = await _cache.GetStringAsync(key);

        if (string.IsNullOrEmpty(data))
            return default;

        try
        {
            return JsonSerializer.Deserialize<T>(data);
        }
        catch
        {
            return default;
        }
    }

    // 🔹 SET DATA
    public async Task SetAsync<T>(string key, T value)
    {
        // 👉 If Redis disabled → skip
        if (!_config.IsEnabled)
            return;

        if (value == null)
            return;

        var options = new DistributedCacheEntryOptions()
            .SetSlidingExpiration(TimeSpan.FromMinutes(_config.SlidingExpirationInMinutes))
            .SetAbsoluteExpiration(TimeSpan.FromMinutes(_config.AbsoluteExpirationInMinutes));

        var jsonData = JsonSerializer.Serialize(value);

        await _cache.SetStringAsync(key, jsonData, options);
    }

    // 🔹 REMOVE CACHE
    public async Task RemoveAsync(string key)
    {
        if (!_config.IsEnabled)
            return;

        await _cache.RemoveAsync(key);
    }

    // 🔹 OPTIONAL: REFRESH CACHE
    public async Task RefreshAsync(string key)
    {
        if (!_config.IsEnabled)
            return;

        await _cache.RefreshAsync(key);
    }
}
```

program.cs
``` cs
builder.Services.AddScoped<RedisCacheService>();
```

Use case : EmployeeController.cs
```cs
[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly RedisCacheService _cache;

    public EmployeeController(AppDbContext context, RedisCacheService cache)
    {
        _context = context;
        _cache = cache;
    }

    [HttpGet]
    public async Task<IActionResult> GetEmployees()
    {
        string cacheKey = "employees_all";

        try
        {
            // 🔹 Check Cache
            var cachedData = await _cache.GetAsync<List<Employee>>(cacheKey);

            if (cachedData != null)
            {
                return Ok(cachedData);
            }

            // 🔹 Get from DB
            var data = await _context.Employees
                                     .AsNoTracking()   // 🔥 performance
                                     .ToListAsync();

            // 🔹 Store in Cache
            await _cache.SetAsync(cacheKey, data);

            return Ok(data);
        }
        catch
        {
            // 🔹 Fallback to DB if Redis fails
            var data = await _context.Employees
                                     .AsNoTracking()
                                     .ToListAsync();

            return Ok(data);
        }
    }
    [HttpPost]
    public async Task<IActionResult> Create(Employee emp)
    {
        _context.Employees.Add(emp);
        await _context.SaveChangesAsync();

        // 🔥 Clear cache after insert
        await _cache.RemoveAsync("employees_all");

        return Ok(emp);
    }
}
```

```
Request → Controller → Check Redis
           ↓
        Found → Return data
           ↓
        Not Found → DB → Save in Redis → Return
```

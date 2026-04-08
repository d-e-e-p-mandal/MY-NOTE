
### Method 1 : Direct Use


```cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Options;
using System.Text.Json;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IDistributedCache _cache;
    private readonly RedisConfig _config;

    public EmployeeController(
        AppDbContext context,
        IDistributedCache cache,
        IOptions<RedisConfig> config)
    {
        _context = context;
        _cache = cache;
        _config = config.Value;
    }

    [HttpGet]
    public async Task<IActionResult> GetEmployees()
    {
        string cacheKey = $"{_config.InstanceName}employees";

        // 🔹 If Redis OFF → DB
        if (!_config.IsEnabled)
        {
            var dbData = await _context.Employees
                                      .AsNoTracking()
                                      .ToListAsync();

            return Ok(dbData);
        }

        // 🔹 Get from Cache
        var cachedData = await _cache.GetStringAsync(cacheKey);

        if (!string.IsNullOrEmpty(cachedData))
        {
            var result = JsonSerializer.Deserialize<List<Employee>>(cachedData);
            return Ok(result);
        }

        // 🔹 Get from DB
        var data = await _context.Employees
                                 .AsNoTracking()
                                 .ToListAsync();

        // 🔥 CACHE OPTIONS (3 TYPES)

        var options = new DistributedCacheEntryOptions()

            // ✅ WORKING (DEFAULT TIME)
            .SetAbsoluteExpiration(
                TimeSpan.FromMinutes(_config.DefaultCacheTimeInMinutes))

            // ❌ COMMENTED (SLIDING)
            //.SetSlidingExpiration(
            //    TimeSpan.FromMinutes(_config.SlidingExpirationInMinutes))

            // ❌ COMMENTED (ABSOLUTE MAX LIMIT)
            //.SetAbsoluteExpiration(
            //    TimeSpan.FromMinutes(_config.AbsoluteExpirationInMinutes))
            ;

        // 🔹 Store in Redis
        var jsonData = JsonSerializer.Serialize(data);
        await _cache.SetStringAsync(cacheKey, jsonData, options);

        return Ok(data);
    }
}
```
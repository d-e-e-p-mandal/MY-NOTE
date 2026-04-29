## Redis Implementation :

**File : app.setting.json**
```json
{
  "Redis": {
  "IsEnabled": true,
  "ConnectionString": "localhost:6379",
  "InstanceName": "MyApp_",
  "DefaultCacheTimeInMinutes": 5,
  "SlidingExpirationInMinutes": 5,
  "AbsoluteExpirationInMinutes": 10
    }
}
```

program.cs
```cs
// 🔹 Bind Config Sections
builder.Services.Configure<RedisConfig>(
    builder.Configuration.GetSection("Redis"));

// 🔹 Redis Cache
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration["Redis:ConnectionString"];
    options.InstanceName = builder.Configuration["Redis:InstanceName"];
});
```

You’re right 👍 — your list is good, but JSON-related attributes are missing.
These are very important for Web API (model binding + serialization).

I’ll add ALL JSON attributes + complete list (clean + corrected) 👇

⸻

📘 COMPLETE DATA ANNOTATIONS + JSON ATTRIBUTES

⸻

🔹 1. CLASS LEVEL

[Table("Name")]        // table name in DB
[Keyless]              // no primary key (views / read-only)


⸻

🔹 2. PROPERTY LEVEL (CORE)

[Key]                  // primary key
[Required]             // cannot be null
[Range(min, max)]      // numeric range
[StringLength(n)]      // max/min string length
[MaxLength(n)]         // max length
[MinLength(n)]         // min length
[EmailAddress]         // valid email


⸻

🔹 3. VALIDATION ATTRIBUTES

[Phone]                        // valid phone
[Url]                          // valid URL
[Compare("Property")]          // compare fields
[RegularExpression("pattern")] // custom regex validation
[DataType(DataType.Password)]  // UI type (password, date, etc.)


⸻

🔹 4. DATABASE / SCHEMA

using System.ComponentModel.DataAnnotations.Schema;

[Column("Name")]                      // column name
[NotMapped]                          // ignore property
[ForeignKey("Name")]                 // define FK
[DatabaseGenerated(DatabaseGeneratedOption.Identity)] // auto increment


⸻

🔹 5. DISPLAY / UI

[Display(Name = "Text")]     // display name
[DisplayFormat]              // format output
[ScaffoldColumn(false)]      // hide in UI


⸻

🔹 6. ADVANCED

[Timestamp]          // row version (concurrency)
[ConcurrencyCheck]   // prevent update conflicts
[BindNever]          // ignore in model binding
[BindRequired]       // must be provided


⸻

🔥 🔹 7. JSON ATTRIBUTES (IMPORTANT FOR WEB API)

👉 Namespace:

using System.Text.Json.Serialization;


⸻

🧾 JSON ATTRIBUTES

[JsonPropertyName("name")]  
// change JSON property name

[JsonIgnore]  
// ignore property in JSON (not sent to client)

[JsonInclude]  
// include private property in JSON

[JsonConverter(typeof(MyConverter))]  
// custom conversion logic

[JsonNumberHandling(JsonNumberHandling.AllowReadingFromString)]  
// allow number as string

[JsonPropertyOrder(1)]  
// order of JSON properties


⸻

🔥 FULL EXAMPLE (IMPORTANT)

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

[Table("Employees")]
public class Employee
{
    [Key]
    public int Id { get; set; }

    [Required]
    [JsonPropertyName("employee_name")]  // rename in JSON
    public string Name { get; set; }

    [Range(1000, 100000)]
    public int Salary { get; set; }

    [JsonIgnore]   // not returned in API
    public string InternalCode { get; set; }

    [NotMapped]
    public string TempData { get; set; }
}


⸻

🎯 FINAL SUMMARY

DataAnnotations → validation  
Schema → database mapping  
JSON attributes → API response/request control  


⸻

💡 INTERVIEW LINE

“In ASP.NET Core, DataAnnotations handle validation, Schema attributes control database mapping, and Json attributes control serialization behavior in Web APIs.”

⸻

🚀 NEXT STEP

If you want:
👉 I can show difference between JsonPropertyName vs Column (very confusing interview question 🔥)
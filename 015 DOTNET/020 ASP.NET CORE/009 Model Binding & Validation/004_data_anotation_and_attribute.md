## Data Annotations and Attribute

Definition : Attributes used to: validate and control data

Example Model
```cs
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema; //Database Mapping 
public class Employee
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Range(1000, 100000)]
    public int Salary { get; set; }
    [EmailAddress]
    public string Email { get; set; }
}
```
⸻

##### Attributes

Attribute : Use


1. CLASS LEVEL ATTRIBUTES

🧾 [Table("Name")] : Defines table name in database

🧾 [Keyless] : Entity has no primary key (used for views / read-only)

2. PROPERTY LEVEL : Written above properties

🧾 [Key] : Defines primary key

🧾 [Required] : Field cannot be null or empty

🧾 [Range(min, max)] : Value must be within range

🧾 [StringLength(n)] : Sets max (and optional min) length

🧾 [MaxLength(n)] : Maximum allowed length

🧾 [MinLength(n)] : Minimum required length

🧾 [EmailAddress] : Valid email format

3. VALIDATION ATTRIBUTES (IMPORTANT)

🧾 [Phone] : Valid phone number

🧾 [Url] : Valid URL format

🧾 [Compare("Property")] : Compare two fields (e.g., password confirm)

🧾 [RegularExpression("pattern")] : Custom validation using regex

🧾 [DataType(DataType.Password)] : Specifies data type (UI purpose)

4. DATABASE / SCHEMA ATTRIBUTES

Namespace:
```cs
using System.ComponentModel.DataAnnotations.Schema;
```

🧾 [Column("Name")] : Set column name

🧾 [NotMapped] : Ignore property (not stored in DB)

🧾 [ForeignKey("Name")] : Define foreign key relationship

🧾 [DatabaseGenerated(DatabaseGeneratedOption.Identity)] : Auto-generated value (auto increment)


5. DISPLAY / UI ATTRIBUTES

🧾 [Display(Name = "Text")] : Custom display name

🧾 [DisplayFormat] : Format output

🧾 [ScaffoldColumn(false)] : Hide field in UI

6. ADVANCED ATTRIBUTES

🧾 [Timestamp] : Used for concurrency (row version)

🧾 [ConcurrencyCheck] : Prevent multiple updates conflict

🧾 [BindNever] : Prevent model binding

🧾 [BindRequired] : Must be provided in request

**Class Level:**
  Table, Keyless
**Property Level:**
  Key, Required, Range, Column, ForeignKey, etc.


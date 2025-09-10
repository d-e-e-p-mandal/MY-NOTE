Here’s a clean and organized SQL Data Types note for study or reference purposes:

⸻

Here’s your SQL Data Types note with the ranges added for each relevant data type (especially numeric and date types). This makes it a more complete and practical reference.

⸻

📘 SQL Data Types (with Ranges)

SQL data types define the kind of value a column can hold. Ranges may vary slightly between databases, but standard/common ones are listed below.

⸻

🔢 Numeric Data Types

Data Type					Description	Typical 					Range (MySQL)
TINYINT						Very small integer				-128 to 127 (signed) or 0 to 255 (unsigned)
SMALLINT					Small integer					-32,768 to 32,767 or 0 to 65,535
MEDIUMINT					Medium-sized integer (MySQL)	-8,388,608 to 8,388,607
INT / INTEGER				Standard integer				-2,147,483,648 to 2,147,483,647 or 0 to 4,294,967,295
BIGINT						Large integer					-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
DECIMAL(p,s) / NUMERIC(p,s)	Exact numeric with precision	Up to 65 digits, p = precision, s = scale (MySQL)
FLOAT(p)					Approximate floating-point number	4 bytes, approx. ±1.5e−45 to ±3.4e+38 (float precision)
REAL	Approximate, lower precision float	Similar to FLOAT
DOUBLE PRECISION / DOUBLE	Higher precision float	8 bytes, approx. ±5.0e−324 to ±1.7e+308


⸻

🔤 String (Character) Data Types

Data Type					Description				Max Length
CHAR(n)						Fixed-length string		Up to 255 characters
VARCHAR(n)					Variable-length string	Up to 65,535 bytes (depends on charset & row size)
TEXT						Large text				Up to 65,535 characters
TINYTEXT					Very small text			Up to 255 characters
MEDIUMTEXT					Medium-sized text		Up to 16,777,215 characters
LONGTEXT					Very large text			Up to 4,294,967,295 characters


⸻

📅 Date & Time Data Types

Data Type				Description						Range
DATE					Stores date (YYYY-MM-DD)		1000-01-01 to 9999-12-31
TIME					Stores time (HH:MM:SS)			-838:59:59 to 838:59:59
DATETIME				Date and time					1000-01-01 00:00:00 to 9999-12-31 23:59:59
TIMESTAMP				Date and time (auto-update)		1970-01-01 00:00:01 UTC to 2038-01-19 03:14:07 UTC
YEAR					Year (2-digit/4-digit)			1901 to 2155 (MySQL)


⸻

🧮 Boolean Type

Data Type	Description	Range / Notes
BOOLEAN / BOOL	Stores TRUE or FALSE	Alias for TINYINT(1) in MySQL (0 = false, 1 = true)


⸻

📦 Binary Data Types

Data Type					Description					Max Size
BINARY(n)					Fixed-length binary			Up to 255 bytes
VARBINARY(n)				Variable-length binary		Up to 65,535 bytes
BLOB						Binary Large Object			Up to 65,535 bytes
TINYBLOB					Very small BLOB				Up to 255 bytes
MEDIUMBLOB					Medium-size BLOB			Up to 16 MB (16,777,215 bytes)
LONGBLOB					Very large BLOB				Up to 4 GB (4,294,967,295 bytes)


⸻

Empty : Initilize wit :  NULL
.......................

🔧 Miscellaneous (Vendor-Specific)

Data Type	Description	Notes
ENUM	String with predefined values	Up to 65,535 elements (MySQL)
SET	Multiple predefined values (MySQL)	Max 64 members
JSON	Stores JSON formatted data	Supported in MySQL & PostgreSQL
UUID	Universally Unique Identifier	16 bytes (128-bit)
XML	XML formatted text (SQL Server)	Variable-length


⸻

✨ Tips for Choosing Data Types
	•	✅ Use the smallest appropriate type for performance.
	•	✅ Avoid floating-point types for money; use DECIMAL(p,s) instead.
	•	✅ Always define constraints like NOT NULL, DEFAULT, and CHECK.

⸻

//
📘 What is UNSIGNED in SQL?

In SQL, especially in MySQL, the keyword UNSIGNED is used with numeric data types to indicate that only non-negative values (0 and positive numbers) are allowed.

⸻

✅ Why Use UNSIGNED?
	•	By default, integer types are signed, meaning they can store both negative and positive values.
	•	When you use UNSIGNED, the storage range doubles on the positive side and removes the negative range.
	•	This is useful for values that should never be negative (e.g., age, quantity, IDs).

⸻

📊 Example: INT vs UNSIGNED INT

Type	Range
INT	-2,147,483,648 to 2,147,483,647
UNSIGNED INT	0 to 4,294,967,295


⸻

🛠️ Syntax

CREATE TABLE users (
    user_id INT UNSIGNED PRIMARY KEY,
    age TINYINT UNSIGNED,
    points BIGINT UNSIGNED DEFAULT 0
);

	•	user_id cannot be negative.
	•	age is stored as a small positive integer.
	•	points defaults to 0 and cannot be negative.

⸻

🔥 Example Inserting Data

INSERT INTO users (user_id, age, points) VALUES (1, 25, 500);

⚠️ If You Try Negative with UNSIGNED

INSERT INTO users (user_id, age) VALUES (-1, 20);
-- ❌ Error: Out of range value for column 'user_id'


⸻

📝 Summary

Keyword	Effect
UNSIGNED	Prevents negative values; increases positive range
Used With	TINYINT, SMALLINT, INT, BIGINT, FLOAT, etc.


⸻


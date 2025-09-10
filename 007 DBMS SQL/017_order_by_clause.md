Order By Clause :
    .................
        To sort in ascending (ASC) or descending order (DESC)

        SELECT col1, col2 FROM table_name
        ORDER BY col_name(s) ASC;

        Example :
                SELECT * FROM Student
                ORDER BY st_name DESC;

    
    Use LIMIT :
    ...........
                SELECT * FROM Student
                ORDER BY marks DESC
                LIMIT 3;

    Use OFFSET :
    ............
                SELECT * FROM Student
                ORDER BY marks DESC
                LIMIT 3 OFFSET 2;  -- 3rd highest




//

Ah! You now want examples and syntax for SQL keywords like AS, ON, and other similar SQL clauses (used in joins, aliases, grouping, etc.) — not just logical operators like IN or OR.

Here’s a full list of such keywords with syntax and one-line examples:

⸻

🔹 1. AS – Alias for column or table

Syntax:

SELECT column_name AS alias_name
FROM table_name;

Example:

SELECT name AS student_name FROM Students;

Table Alias Example:

SELECT s.name FROM Students AS s;


⸻

🔹 2. ON – Join condition

Syntax:

SELECT * FROM table1
JOIN table2
ON table1.id = table2.id;

Example:

SELECT * FROM Students s
JOIN Library l ON s.id = l.st_id;


⸻

🔹 3. USING – Join on a common column

Syntax:

SELECT * FROM table1
JOIN table2 USING (common_column);

Example:

SELECT * FROM Students JOIN Library USING (id);


⸻

🔹 4. GROUP BY – Group rows by column

Syntax:

SELECT column, COUNT(*) FROM table
GROUP BY column;

Example:

SELECT city, COUNT(*) FROM Students GROUP BY city;


⸻

🔹 5. ORDER BY – Sort result

Syntax:

SELECT * FROM table
ORDER BY column [ASC|DESC];

Example:

SELECT * FROM Students ORDER BY name ASC;


⸻

🔹 6. HAVING – Filter groups (after GROUP BY)

Syntax:

SELECT column, COUNT(*) FROM table
GROUP BY column
HAVING COUNT(*) > value;

Example:

SELECT city, COUNT(*) FROM Students GROUP BY city HAVING COUNT(*) > 2;


⸻

🔹 7. DISTINCT – Remove duplicates

Syntax:

SELECT DISTINCT column FROM table;

Example:

SELECT DISTINCT city FROM Students;


⸻

🔹 8. LIMIT – Restrict result count

Syntax:

SELECT * FROM table
LIMIT number;

Example:

SELECT * FROM Students LIMIT 5;


⸻

🔹 9. OFFSET – Skip rows before starting return

Syntax:

SELECT * FROM table
LIMIT n OFFSET m;

Example:

SELECT * FROM Students LIMIT 3 OFFSET 2;


⸻

🔹 10. UNION – Combine results from two SELECTs

Syntax:

SELECT column FROM table1
UNION
SELECT column FROM table2;

Example:

SELECT city FROM Students
UNION
SELECT city FROM Teachers;


⸻

✅ Summary Table

Keyword	Usage	Example
AS	Alias for column or table	SELECT name AS student_name
ON	Join condition	JOIN Library ON s.id = l.st_id
USING	Join using same column	JOIN Library USING (id)
GROUP BY	Grouping rows	GROUP BY city
HAVING	Filter after grouping	HAVING COUNT(*) > 1
ORDER BY	Sort output	ORDER BY marks DESC
DISTINCT	Remove duplicates	SELECT DISTINCT city
LIMIT	Limit number of rows	LIMIT 5
OFFSET	Skip rows	OFFSET 3
UNION	Combine results	SELECT ... UNION SELECT ...


⸻

Let me know if you want this turned into a one-page revision sheet, PDF, or interactive SQL playground suggestion!
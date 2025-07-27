Perfect! Here’s a complete list of SQL conditional operators like IN and OR, including syntax + one-line examples for each:

⸻

✅ IN

Syntax:

column IN (value1, value2, ...)

Example:

SELECT * FROM Students WHERE city IN ('Delhi', 'Kolkata');


⸻

✅ NOT IN

Syntax:

column NOT IN (value1, value2, ...)

Example:

SELECT * FROM Students WHERE id NOT IN (1, 2, 3);


⸻

✅ OR

Syntax:

condition1 OR condition2

Example:

SELECT * FROM Students WHERE name = 'Rohit' OR city = 'Delhi';


⸻

✅ AND

Syntax:

condition1 AND condition2

Example:

SELECT * FROM Students WHERE name = 'Rohit' AND city = 'Delhi';


⸻

✅ BETWEEN ... AND

Syntax:

column BETWEEN value1 AND value2

Example:

SELECT * FROM Students WHERE id BETWEEN 5 AND 10;


⸻

✅ LIKE

Syntax:

column LIKE 'pattern'

Example:

SELECT * FROM Students WHERE name LIKE 'A%'; -- name starts with A


⸻

✅ NOT LIKE

Syntax:

column NOT LIKE 'pattern'

Example:

SELECT * FROM Students WHERE name NOT LIKE '%a';


⸻

✅ IS NULL

Syntax:

column IS NULL

Example:

SELECT * FROM Students WHERE father_name IS NULL;


⸻

✅ IS NOT NULL

Syntax:

column IS NOT NULL

Example:

SELECT * FROM Students WHERE father_name IS NOT NULL;


⸻

✅ EXISTS

Syntax:

EXISTS (subquery)

Example:

SELECT * FROM Students WHERE EXISTS (
  SELECT 1 FROM Library WHERE Library.st_id = Students.id
);


⸻

✅ Comparison Operators

Operator	Syntax Example	Description
=	id = 5	Equal to
!= / <>	name <> 'Amit'	Not equal to
>	marks > 90	Greater than
<	marks < 60	Less than
>=	marks >= 75	Greater than or equal
<=	marks <= 40	Less than or equal


⸻

✅ ALL / ANY

Syntax:

column operator ALL (subquery)
column operator ANY (subquery)

Example:

SELECT * FROM Students
WHERE marks > ALL (SELECT marks FROM Students WHERE city = 'Kolkata');


⸻

Let me know if you want this as a printable cheat sheet PDF or practice questions for each!
⸻

✅ Summary Table:

Operator	Meaning
IN	Matches any value in a list
OR	At least one condition must be true
AND	All conditions must be true
LIKE	Pattern matching
BETWEEN	Range check
IS NULL	Value is null
EXISTS	Checks subquery result exists
=, !=, <, >	Comparison operators


⸻

Let me know if you want:
	•	Real table practice queries
	•	JOIN + IN use cases
	•	LIKE pattern cheatsheet
	•	Interactive SQL playground suggestions
AS :
....
    SELECT * 
    FROM StudentDetails as s
    LEFT JOIN Student as d
    ON s.name = d.name;

ON :
....
    SELECT *
    FROM Student
    INNER JOIN StudentDetails
    ON Student.name = StudentDetails.name;


IN :
....
SELECT column1, column2, ...
FROM table_name
WHERE column_name IN (value1, value2, ...);

-- Select students who are from Kolkata or Delhi
SELECT *
FROM Students
WHERE city IN ('Kolkata', 'Delhi');


NOT IN :
.........
SELECT * FROM Students
WHERE city NOT IN ('Kolkata', 'Delhi');


OR :
....
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2;

SELECT *
FROM Students
WHERE id = 2 OR id = 4 OR id = 6;
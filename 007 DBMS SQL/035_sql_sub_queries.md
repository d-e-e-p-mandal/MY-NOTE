SQL Sub Queries :
.................

A Subquery or Inner query or a Nested query is a query is a query within another SQL query.
It involves 2 select statements.

1.SELECT
2.FROM
3.WHERE

Syntax :
........

SELECT column(s)
FROM table_name
WHERE col_name operator
(subquery);



Question : Sub Query : 
......................


Roll No     Name        marks
101         anil        78
102         bhumika     93
103         chetan      85
104         dhrub       96
105         emanuel     92
106         farah       82

Question : Sub Query : Example SELECT 
......................
Get names of all students who scored more than class average

1. Find the avg of class
2. Find the names of students with marks > avg

Ans :
.....
SELECT name, marks
FROM Students
WHERE marks > (SELECT AVG(marks) FROM Students);


Question : Sub Query : Example WHERE
......................
1. Print even roll number
2. Find Students, who marks is even number

ans :
......
1. 
    SELECT rollno
    FROM Students
    WHERE rollno % 2 = 0;


2.
    SELECT name
    FROM Students
    WHERE rollno IN(
        SELECT rollno 
        FROM students
        WHERE rollno % 2 = 0
    );


Question : Sub Query : Example FROM
....................................

1. Find the Students in Delhi.
2. Find max number in Delhi.

SELECT MAX(marks)
FROM (SELECT * FROM StudentS WHERE City = "Delhi") AS Temp;

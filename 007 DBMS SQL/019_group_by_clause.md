Group By Clause :
.................
    Group rows that have the same values into summary rows.
    If collects data from multiple records and groups the result by one or more column.

    *Generally we use group by with some aggregate function

    Example :
    .........
    ex - 1 :

        --Count number of student in each city
        SELECT city, count(name)
        FROM student
        GROUP BY city;

    ex - 2 :
    SELECT city,name,count(name)
    FROM Student
    GROUP BY city,name;

Having Clause :
...............
    Similar to Where i.e applies some condition on rows.
    Used when we want to apply any condition after grouping.


    Count number of student in each city where max marks cross 90.

    SELECT city, count(name)
    FROM Student
    GROUP BY city
    HAVING max(marks) > 90;
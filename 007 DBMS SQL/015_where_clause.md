Where Clause :
..............

To defeine some condition

SELECT col1, col2 FROM table_name
WHERE condition;

Example :
    SELECT * FROM student WHERE marks > 40;
    SELECT * FROM student WHERE city = "Mumbai";


Using Operators in Where :
..........................

    Arithmetic Operators : +(addition), -(subtraction), *(multiplication), /(division), %(modulus)
    ......................
    Example : 
                SELECT * FROM Student;
                WHERE marks + 10 > 50;

    Comparision Operators : = (equal to), != (equal to), >, >=, <, <=
    .......................
    Example :
                SELECT * FROM student WHERE city = "Mumbai";

    Logiacal Operators : AND, OR, NOT, IN, BETWEEN, ALL, LIKE, any
    ....................
    Example : 
            AND :
            .....
                SELECT * FROM student 
                WHERE city = "Mumbai" AND marks > 50;

            OR :
            ....
                SELECT * FROM student 
                WHERE city = "Mumbai" OR marks > 50;

            BETWEEN :
            .........
                SELECT * FROM student 
                WHERE marks BETWEEN 80 AND 90;
            IN :
            ....
                SELECT * FROM Student
                WHERE city IN ("Kolkata", "Delhi");

            NOT : (to negate the given condition)
            .....
                SELECT * FROM student
                WHERE city NOT IN ("Kolkata","Delhi");

    Bitwise Operators : & (Bitwise AND), | (Bitwise OR)
    ...................

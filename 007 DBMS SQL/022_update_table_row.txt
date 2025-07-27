Update Table ROW :
..................

UPDATE table_name
SET col1 = val1 col2 = val2
WHERE condition;

Example :
        EX - 1 :
            UPDATE Student
            SET marks = 86
            WHERE id = 3;
        
        EX - 2 :
            UPDATE Student
            SET marks = marks + 1
            WHERE id = 3;

SAFE MODE :
...........

ON  : SET SQL_SAFE_UPDATES = 0;
OFF : SET SQL_SAFE_UPDATES = 1;
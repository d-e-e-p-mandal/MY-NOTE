Left Exclusive Join : (only right)
.................................

SELECT * 
FROM table_A AS a
RIGHT JOIN table_B as b
ON a.col_name = b.col_name;
WHERE a.col_name IS NULL;
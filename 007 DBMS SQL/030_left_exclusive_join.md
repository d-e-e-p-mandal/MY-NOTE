Left Exclusive Join : (only left)
.................................

SELECT * 
FROM table_A AS a
LEFT JOIN table_B as b
ON a.col_name = b.col_name;
WHERE b.col_name IS NULL;
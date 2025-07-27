FULL JOIN :
...........

(Full join is not supported in MySQL. We can use it indirectly using left join and right join )


Full join :

SELECT 
    table1.column1,
    table1.column2,
    table2.column3,
    ...
FROM table1
FULL JOIN table2
ON table1.common_column = table2.common_column;


MySQL : (using union)
.....................
LEFT JOIN
UNION
RIGHT JOIN


Syntax :
........

SELECT * FROM table_A AS a
LEFT JOIN table_B AS b 
ON a.col_name =b.col_name;
UNION
SELECT * FROM table_A AS a
RIGHT JOIN table_B AS b 
ON a.col_name =b.col_name;


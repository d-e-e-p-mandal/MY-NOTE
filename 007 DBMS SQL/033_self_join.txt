SELF JOIN :
...........

It is a regular join but the table is joined with itself.


Syntax :
........

SELECT column(s)
FRON table as a
JOIN table as b
ON a.col_name = b.col_name;


Example :
.........

id     name     manager_id  
101    adam     103
102    bob      104
103    casey    null
104    donald   103

SELECT a.name as manager_name, b.name
FROM employee AS a
JOIN employee AS but
ON a.id = b.manager_id;

output:
.......
manager_name     name
casey            adam
casey            donald
donald           bob
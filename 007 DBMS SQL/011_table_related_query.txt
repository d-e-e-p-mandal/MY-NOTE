Show from table :
.................

SELECT * FROM Student;

Inseart Data in table : (custom order : it generally use for multiple row inseart)
..................................................................................
INSERT INTO table_name
(column_1_name, column_2_name)
VALUES
(data, "data"),
(data, "data");

Example : 
INSERT INTO Student
(st_id,st_name)
VALUES
(1, "Deep"),
(2, "Suman");


Inseart Data in table : (with maintain order : it generally use for single row inseart)
.......................................................................................
INSERT INTO table_name VALUES (data, "data");

Example : 
INSERT INTO Student VALUES (2, "Suman");





Inseart Data in table : (Only one col1)
..................................................................................
INSERT INTO table_name
(column_name)
VALUES
(data);   //other all asigined with null




Inseart Data in table : (Uses of NULL)
..................................................................................
INSERT INTO table_name
(column_1_name, column_2_name)
VALUES
(data, NULL);
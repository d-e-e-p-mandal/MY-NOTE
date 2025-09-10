Table related Queries :
.......................

Alter : To change the schema
.......

ADD Column :
............
ALTER TABLE table_name
ADD COLUMN column_name DATATYPE CONSTRAINTS;
Example : 
            ALTER TABLE Teacher
            ADD COLUMN Age INT DEFAULT 35;


DROP Column :
.............
ALTER TABLE table_name
DROP COLUMN column_name;


RENAME Table :
..............
ALTER TABLE table_name
RENAME TO new_table_name;


CHANGE Column (reanme) :
........................
ALTER TABLE table_name
CHANGE COLUMN old_col_name new_col_name new_datatype new_constraints


MODIFY Column (modify datatype / constarints) :
...............................................
ALTER TABLE table_name
MODIFY col_name new_datatype new_constraints



TRUNCATE : To delete all data of table
.......................................
TRUNCATE TABLE table_name;



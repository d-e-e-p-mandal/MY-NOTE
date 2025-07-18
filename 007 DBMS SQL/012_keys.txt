Keys : 
......

PRIMARY KEY :
.............
    It is a column ( or set of column) in a table that uniquely identifies each row.
(a unique id) There is only 1 PRIMARY KEY & it should be NOT NULL.

Method 1 :
CREATE TABLE Student(
	col_1 INT PRIMARY KEY,
    col_2 VARCHAR(50)
);

Exaple :
........
    CREATE TABLE Student(
	    st_id INT PRIMARY KEY,
        st_name VARCHAR(50) NOT NULL
    );

Method 2 : 
    CREATE TABLE Student(
	col2 INT,
    col1 VARCHAR(50)
    PRIMARY KEY(col1, col2)
);

Example :
    CREATE TABLE Student(
	    st_id INT,
        st_name VARCHAR(50) NOT NULL
        PRIMARY KEY(st_id, st_name)
    );



FOREIGN KEY :
.............
A foreign key is a column (or set of column) in a table that refers to the PRIMARY KEY;
There can be multiple FOREIGN KEY.
FOREIGN KEY can have duplicate & NULL valus

CREATE TABLE table_name (
    col1 INT,
    FOREIGN KEY (col1) REFERENCES another_table_name(PRIMARY KEY)  //PRIMARY key of reference table
);


Reverse ENGINEER (cmd + R): Use to show DATABASE
...........................

set port ; 3306
selet data base and continue 


Cascading for FOREIGN KEY :
...........................

On DELETE Cascade :
When we create a foregin key using this option, it deletes the referencing rows in the child table
when the referenced row is deleted in the parent table which has a primary key.

On UPDATE Cascade :
When we create aa foregin key using UPDATE CASCADE the referencing rows are updated in the child
table when the referenced row is updated in the parent table which has a primary key.


CREATE TABLE table_name (
    id INT PRIMARY KEY,
    courseID INT,
    FOREIGN KEY(courseID) REFERENCES course(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

Example :
    CREATE TABLE Teacher(
	    Id INT PRIMARY KEY,
        Name VARCHAR(50) NOT NULL,
        Dept_Id INT,
	    FOREIGN KEY (Dept_Id) REFERENCES Dept(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );
Constraints : 
.............

SQL Constraints are used to specify rules for data in a table.

NOT NULL : Columns can not have a null value
UNIQUE : all values in column are different
PRIMARY KEY : makes a column unique & not null but used only for one
FOREIGN KEY : prevent actions that would destroy links between tables

DEFAULT : sets the DEFAULT value of a column

    CREATE TABLE Student(
	    col1 INT PRIMARY KEY,
        col2 INT  DEFAULT 3000     // 3000 is the DEFAULT value
    );


CHECK : It can limit the valuse allowed in a column

CREATE TABLE table_name(
    col1 INT PRIMARY KEY,
    col2 VARCHAR(50),
    col3 INT,
    CONSTRAINTS col3 CHECK (col3>=condition AND col2=condition)
);

Example:
    CREATE TABLE table_name(
        id INT PRIMARY KEY,
        city VARCHAR(50),
        age INT,
        CONSTRAINTS col3_check CHECK (col3>=18 AND col2="Delhi")
    );


Method 2:
    CREATE TABLE table_name(
        col_name INT CHECK(col_name > condition)
    )

Example:   
    CREATE TABLE column_name(
        age INT CHECK (age>=18)
    )
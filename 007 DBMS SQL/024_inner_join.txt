Inner Join :
............

SELECT column(s)
FROM tableA 
INNER JOIN tableB
ON tableA.column_name = tableB.column_name;


Example :
.........
SELECT *
FROM Student
INNER JOIN StudentDetails
ON Student.id = StudentDetails.id;



OUTPUT :
........

SELECT *
FROM Student
INNER JOIN StudentDetails
ON Student.name = StudentDetails.name;


'1','101','Anjali','88','Kolkata','Anjali','Ramesh Sharma','Kolkata'
'2','102','Rohit','92','Delhi','Rohit','Suresh Mehra','Delhi'
'3','103','Sneha','86','Mumbai','Sneha','Rajiv Kapoor','Mumbai'
'4','104','Amit','85','Bangalore','Amit','Mahesh Verma','Bangalore'
 
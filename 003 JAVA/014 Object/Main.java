//1
/*
    1. Instatll java - jdk environment : 
    2. File saved as public className 
    3. Compile : (file directory) : javac fileName.java
        compiler create byte code file of all class : it can run any system where jdk installed 
    4. Run : java fileName
    5. only one public class is allowed per .java file in Java.
    6. Generally we write class Name in 1st letter capital letter
        1. If it is not public class then we can write 1st letter lower case (But don't write).
        2. If public class then 1st letter must be capital.

*/

class CreateClass {
    String name;
    int rollno;
}

public class Main{
    public static void main(String[] args){
        // create object
        CreateClass obj = new CreateClass();
        
        obj.name = "Deep Mandal";
        obj.rollno = 12;

        System.out.println("Name : " + obj.name + "\nRoll No : " + obj.rollno);
    }
}

/*OUTPUT : 
Name : Deep Mandal
Roll No : 12 */
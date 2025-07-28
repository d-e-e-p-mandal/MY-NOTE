// 3

class Student {
    String name;
    int rollno;

    // Parameterized constructor : 
    Student(String n, int r) { // with out this keyword we will not defined as same name
        this.name = n; 
        this.rollno = r;
    }
}

public class WithOutThisKeyWord {
    public static void main(String[] args) {
        Student obj = new Student("Deep Mandal", 12); // Constructor call

        System.out.println("Name : " + obj.name + "\nRoll No : " + obj.rollno);
    }
}

/*OUTPUT : 
Name : Deep Mandal
Roll No : 12 */

class Student {
    String name;
    int rollno;

    // Default constructor
    Student() {
        name = "Unknown";
        rollno = 0;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();  // calls default constructor
        System.out.println(s.name);     // Unknown
        System.out.println(s.rollno);   // 0
    }
}
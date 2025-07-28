/*
✅ Why use this keyword?

When parameter names and instance variable names are the same, this is used to refer to the current object’s instance variable.
*/

class Student {
    String name;
    int rollno;

    // Parameterized constructor using 'this'
    Student(String name, int rollno) {
        this.name = name;       // 'this.name' refers to the instance variable
        this.rollno = rollno;   // 'rollno' on right is the parameter
    }

    void display() {
        System.out.println("Name: " + this.name);
        System.out.println("Roll No: " + this.rollno);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Deep Mandal", 101);
        s1.display();

    }
}

/* OUTPUT :
Name: Deep Mandal
Roll No: 101
*/
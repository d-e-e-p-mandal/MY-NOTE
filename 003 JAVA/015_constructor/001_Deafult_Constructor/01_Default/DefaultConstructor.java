// 2
class Student {
    String name;
    int rollno;
}

public class DefaultConstructor {
    public static void main(String[] args) {
        Student obj = new Student();  // Works fine
        System.out.println(obj.name); // null
        System.out.println(obj.rollno); // 0
    }
}

/* Output :
null
0
*/
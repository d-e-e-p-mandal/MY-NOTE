// 2
/*
✅ Object:

Used to create individual instances of a class with separate data.

✅ Static:

Used to define class-level members that are shared by all objects.
*/

class A {
    static int x = 10; // Class attribute (static)
}

class B {
    int y = 20; // Instance attribute (non-static)
}

public class Main {
    public static void main(String[] args) {
        System.out.println(A.x);       // Accessing static variable directly using class name
        B obj = new B();
        System.out.println(obj.y);     // Accessing non-static variable through object
    }
}
/* OUTPUT :
10
20
*/
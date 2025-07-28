// 3
class MyClass {
    final int x = 100; // final variable
}

public class FinalExample {
    public static void main(String[] args) {
        MyClass obj = new MyClass();

        // obj.x = 200; // ❌ Error: cannot assign a value to final variable 'x'
        System.out.println("Value of x: " + obj.x);
    }
}

/*OUTPUT : Value of x: 100 */
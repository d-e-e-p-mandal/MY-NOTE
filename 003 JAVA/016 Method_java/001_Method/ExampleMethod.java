// 1
/*
✅ greet(); — No object needed

Because it’s called from another non-static method in the same class, so the object (this) already exists.

⸻

✅ obj.callMethod(); — Object needed

Because main() is static and cannot directly access non-static methods, so we must create an object.

*/
class ExampleMethod {
    void greet() {
        System.out.println("Hello from greet() method");
    }

    void callMethod() {
        greet(); // ✅ Calling method from same class without using dot
    }

    public static void main(String[] args) {
        ExampleMethod obj = new ExampleMethod();
        obj.callMethod();   // ✅ Calling using dot: object.method()
    }
}

/* Hello from greet() method */
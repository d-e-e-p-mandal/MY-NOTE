// 2
/*
✅ Static Method:

Called without an object because it belongs to the class.

✅ Non-Static Method:

Called using an object because it belongs to an instance.
*/

class StaticAndNonStaticMethod {

    // Static method
    static void staticMethod() {
        System.out.println("This is a static method.");
    }

    // Non-static (instance) method
    void nonStaticMethod() {
        System.out.println("This is a non-static method.");
    }

    public static void main(String[] args) {
        // Calling static method directly (no object needed)
        staticMethod();

        // Calling non-static method using an object
        StaticAndNonStaticMethod obj = new StaticAndNonStaticMethod();
        obj.nonStaticMethod();
    }
}

/*OUTPUT :
This is a static method.
This is a non-static method.
*/
✅ Static Inner Class in Java — Full Notes

⸻

🔹 What is a Static Inner Class?

👉 A static inner class (also called static nested class) is a class defined inside another class with the static keyword.

class Outer {
    static class Inner {
        void show() {
            System.out.println("Inside static inner class");
        }
    }
}

⸻

🔹 How to Create Object?

class Main {
    public static void main(String[] args) {
        Outer.Inner obj = new Outer.Inner(); // ✔ No Outer object needed
        obj.show();
    }
}

👉 Key point:
✔ No need to create Outer object
✔ Directly use Outer.Inner

⸻

🔥 Key Features

1. ✔ Can access only static members of outer class

class Outer {
    static int x = 10;
    int y = 20;
    static class Inner {
        void display() {
            System.out.println(x); // ✔ allowed
            // System.out.println(y); ❌ NOT allowed
        }
    }
}

⸻

2. ✔ Can have static & non-static methods

static class Inner {
    static void staticMethod() {
        System.out.println("Static method");
    }
    void nonStaticMethod() {
        System.out.println("Non-static method");
    }
}

⸻

3. ✔ Acts like a normal class but scoped inside another class

👉 It is almost like:

class Inner { }

but just written inside Outer for grouping.

⸻

🔹 Full Example (Important)

class Outer {
    static int data = 100;
    static class Inner {
        void show() {
            System.out.println("Data: " + data);
        }
    }
}
public class Test {
    public static void main(String[] args) {
        Outer.Inner obj = new Outer.Inner();
        obj.show();
    }
}

⸻

🔹 Difference: Inner vs Static Inner

Feature	Inner Class	Static Inner Class
Needs outer object	✔ Yes	❌ No
Access outer non-static	✔ Yes	❌ No
Access outer static	✔ Yes	✔ Yes
Declaration	class Inner	static class Inner

⸻

🔹 When to use?

👉 Use static inner class when:

* Class is logically related to outer class
* Does not need outer object data
* Used for:
    * Helper classes
    * Builder pattern
    * Grouping classes

⸻

🔹 Real-life Example (Builder Pattern idea)

class User {
    String name;
    int age;
    static class Builder {
        private String name;
        private int age;
        Builder setName(String name) {
            this.name = name;
            return this;
        }
        Builder setAge(int age) {
            this.age = age;
            return this;
        }
        User build() {
            User u = new User();
            u.name = name;
            u.age = age;
            return u;
        }
    }
}

⸻

🧠 Interview One-Liner

👉 “A static inner class in Java is a nested class that can be instantiated without an outer class object and can access only static members of the outer class.”

⸻

⚠️ Common Mistakes

❌ Saying:

“Static class exists in Java”

✔ Correct:

“Java supports static nested classes, not static top-level classes”

⸻

⚡ Final Summary

* ✔ Declared using static class Inner
* ✔ No need of outer object
* ✔ Can access only static members of outer class
* ✔ Used for logical grouping

⸻

If you want next:

* 👉 inner class vs anonymous class
* 👉 inner class memory diagram (very helpful)
* 👉 Java vs C# static class comparison

Just tell 👍
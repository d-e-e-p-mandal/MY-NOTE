//A final method in Java is a method that cannot be overridden by any subclass.

// Parent class
class Animal {
    final void sound() {
        System.out.println("Animal makes sound");
    }
}

// Child class
class Dog extends Animal {
    // ❌ This would cause a compile-time error if uncommented
    // void sound() {
    //     System.out.println("Dog barks");
    // }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();  // Output: Animal makes sound
    }
}
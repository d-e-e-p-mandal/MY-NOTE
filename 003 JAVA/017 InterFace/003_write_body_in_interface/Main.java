/*
    use keyword :
    default :  No, we cannot write default methods in a class in Java. we can write only in interface
    static :
*/

interface Animal {
    // Abstract method
    public void sound();

    // Default method with body
    default void sleep() {
        System.out.println("Animal is sleeping");
    }

    // Static method with body
    static void info() {
        System.out.println("This is the Animal interface");
    }

    // Private method with body (Java 9+)
    private void helper() {
        System.out.println("Private helper method");
    }
}

// Dog implements only the abstract method
class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();     // Dog barks
        d.sleep();     // Animal is sleeping
        Animal.info(); // This is the Animal interface
    }
}

/* 
Dog barks
Animal is sleeping
This is the Animal interface
*/
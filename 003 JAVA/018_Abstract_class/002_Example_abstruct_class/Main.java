// Abstract class
abstract class Animal {
    String name;

    // Constructor
    Animal(String name) {
        this.name = name;
    }

    // Abstract method : we don't define body in abstruct method
    abstract void sound(); //class must be abstruct 

    // Concrete method : Body is defined
    void sleep() {
        System.out.println(name + " is sleeping...");
    }
}

// Subclass must override abstract method
class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    void sound() {
        System.out.println(name + " says: Woof!");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // Animal a = new Animal(); // ❌ Error: Cannot instantiate abstract class

        Dog d = new Dog("Bruno");
        d.sound();  // abstract method implementation
        d.sleep();  // inherited concrete method
    }
}

/* OUTPUT :
Bruno says: Woof!
Bruno is sleeping...
*/
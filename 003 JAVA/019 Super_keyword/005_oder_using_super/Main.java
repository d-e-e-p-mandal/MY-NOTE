// Parent class
class Animal {
    String type = "Animal";

    Animal() {
        System.out.println("Animal constructor called");
    }

    void display() {
        System.out.println("This is an Animal");
    }
}

// Child class
class Dog extends Animal {
    String type = "Dog";

    Dog() {
        super();  // Call parent constructor (optional but must be first if used)
        System.out.println("Dog constructor called");
    }

    void showType() {
        System.out.println("Child type: " + type);        // Dog
        System.out.println("Parent type: " + super.type); // Animal
    }

    void display() {
        super.display();  // Call parent class method
        System.out.println("This is a Dog");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();

        d.showType();   // Access variable from child and parent
        d.display();    // Call method from child and parent
    }
}

/* OUTPUT :
Animal constructor called
Dog constructor called
Child type: Dog
Parent type: Animal
This is an Animal
This is a Dog
*/
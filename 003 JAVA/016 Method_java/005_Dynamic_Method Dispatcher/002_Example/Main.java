class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a; // Superclass reference

        a = new Dog();   // Dog object
        a.sound();       // Output: Dog barks

        a = new Cat();   // Cat object
        a.sound();       // Output: Cat meows
    }
}

/*OUTPUT :
Dog barks
Cat meows
*/
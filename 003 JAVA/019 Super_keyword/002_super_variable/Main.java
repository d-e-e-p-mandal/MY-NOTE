class Animal {
    String name = "Animal";
}

class Dog extends Animal {
    String name = "Dog";

    void printName() {
        System.out.println(name);         // Dog
        System.out.println(super.name);   // Animal
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.printName();
    }
}
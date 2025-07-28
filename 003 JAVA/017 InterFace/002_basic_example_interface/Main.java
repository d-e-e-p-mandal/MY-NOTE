// Interface with abstract method
interface Animal {
    void sound();  // abstract method : don't write body interface
    //public abstract void sound(); //This line same as previous line : automatic abstruct

    // draw back : It need to define where implement the interface
    //void eat();
}

// Dog class implements Animal interface
class Dog implements Animal {
    public void sound() {
        System.out.println("Dog barks");
    }
}

// Cat class also implements Animal interface
class Cat implements Animal {
    public void sound() {
        System.out.println("Cat meows");
    }
}

// Main class to test
public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog();
        a1.sound();  // Output: Dog barks

        Animal a2 = new Cat();
        a2.sound();  // Output: Cat meows
    }
}

/* OUTPUT :
Dog barks
Cat meows
*/
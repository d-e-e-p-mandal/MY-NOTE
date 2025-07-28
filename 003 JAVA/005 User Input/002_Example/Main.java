import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // String input
        System.out.print("Enter your name: ");
        String name = sc.nextLine();  // Reads full line

        // Integer input
        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        // Float input
        System.out.print("Enter your weight: ");
        float weight = sc.nextFloat();

        // Char input
        System.out.print("Enter your grade: ");
        char grade = sc.next().charAt(0);  // Read first character

        // Boolean input
        System.out.print("Did you pass (true/false)? ");
        boolean passed = sc.nextBoolean();

        // Output
        System.out.println("\n--- Student Info ---");
        System.out.println("Name   : " + name);
        System.out.println("Age    : " + age);
        System.out.println("Weight : " + weight);
        System.out.println("Grade  : " + grade);
        System.out.println("Passed : " + passed);
    }
}
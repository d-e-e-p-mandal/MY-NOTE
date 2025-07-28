public class Main {
    public static void main(String[] args) {
        int a = 10, b = 5;

        // Arithmetic
        System.out.println("Add: " + (a + b));
        System.out.println("Sub: " + (a - b));
        System.out.println("Mul: " + (a * b));
        System.out.println("Div: " + (a / b));
        System.out.println("Mod: " + (a % b));

        // Relational
        System.out.println("a > b: " + (a > b));

        // Logical
        System.out.println("a > 0 && b > 0: " + (a > 0 && b > 0));

        // Assignment
        a += 3;  // a = a + 3
        System.out.println("a after += 3: " + a);

        // Ternary
        int max = (a > b) ? a : b;
        System.out.println("Max: " + max);
    }
}
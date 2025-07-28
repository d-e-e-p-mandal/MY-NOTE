public class Main {
    public static void main(String[] args) {
        int a = 10, b = 5, c = 2;

        // Precedence: * has higher precedence than +
        int result1 = a + b * c;
        System.out.println("a + b * c = " + result1);  // 10 + (5 * 2) = 20

        // Parentheses change the order of evaluation
        int result2 = (a + b) * c;
        System.out.println("(a + b) * c = " + result2);  // (10 + 5) * 2 = 30

        // Left-to-right associativity for arithmetic operators
        int result3 = a - b - c;
        System.out.println("a - b - c = " + result3);  // (10 - 5) - 2 = 3

        // Right-to-left associativity for assignment
        int x, y, z;
        x = y = z = 100;
        System.out.println("x = " + x + ", y = " + y + ", z = " + z); // All 100

        // Ternary operator (right to left)
        int max = (a > b) ? a : b;
        System.out.println("Max of a and b: " + max);  // 10

        // Logical operators
        boolean logic = a > b && b > c;
        System.out.println("a > b && b > c = " + logic);  // true
    }
}
public class Main {
    // Method with variable number of int arguments
    static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println("Sum of 2 numbers: " + sum(10, 20));           // 30
        System.out.println("Sum of 3 numbers: " + sum(1, 2, 3));          // 6
        System.out.println("Sum of 5 numbers: " + sum(5, 10, 15, 20, 25));// 75
        System.out.println("Sum of 0 numbers: " + sum());                 // 0
    }
}
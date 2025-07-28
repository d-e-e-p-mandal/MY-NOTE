//Runtime Error : (Logical error)

public class ArithmeticEx {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e);
        }
    }
}
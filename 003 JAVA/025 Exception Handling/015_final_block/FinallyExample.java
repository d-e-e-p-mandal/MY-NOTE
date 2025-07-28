/*The finally block always executes, whether an exception occurs or not.
It is used to write cleanup code (like closing files, releasing resources). */

public class FinallyExample {
    public static void main(String[] args) {
        try {
            int x = 10 / 0;  // will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Caught exception: " + e);
        } finally {
            System.out.println("This is the finally block.");
        }
    }
}
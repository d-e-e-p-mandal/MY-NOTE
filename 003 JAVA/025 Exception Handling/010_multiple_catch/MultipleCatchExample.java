public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            int[] arr = {10, 20, 30};
            System.out.println(arr[5]);  // May throw ArrayIndexOutOfBoundsException

            int result = 10 / 0;         // May throw ArithmeticException

        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught Array Index Exception: " + e);

        } catch (ArithmeticException e) {
            System.out.println("Caught Arithmetic Exception: " + e);

        } catch (Exception e) {
            System.out.println("Caught General Exception: " + e);
        }

        System.out.println("Program continues after catch blocks.");
    }
}
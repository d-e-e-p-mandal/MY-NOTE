// Step 1: Create custom exception class
class MyCustomException extends Exception {
    public MyCustomException(String message) {
        super(message);
    }
}

// Step 2: Use custom exception in code
public class CustomExceptionDemo {
    public static void checkAge(int age) throws MyCustomException {
        if (age < 18) {
            throw new MyCustomException("Age must be 18 or above.");
        } else {
            System.out.println("Access granted: Age is valid.");
        }
    }

    public static void main(String[] args) {
        try {
            checkAge(16); // This will throw exception
        } catch (MyCustomException e) {
            System.out.println("Custom Exception Caught: " + e.getMessage());
        }
    }
}
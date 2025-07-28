public class ClassNotFoundEx {
    public static void main(String[] args) {
        try {
            Class.forName("com.unknown.Demo");
        } catch (ClassNotFoundException e) {
            System.out.println("Caught: " + e);
        }
    }
}
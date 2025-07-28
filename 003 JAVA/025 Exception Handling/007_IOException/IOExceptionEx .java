import java.io.*;

public class IOExceptionEx {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("output.txt");
            fw.write("Hello Java");
            fw.close();
        } catch (IOException e) {
            System.out.println("Caught: " + e);
        }
    }
}
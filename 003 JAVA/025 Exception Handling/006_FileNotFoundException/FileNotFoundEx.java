import java.io.*;

public class FileNotFoundEx {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("nofile.txt");
        } catch (FileNotFoundException e) {
            System.out.println("Caught: " + e);
        }
    }
}
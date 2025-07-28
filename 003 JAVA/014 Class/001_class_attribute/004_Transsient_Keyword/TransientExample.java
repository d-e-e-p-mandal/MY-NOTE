// 4 : This is part of advance java
import java.io.*;

public class TransientExample implements Serializable {
    String username;
    transient String password; // This won't be saved during serialization

    TransientExample(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public static void main(String[] args) throws Exception {
        // Create an object with values
        TransientExample obj = new TransientExample("Deep", "secret");

        // Serialize the object to a file
        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("data.ser"));
        out.writeObject(obj);
        out.close();

        // Deserialize the object from the file
        ObjectInputStream in = new ObjectInputStream(new FileInputStream("data.ser"));
        TransientExample result = (TransientExample) in.readObject();
        in.close();

        // Display the values after deserialization
        System.out.println("Username: " + result.username); // Will print: Deep
        System.out.println("Password: " + result.password); // Will print: null
    }
}

/* OUTPUT : 
Username: Deep
Password: null
*/
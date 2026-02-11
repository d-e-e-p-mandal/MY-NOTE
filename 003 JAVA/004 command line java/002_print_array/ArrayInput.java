/*
Run : java ArrayInput 1 2 3 4                      
*/

public class ArrayInput {
    public static void main(String[] args) {
        // Create array to store input
        int[] arr = new int[args.length];

        // Convert String args to int
        for (int i = 0; i < args.length; i++) {
            arr[i] = Integer.parseInt(args[i]);
        }

        // Print the array
        System.out.println("Array elements:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}

/* OUTPUT :
Array elements:
1 2 3 4 
*/
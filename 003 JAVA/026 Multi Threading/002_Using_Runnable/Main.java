class Gun1 implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Gun1 fires bullet " + i);
        }
    }
}

class Gun2 implements Runnable {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println("Gun2 fires bullet " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(new Gun1());
        Thread t2 = new Thread(new Gun2());

        t1.start();
        t2.start();
    }
}
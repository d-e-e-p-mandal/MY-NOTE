class MyThread1 extends Thread {
    public void run() {
        System.out.println("Thread " + getName() + " is running...");
    }
}

class MyThread2 extends Thread {
    public void run() {
        System.out.println("Thread " + getName() + " is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1();
        MyThread2 t2 = new MyThread2();

        t1.setName("Shooter-1");
        t2.setName("Shooter-2");

        t1.start();
        t2.start();

        // Get thread names and IDs from main
        System.out.println("Thread Name: " + t1.getName() + ", ID: " + t1.getId());
        System.out.println("Thread Name: " + t2.getName() + ", ID: " + t2.getId());
    }
}

/* Another :
class MyTask implements Runnable {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyTask(), "Gun1");
        Thread t2 = new Thread(new MyTask(), "Gun2");

        t1.start();
        t2.start();

        // Print thread names and IDs from main
        System.out.println("Name: " + t1.getName() + ", ID: " + t1.getId());
        System.out.println("Name: " + t2.getName() + ", ID: " + t2.getId());
    }
}
*/
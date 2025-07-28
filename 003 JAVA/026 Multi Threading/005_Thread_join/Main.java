class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " - " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        MyThread t3 = new MyThread();

        t1.start();
        try {
            t1.join();  // Main thread waits for t1 to finish
        } catch (InterruptedException e) {
            System.out.println("Thread-1 was interrupted");
        }

        t2.start();  // Main does not wait for t2
        t3.start();  // Main does not wait for t3

        System.out.println("Main thread finished");
    }
}
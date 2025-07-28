class MyThread extends Thread {
    public void run() {
        System.out.println("Thread " + getName() + " with Priority: " + getPriority());
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        MyThread t3 = new MyThread();

        t1.setName("LowPriorityThread");
        t2.setName("NormalPriorityThread");
        t3.setName("HighPriorityThread");

        t1.setPriority(Thread.MIN_PRIORITY);    // Priority 1
        t2.setPriority(Thread.NORM_PRIORITY);   // Priority 5 (default)
        t3.setPriority(Thread.MAX_PRIORITY);    // Priority 10

        t1.start();
        t2.start();
        t3.start();
    }
}

/* 
Thread LowPriorityThread with Priority: 1
Thread HighPriorityThread with Priority: 10
Thread NormalPriorityThread with Priority: 5
*/
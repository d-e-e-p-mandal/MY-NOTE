/* Multi Threading : Multithreading allows multiple threads to run concurrently,
 enabling efficient and faster execution of tasks in a program.*/

import java.lang.*;
class MyThread1 extends Thread{
    public void run(){
        for(int i=0; i<50; i++){
            System.out.println(i);
        }
    }
}

class MyThread2 extends Thread{
    public void run(){
        for(int i=0; i<50; i++){
            System.out.println(i);
        }
    }
}

class Main{
    public static void main(String[] args){
        MyThread1 th1 = new MyThread1();
        MyThread2 th2 = new MyThread2();

        th1.start();
        th2.start();
    }
}


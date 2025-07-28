Sure! Here’s a detailed explanation of important Thread methods in Java:

⸻

🔹 1. start()
	•	Purpose: Starts a new thread.
	•	How it works: Internally calls run() method on a new call stack (not the current thread).
	•	Note: Never call run() directly; use start() to begin a new thread.

thread.start();


⸻

🔹 2. run()
	•	Purpose: Contains the code that the thread will execute.
	•	How it’s called: Automatically by start(), or manually (but then it runs in main thread).

public void run() {
    System.out.println("Running in thread");
}


⸻

🔹 3. sleep(milliseconds)
	•	Purpose: Temporarily pauses the thread.
	•	Throws: InterruptedException, so you must handle with try-catch.

try {
    Thread.sleep(1000); // sleeps for 1 second
} catch (InterruptedException e) {
    e.printStackTrace();
}


⸻

🔹 4. join()
	•	Purpose: Makes the current thread wait until the called thread finishes.

t1.join(); // Main thread waits for t1 to finish


⸻

🔹 5. setName(String name)
	•	Purpose: Sets a custom name for a thread.

thread.setName("WorkerThread");


⸻

🔹 6. getName()
	•	Purpose: Returns the name of the thread.

System.out.println(Thread.currentThread().getName());


⸻

🔹 7. getId()
	•	Purpose: Returns the unique ID of the thread.

System.out.println(Thread.currentThread().getId());


⸻

🔹 8. setPriority(int value)
	•	Range: 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY), default is 5.

thread.setPriority(8);


⸻

🔹 9. getPriority()
	•	Purpose: Returns the priority of the thread.

System.out.println(thread.getPriority());


⸻

🔹 10. isAlive()
	•	Purpose: Checks if the thread is still running.

if(thread.isAlive()) {
    System.out.println("Thread is still running");
}


⸻

🔹 11. interrupt()
	•	Purpose: Interrupts a thread that is sleeping or waiting.

thread.interrupt();


⸻

Would you like a full code demo using all of these methods in one place?
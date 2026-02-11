Sure! Here’s a clear and simple explanation of variables and data types in Java, with examples.

⸻

✅ 1. What is a Variable?

A variable is a container that holds data (value) during the execution of a program.

int age = 25;

	•	int → data type
	•	age → variable name
	•	25 → value assigned

⸻

✅ 2. Java Data Types

🔹 Primitive Data Types (built-in):
Data Type   Size        Range                                           Example
byte        1 byte      -128 to 127                                     byte a = 100;
short       2 bytes     -32,768 to 32,767                               short b = 10000;
int         4 bytes     -2,147,483,648 to 2,147,483,647                 int age = 25;
long        8 bytes     -9,223,372,036,854,775,808 to 9,223…            long salary = 123456L;
float       4 bytes     ~±3.4e−038 to ±3.4e+038 (7 decimal digits)      float pi = 3.14f;
double      8 bytes     ~±1.7e−308 to ±1.7e+308 (15 decimal digits)     double d = 9.81;
char        2 bytes     Unicode 0 to 65,535                             char grade = 'A';
boolean     1 bit*      true or false                                   boolean flag = true;



⸻

🔹 Non-Primitive Data Types:
	•	String (sequence of characters)
	•	Arrays, Classes, Interfaces, etc.

String name = "Deep Mandal";


⸻

✅ 3. Example Program with Variables and Data Types

public class Main {
    public static void main(String[] args) {
        int age = 20;
        float marks = 88.5f;
        char grade = 'A';
        boolean passed = true;
        String name = "Deep Mandal";

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);
        System.out.println("Grade: " + grade);
        System.out.println("Passed: " + passed);
    }
}


⸻

🖨️ Output:

Name: Deep Mandal
Age: 20
Marks: 88.5
Grade: A
Passed: true


⸻

Would you like examples for user input, type casting, or constants (final) next?
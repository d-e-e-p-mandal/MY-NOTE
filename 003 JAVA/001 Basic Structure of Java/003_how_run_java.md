### How to Run Java :
1. Instatll java - jdk environment : 
2. File saved as public className 
3. Compile : (file directory) : javac fileName.java
    -compiler create byte code file of all class : it can run any system where jdk installed 
4. Run : java fileName
5. only one public class is allowed per .java file in Java.
6. Generally we write class Name in 1st letter capital letter
    1. If it is not public class then we can write 1st letter lower case (But don't write).
    2. If public class then 1st letter must be capital.

### Without Package :
Compile :
```bash
javac Main.java
```
👉 This creates: Main.class

Run :
```bash
java Main
```


Run : Create Package
.....................
// package package_name;
Compile : 
```bash
javac -d . fileName.java
```
Compile all file :
```bash
Compile : javac -d . *.java
```
package create in another file(abc) :
....................................
Compile : javac -d abc *.java





# What is a package in Java?

A package is like a folder that groups related Java classes together.

`Example:`
Package name: com.example.utils

This means your class file belongs inside folders `com/example/utils`


## How to write a package in your Java file

```java
package com.example.utils;

public class MyClass {
    public void sayHello() {
        System.out.println("Hello from MyClass");
    }
}
```
- You save this file as:
- com/example/utils/MyClass.java

> (i.e., inside folders com/example/utils)

### Compiling with javac and creating package folders

##### Scenario 1: You have your file not inside folders, but with package declared.

```java
package com.example.utils;
```
```bash
javac -d . MyClass.java
```

Example:
-	File: MyClass.java in your current folder.
-	The file has this on top:

	•	-d . means: create folder structure starting from current directory.
	•	Compiler will create folders com/example/utils automatically.
	•	Compiled .class file will be in com/example/utils/MyClass.class

##### Scenario 2: Compile multiple files and put output inside a folder called abc

```bash
javac -d abc *.java
```
	•	This compiles all .java files in current folder.
	•	Creates package folders inside abc folder.
	•	So if a file had package com.example.utils, the compiled class goes to abc/com/example/utils/

> Create folder structre manually and run
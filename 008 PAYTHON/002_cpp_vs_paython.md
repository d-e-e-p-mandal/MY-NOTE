## Example Same Code in Paython and CPP :

### Paython Code :
```python
print("Hello World")
a = 10
b = 5
print(a + b)
```

### CPP Code :
```cpp
#include<iostream>

int main() {
    std::cout<<"Hello World"<<end;
    int a = 10;
    int b = 5;
    std::cout<< a+b<<endl;
    return 0;
}
```

## Output Comparison (new line) :
- #### In C++ :
    In the end of the print statement we need to mention "\n" to get the next print statement output in the new line. Else by default it will apppend the output in the same line itself.

- #### In Paython :
    After Print statement next print statement by default goes to the new line. No need to mention character "\n"


## Let's see how Compilation works :
- C++ Converts the program into Machine code at once.

- Compilation converts high-level code into machine through preprocessing, analysis, optimization, code generation, annd linking and this entire process happens at once.

## Let's see how Interpretation works ?
- Python first converts the code in .pyc file in the __pycache__folder. 

- .pyc files are compiled version of your pathon scripts having bytecode that can be executed by a pathon interpreter one line at a time.

- .pyc file generation enables faster execution by the paython interpreter.


## Errors in C++ Vs Paython :

- In C++ if there is any error, the code will not give any output rather throws error.

- In python if there is any error, the code will run just before the statement where the error was and then stop there only. But works
fine before the error statement.
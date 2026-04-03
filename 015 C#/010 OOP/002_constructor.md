## Constructor :
- It's a special method present under a class.
- It is responsible for initializing the variables of that class.
- The name of the Constructor method is exactly the same name of the class in which it was present.
- It is non-value returning method
- Each and every class requires this constructor if we want to create the instance of that class. (Default Constructor)

#### Implicitly Constructor :
- Implicityly defined constructors are **parameter-less** and these constructors are also known as default constructors.

#### Explicitly Defined Constructor :
- Implicitly defined constructor are public.
- We can also define a constructor under the class and if we define it we can call it as explicit constructor and explicit constructor can be parameter less or parameterized also.

Defining : Implicit or Explicit
Calling : Explicit

**Note :** If we do not define constructor then complier define implicit(default) constructor.

Structure :
```cs
[<modifiers(public)>]<ClassName>([<parameter list>]) {
    //statements
}
```
## Type of Constructor :
1. Default Constructor
2. Parameterized Constructor.
3. Copy Constructor
4. Static Constructor

#### Default Constructor :
- Can be defined by implicitly or excplicitly 

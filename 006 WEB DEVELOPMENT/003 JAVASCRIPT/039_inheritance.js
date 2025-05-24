// inheritance

class Parent{
    constructor(){
        console.log("Parent is called");
        
    }
    hello(){
        console.log("hello");
        
    }
}

class Child extends Parent {
    constructor(){
        super();   //if we called constructor we call parent class before using super keyword
        console.log("child class called");
        
    }
}

let ram = new Child();
ram.hello();
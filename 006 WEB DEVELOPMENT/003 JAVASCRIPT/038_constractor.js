// Class :

// class ia a program code template for creating objects.
// Those objects will have some state (variables) and some behaviour (fuctions) inside it.


class car{
    constructor(price){
        console.log("creating new object");
        this.price = price ;
    }
    start(){
        console.log("start");
        
    }
    stop(){
        console.log("stop");
        
    }

    setBrandName(brand){
        this.brandName = brand;
    }
}

let fortuner = new car(6000000);
fortuner.setBrandName("toyota");

console.log(fortuner);

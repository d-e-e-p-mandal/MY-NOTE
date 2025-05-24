// Class :

// class ia a program code template for creating objects.
// Those objects will have some state (variables) and some behaviour (fuctions) inside it.


class car{
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

let fortuner = new car();
fortuner.setBrandName("toyota");

console.log(fortuner);

//prototype
// A javaScript object is an entity having state and behavior (properties and method).
//JS objects have a special property called prototype.
// we cand set prototype using __proto--

const employee = {
    calcTax (){
        console.log("tax rate is 10%");
    }
};

const arjun ={
    salary : 50000,
};

const karn ={
    salary : 60000,
    calcTax (){
        console.log("tax rate is 20%"); // in karn its own fuction has priority
    }
};

arjun.__proto__ = employee;
karn.__proto__ = employee;
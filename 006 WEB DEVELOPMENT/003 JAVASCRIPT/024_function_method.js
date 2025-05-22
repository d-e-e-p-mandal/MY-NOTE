// Function and Method in JavaScript
function  myfun() {
    console.log("hlw world!");
}
myfun();//function call
myfun();//function call

//

// arrow function
const sum = (a,b) => {return a+b;};
console.log(sum(4,6));



//forEach : callback function
let arr10 = [1,2,3,4,5,6,8];
arr10.forEach(function printVal(val){
    console.log(val);
});

/*function printVal(val) {
    console.log(val);
}

let arr10 = [1, 2, 3, 4, 5, 6, 8];
arr10.forEach(printVal);
*/

//by default : val of array, index of array  and array itself
arr10.forEach((val,idx,array)=>{
    console.log(val,idx,array);
    
})
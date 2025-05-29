// one-by-one function call asynchronisation
 function asyncFunction1() {
    return new Promise((resolve,rejecet)=>{
        setTimeout(()=>{
            console.log("some data");
            resolve("success");
        },3000);
    });
}

function asyncFunction2() {
    return new Promise((resolve,rejecet)=>{
        setTimeout(()=>{
            console.log("some data");
            resolve("success");
        },3000);
    });
}

console.log("getting data 1");
let p1 = asyncFunction1();
p1.then((res)=>{
    console.log(res);
    console.log("getting data 2");
    asyncFunction2().then((res)=>{
        console.log(res);
        
    });
});


console.log("getting data 1");
asyncFunction2.then()

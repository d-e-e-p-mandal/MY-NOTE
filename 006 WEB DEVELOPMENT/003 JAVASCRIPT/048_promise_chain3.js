// priomise chain

function asyncFunction(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data);
            resolve("SUCESS");
        }, 3000);
    });
}

//fetch : 1st type
// console.log("data 1st time");
// asyncFunction(1).then((res) => {
//     console.log(res);
//     console.log("data 2nd time");
//     asyncFunction(2).then(() => {
//         console.log(res);
//     });
// });

//different type : success one time at end
console.log("data 1st time");
asyncFunction(1)
.then(()=>{
    console.log("data 2nd time");
    return asyncFunction(2);
})
.then(()=>{ 
    console.log("data 3rd time");
    return asyncFunction(3);
})
.then((res) =>{
    console.log(res); // success at the end 
});

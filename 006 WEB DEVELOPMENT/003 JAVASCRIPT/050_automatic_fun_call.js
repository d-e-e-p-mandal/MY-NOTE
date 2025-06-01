// IIFE : Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined


const getData = (data)=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data : " + data);
            resolve("sucess");
        },3000);
    });
}

(async function () {
    console.log("getting data 1st time :");
    await getData(11);
    console.log("getting data 2nd time :");
    await getData(33);
})();
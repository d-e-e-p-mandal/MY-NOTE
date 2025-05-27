/* Promises : 
    .then() & .catch()
*/

const getPromise = () =>{
    new Promise((resolve,reject) =>{
        console.log("I am promise");
        resolve("sucess");
    });
};

let promise  = getPromiseS();

//promise successful
promise.then((res) =>{
    console.log("Promise fullfilled",res);
});

//promise failed
promise.catch((err) =>{
    console.log("rejected", err);
    
});
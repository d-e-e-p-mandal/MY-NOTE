/* Promises : to resolve callback hell we use promises
    PROMISE IS FOR "EVENTUAL" completion of task. It is an object in JS.
    It is a solution to callback hell.

    Promise have 3 - stages :
    resolve , pending , rejected
*/

let promise = new Promise((resolve,reject) =>{ //Promise take to argument ,resolve and rejected are fuction provided by internally
    console.log("I am a promise.");
    resolve("Problem resolved ");// we can send message
    reject("Some error occured");
});

/* async-await :
    async function always returns a promise.
async function myFunction(){.....}
await pauses the execution of its srrounding async function until the promise is settled.
*/

 function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : "+data);
            resolve("success");
        }, 3000);
    });
}

// hlw();
// hlw();
// async function
async function fun() {
    console.log("getting data 1 :");
    await getData(10); //1st call
    console.log("getting data 2 :");
    await getData(23); //2nd call
}

fun();
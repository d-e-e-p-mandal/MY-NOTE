/* Callback Hell :
    Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)

    This style of programming becomes difficult t ounderstand & manage.
*/

function getData(data, getNextData) {
    // 3s delay
    setTimeout(() => {
        console.log(data);
        if(getNextData) //if exist for next, we must check otherwise error
            getNextData();      // calling getNextData as function, so we must defined getNextdata or pass function
    }, 3000);
}
//this is nested call, it call callback hell : also called pyramid doom

console.log("Getting data 1 with 3s delay : ");
getData(1,()=>{     //pass function
    console.log("Getting data 2 with 3s delay : ");
    getData(2,()=>{
        console.log("Getting data 3 with 3s delay : ");
        getData(3);
   }); 
});
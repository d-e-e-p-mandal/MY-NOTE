// priomise chain

function asyncFunction() {
    return new Promise((resolve,reject)={
        setTimeout(()=>{
            console.log("DATA FETCHING");
            console.log("SUCESS");
            
        }, 4000);
    });
}
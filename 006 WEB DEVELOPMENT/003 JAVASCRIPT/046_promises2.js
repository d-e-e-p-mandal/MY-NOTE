// It used in console to check promises
function getData(data,getNextData) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log(data);
            resolve("success");
            if(getNextData){
                getNextData();
            }
            
        }, 3000);
    });
}

getData(1);
getData(2);
getData(3);
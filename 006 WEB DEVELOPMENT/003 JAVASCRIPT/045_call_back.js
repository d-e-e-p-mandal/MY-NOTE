// only delay for 1st time
const getData = (data)=>{
    //3s delay
    setTimeout(() => {
        console.log(data);
        
    }, 3000);    
};

getData(1);
getData(2);
getData(3);
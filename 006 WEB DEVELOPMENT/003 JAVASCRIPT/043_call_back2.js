// same as before
function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}


calculator(1,2,(a,b)=>{
    console.log(a+b);
    
});
/* like function pointer */
function sum(a,b) {
    console.log(a+b);
}

function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}

calculator(1,5,sum);


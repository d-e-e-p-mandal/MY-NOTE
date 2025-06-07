const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const PI = 3.14;


let obj = {
    sum : sum,
    mul : mul,
    pi : PI,
};

module.exports = obj;


/* or : 
module.exports = {
    sum : sum,
    mul : mul,
    pi : PI,
};
 */
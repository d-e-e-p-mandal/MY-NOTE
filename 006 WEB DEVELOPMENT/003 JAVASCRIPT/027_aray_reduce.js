// reduce return one value
// it takes two value accumalator and current value
let arr = [1,2,3,4];
const sum = arr.reduce((res,cur)=>{
    return res+cur;
});
console.log(sum);

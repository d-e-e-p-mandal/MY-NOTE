
let arr = [10,20,30];
// push() : add at the end
arr.push(40);
console.log(arr[3]);

//pop() : remove from the end and return
console.log(arr.pop());
console.log(arr.pop());


//toString() : convert array to string
let marks = [40,23,56,45];
//marks.toString(); //methods return new value it does not change original
console.log(marks);
console.log(marks.toString());

//concat()
let newArr = arr.concat(marks);
console.log(newArr);

//unshift() : use to add begin in array
newArr.unshift(110);//110 will be 1st item
console.log(newArr);

//shift() : delete 1st item
console.log(newArr.shift());

//slice : return the part of array
console.log(newArr.slice(1,3)); //strat index, last index(before)

//splice() : change original array : add, remove, replace
let x = [1,2,3,4,5];
//splice(start index, delcount, newElement.....)
x.splice(2,2,101,102,103);
console.log(x);



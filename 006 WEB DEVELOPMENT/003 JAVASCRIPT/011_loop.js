// for loop
for (let i = 0; i < 5; i++) {
    console.log("For loop count:", i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log("While loop count:", i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log("Do-While loop count:", j);
    j++;
} while (j < 5);

// for of loop
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log("For...of loop:", fruit);
}

// for in loop
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log("For...in loop:", key, "=", person[key]);
}


// forEach

let arr10 = [1,2,3,4,5,6,8];
arr10.forEach(function printVal(val){
    console.log(val);
});

/*function printVal(val) {
    console.log(val);
}

let arr10 = [1, 2, 3, 4, 5, 6, 8];
arr10.forEach(printVal);
*/
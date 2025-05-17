// Primitive string
let str1 = "hello";

// String object
let str2 = new String("hello");

// typeof
console.log(typeof str1); // string
console.log(typeof str2); // object

// Using a string method

// .str1.toUpperCase  wiil return new value it does not cheange the original string
let upper1 = str1.toUpperCase(); // creates new primitive string
let upper2 = str2.toUpperCase(); // creates new primitive string

console.log(upper1); // HELLO
console.log(upper2); // HELLO

// Comparing values
console.log(str1 === "hello");       // true
console.log(str2 === "hello");       // false (object vs string)
console.log(str2.valueOf() === "hello"); // true

// Object-specific behavior
console.log(str2 instanceof String); // true
console.log(str1 instanceof String); // false
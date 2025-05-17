// instanceof in JavaScript
// ------------------------
// It checks whether an object is an instance of a particular class or constructor function

// Example 1: String object vs string primitive
let str1 = "hello";                 // primitive string
let str2 = new String("hello");     // String object

console.log("// String examples:");
console.log(str1 instanceof String); // false, because str1 is a primitive
console.log(str2 instanceof String); // true, because str2 is an object

// Example 2: Arrays
let arr = [1, 2, 3]; // Array is also an object

console.log("\n// Array examples:");
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true, because Array inherits from Object

// Example 3: Date object
let date = new Date();

console.log("\n// Date examples:");
console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true

// Example 4: Custom classes
class Animal {}
class Dog extends Animal {}

let d = new Dog();

console.log("\n// Custom class examples:");
console.log(d instanceof Dog);     // true
console.log(d instanceof Animal);  // true (because Dog inherits Animal)
console.log(d instanceof Object);  // true (all objects inherit Object)

// Example 5: Number object vs number primitive
let num1 = 42;                 // primitive number
let num2 = new Number(42);     // Number object

console.log("\n// Number examples:");
console.log(num1 instanceof Number); // false
console.log(num2 instanceof Number); // true

// Bonus: Checking if a function is an instance of Object or Function
function myFunc() {}

console.log("\n// Function example:");
console.log(myFunc instanceof Function); // true
console.log(myFunc instanceof Object);   // true (functions are objects too)

// Summary:
// - instanceof checks if an object inherits from a class/constructor
// - Works only on objects, not on primitives
// - Useful for class-based code and debugging
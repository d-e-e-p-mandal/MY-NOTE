/*  string :
        In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the primitive data types. */

//  How to Create a String
let str1 = "Hello";       // double quotes
let str2 = 'World';       // single quotes
let str3 = `Hello World`; // backticks (template literals)


// String Examples & Common Operations

//1. Concatenation (Joining strings)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

//2. Template Literals (Using ${} with backticks)
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!

//3. Access Characters by Index
let text = "Hello";
console.log(text[0]); // Output: H
console.log(text.charAt(1)); // Output: e

//4. Escape Characters
let quote = "She said, \"JavaScript is fun!\"";
console.log(quote); // She said, "JavaScript is fun!"

//5. Multiline Strings (Template Literals)
let multiLine = `This is
a multiline
string`;
console.log(multiLine);
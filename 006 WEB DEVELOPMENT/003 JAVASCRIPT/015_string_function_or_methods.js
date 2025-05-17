// Original string for testing
let str = "  Hello JavaScript World!  ";

// 1. length - returns the number of characters
console.log("1. Length:", str.length); // 27

// 2. toUpperCase() - converts to uppercase
console.log("2. Uppercase:", str.toUpperCase()); // "  HELLO JAVASCRIPT WORLD!  "

// 3. toLowerCase() - converts to lowercase
console.log("3. Lowercase:", str.toLowerCase()); // "  hello javascript world!  "

// 4. trim() - removes whitespace from both sides
console.log("4. Trimmed:", str.trim()); // "Hello JavaScript World!"

// 5. trimStart() / trimEnd()
console.log("5. Trim Start:", str.trimStart()); // "Hello JavaScript World!  "
console.log("5. Trim End:", str.trimEnd());     // "  Hello JavaScript World!"

// 6. slice(start, end) - extracts part of a string
console.log("6. Slice:", str.slice(2, 7)); // "Hello"

// 7. substring(start, end) - similar to slice, but no negative values
console.log("7. Substring:", str.substring(2, 7)); // "Hello"

// 8. substr(start, length) - deprecated but still works
console.log("8. Substr:", str.substr(2, 5)); // "Hello"

// 9. replace(search, replacement) - replaces part of the string
console.log("9. Replace:", str.replace("JavaScript", "JS")); // "  Hello JS World!  "

// 10. replaceAll(search, replacement) - replaces all occurrences
let text = "apple, banana, apple";
console.log("10. ReplaceAll:", text.replaceAll("apple", "mango")); // "mango, banana, mango"

// 11. includes(substring) - checks if string contains the given substring
console.log("11. Includes 'JavaScript':", str.includes("JavaScript")); // true

// 12. indexOf(substring) - returns index of first match
console.log("12. indexOf 'World':", str.indexOf("World")); // 20

// 13. lastIndexOf(substring)
console.log("13. lastIndexOf 'o':", str.lastIndexOf("o")); // 23

// 14. startsWith(substring)
console.log("14. startsWith '  He':", str.startsWith("  He")); // true

// 15. endsWith(substring)
console.log("15. endsWith '!  ':", str.endsWith("!  ")); // true

// 16. charAt(index) - returns character at position
console.log("16. charAt(2):", str.charAt(2)); // "H"

// 17. charCodeAt(index) - returns UTF-16 code
console.log("17. charCodeAt(2):", str.charCodeAt(2)); // 72 (H)

// 18. split(separator) - splits into array
console.log("18. split(' '):", str.trim().split(" ")); // ["Hello", "JavaScript", "World!"]

// 19. repeat(count) - repeats string
console.log("19. repeat 3x:", "Hi! ".repeat(3)); // "Hi! Hi! Hi! "

// 20. concat(str2) - joins strings
console.log("20. concat:", "Hello".concat(" ", "World")); // "Hello World"

// 21. padStart(length, char) - pads at the beginning
console.log("21. padStart:", "5".padStart(3, "0")); // "005"

// 22. padEnd(length, char) - pads at the end
console.log("22. padEnd:", "5".padEnd(3, "0")); // "500"

// 23. toString() - converts to string
let num = 123;
console.log("23. toString:", num.toString()); // "123"

// 24. valueOf() - gets the primitive value of a string object
let sObj = new String("hello");
console.log("24. valueOf:", sObj.valueOf()); // "hello"

// 25. match(regex) - returns result of matching
console.log("25. match:", str.match(/JavaScript/)); // ["JavaScript"]

// 26. matchAll(regex) - returns all matches (with global flag)
let matchStr = "cat, bat, rat";
let matches = matchStr.matchAll(/.at/g);
console.log("26. matchAll:");
for (const m of matches) console.log(m[0]); // cat, bat, rat

// 27. search(regex) - returns index of match or -1
console.log("27. search 'JavaScript':", str.search(/JavaScript/)); // 9

// 28. localeCompare() - compares 2 strings alphabetically
console.log("28. localeCompare:", "a".localeCompare("b")); // -1

// 29. normalize() - Unicode normalization
let accented = "e\u0301"; // é as "e + accent"
let normal = "é";
console.log("29. normalize:", accented === normal); // false
console.log("   normalized:", accented.normalize() === normal.normalize()); // true

// 30. codePointAt(index) - returns Unicode code point
console.log("30. codePointAt(2):", str.codePointAt(2)); // Code of 'H'

// 31. fromCharCode(...) - static method
console.log("31. fromCharCode:", String.fromCharCode(72, 105)); // "Hi"

// 32. fromCodePoint(...) - handles characters beyond UTF-16
console.log("32. fromCodePoint:", String.fromCodePoint(128512)); // 😀
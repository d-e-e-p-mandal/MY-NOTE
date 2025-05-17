// console-colors-example.js

// %c is a console format specifier that applies CSS styles to the text after it
// The styles are provided as the second argument to console.log

// Example 1: Red colored text
console.log('%cThis is red text', 'color: red;');

// Example 2: Green text with bold font
console.log('%cThis is green and bold', 'color: green; font-weight: bold;');

// Example 3: Blue background with white text and padding
console.log('%cStyled like a badge', 'background: blue; color: white; padding: 4px 8px; border-radius: 4px;');

// Example 4: Multiple styles in one log
console.log('%cHello %cWorld', 'color: orange;', 'color: purple; font-weight: bold;');

// Example 5: Styling dynamic text using a variable
let name = "Alice";
console.log(`%cWelcome, ${name}!`, 'color: teal; font-size: 18px; font-style: italic;');

// Example 6: No styles — just normal logging for comparison
console.log('This is normal unstyled text');

// Note: These styles are only visible in browser developer consoles (Chrome, Firefox, Edge, etc.)
// They do NOT affect webpage content or document.write
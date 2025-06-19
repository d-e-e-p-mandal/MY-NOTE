const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(num) {
  let number = parseInt(num);
  console.log("Number squared:", number * number);
  rl.close();
});
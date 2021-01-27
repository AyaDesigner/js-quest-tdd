// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirst(input) {
    
    const newStr =  input.split(" ");
    let output = [];
  
    for (let i = 0; i<newStr.length; i++){
      output.push(newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1));
    }
    return output.join(" ");
  }
  

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');

// Check that it works for string with one word
assert.strictEqual(capitalizeFirst('word'), 'Word');

// Check that it works for string with several words
assert.strictEqual(capitalizeFirst('I am learning'), 'I Am Learning');

// Check that it works for empty string 
assert.strictEqual(capitalizeFirst(''), '');



console.log(capitalizeFirst("i am learning TDD"));

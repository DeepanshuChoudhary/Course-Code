/* 
Function Expressions - Hands-on Exercise

Function expressions are yet another way to create functions, however, in this case, the function is assigned to a variable. Unlike function declarations, a function expression isn’t hoisted to the top of its lexical environment and is only available for use after it has been declared in code.
 
Let’s build a function expression. Open the main.js file. You’ll notice a variable called seconds which holds a numeric value that needs to be converted to days. This can be done by using the formula Math.floor(seconds / (3600 * 24)).

So, let’s create a function expression, right after Line 3 and before the console.log statement as shown below.
const secondsToDays = function (seconds) {
  return Math.floor(Number(seconds) / (3600 * 24));
};
Next, modify the console.log statement as shown below.
console.log(`${seconds} seconds is equal to ${secondsToDays(seconds)} days`);
That’s it. Your app now converts seconds to days using a function expression!
*/ 


// Output - 3829019 seconds is equal to 44 days

'use strict';

let seconds = 3829019;

// console.log(`${seconds} seconds is equal to 0 days`);

const secondToDays = function(seconds) {
    return Math.floor(Number(seconds) / (3600 * 24));
};

console.log(`${seconds} seconds is equal to ${secondToDays(seconds)} days`);

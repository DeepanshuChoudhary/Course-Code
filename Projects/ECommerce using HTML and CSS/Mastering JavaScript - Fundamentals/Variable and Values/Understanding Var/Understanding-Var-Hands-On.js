/*

Understanding var - Hands-on Exercise

We’ve been var for creating variables all along. Variables created using var follow function scope, i.e. they remain visible in the lexical environment and boundaries of a function inside of which they were created.

To see this in action, open the main.js file. You'll notice two variables holding the length and breadth of a rectangle.
 
Right below the breadthOfRectangle variable declaration, add the following code
function computeArea() {
  var breadthOfRectangle = 20;
  function area() {
    return lengthOfRectangle * breadthOfRectangle;
  }
 
  console.log(`Area of Rectangle: ${area()}`);
}
 
computeArea();
This is a function, a packaged set of instructions which are executed all at once when invoked by running computeArea(). The above function references the lengthOfRectangle in its inner function named ‘area’ which is accessible since the said variable was created outside of the function and is thus in the global scope, visible to the function and all inner functions.
 
The breadthOfRectangle variable, though declared outside has been re-declared using the var keyword. When you run your script again, notice how the breadthOfRectangle still reports 0. This is because it is seeing the variable created on Line 4 and not the one inside the function, which is effectively invisible outside of the function because variables created using var are limited to the function body and inner functions, where they were created.

*/

'use strict';

var lengthOfRectangle = 10;
var breadthOfRectangle = 0;

function computeArea() {
    var breadthOfRectangle = 20;
    function area() {
      return lengthOfRectangle * breadthOfRectangle;
    }

    console.log(`Area of Rectangle: ${area()}`);
}
    
    computeArea();

console.log(`Length of Rectangle: ${lengthOfRectangle}`);
console.log(`Breadth of Rectangle: ${breadthOfRectangle}`);
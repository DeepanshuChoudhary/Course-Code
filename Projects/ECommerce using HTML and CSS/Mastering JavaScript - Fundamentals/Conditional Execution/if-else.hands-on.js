/*
Decision-making with 'if-else' - Hands-on Exercise

Conditional statements such as the if-else allow us to implement decision based flow control in code, which is a critically essential process. There are numerous ways to implement conditional flow control and if-else represents the most fundamental of them all.

Start by opening up the main.js file. You'll see a variable named temperature which is set to 20. If the value of this variable is less than 15, let's output “It’s cold outside” and if its higher, then we’ll output “It’s warm outside”
 
So, right after the variable statement on Line 3, add the following if-else statement.
if (temperature < 15) {
  console.log("It's cold outside");
} else {
  console.log("It's warm outside");
} 
That's it. What does your app tell you? Is it cold or is it warm?


*/

'use strict';

let temperature = 15;

if(temperature < 15) {
    console,log(`It's cold outside`);
} else {
    console.log(`It's warm outside`);
}
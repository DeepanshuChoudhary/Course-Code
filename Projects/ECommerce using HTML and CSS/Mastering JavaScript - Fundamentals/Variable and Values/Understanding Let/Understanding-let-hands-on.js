/*
Block Scoped Variables with let - Hands-on Exercise

While variables created using the var keyword offer function scope, you can also get block scoped variables that stay visible within the limits of a block, denoted by a pair of {…}. A variable created using let for instance stays visible only within the confines of a block or the expression, if created inside of one.

Additionally, variables created using let do not pollute the global scope which means they're safer than the ones created using var.
 
So, let's practice something we saw in the video. Open the main.js file and create a new variable named x using the let keyword and set it to 200. 
let x = 200; 
Next, we'll create a for-loop which allows you to repeatedly execute a set of statements enclosed in a block. This will also use the let keyword to instantiate a counter, also named x. 
for (let x = 0; x < 10; x++) {
  console.log(`The number is ${x}`);
}
 Lastly, add the following statement. 
console.log(`Original Number: ${x}`);
When you run this script, you'll notice the value of x inside the for-loop block is different than the one declared outside. This is because both variables, though named the same are sitting in two different and isolated environments which do not clash.

*/

'use strict';

let x = 200;

for(let x=0; x<10; x++) {
    console.log(`The Number is ${x}`);
}

console.log(`Original number: ${x}`);
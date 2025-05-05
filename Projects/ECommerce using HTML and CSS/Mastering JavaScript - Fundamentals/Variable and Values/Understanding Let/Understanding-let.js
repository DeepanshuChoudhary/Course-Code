// let = Created using "let" are neither created in global namespace nor limited to function scope
// Variable created using "let" are only available within a block.
/* 
They're block-scoped!

    expression {
        let x = 10;
    }

Variable created inside a block is visible only inside the block and not outside it.
*/

'use strict';

var cost = 1000;

if(cost >= 1000) {
    // var cost = 950;
    let cost = 950;
    console.log(`The Special clearance cost os ${cost}`);
}

console.log(`Original cost: ${cost}`); /* print cost: 950, when "var cost = 950", "let cost = 950" print cost: 1000(original value) */

var x = 200;

console.log(`The value of x = ${x}`);

// for(var x=0; x<10; x++) {
for(let x=0; x<10; x++) {
    console.log(`The number is ${x}`);
}

console.log(`Original number: ${x}`);

// var a = 20;
// var a = 30;
let a = 20;
// let a = 30; - cannot use same identifier with "let" value again for changing the value in same scope;
a = 30;

console.log(`The value of a = ${a}`);

let pi = 3.1412;

if(a > 10) {
    let pi = 10; /* cannot change the value of pi outside this block-scope */
    console.log(`The value of pi in if: ${pi}`);
}

console.log(`The value of pi: ${pi}`);
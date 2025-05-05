'use strict'

// var a = 10;
var a = '10';
// var b = 20n;
var b = 20;

// var c = a + b;

// console.log(`The result of the sum of ${c}`);

try {
    if(typeof a != typeof b) 
        throw new Error(`Both operands must belongs to the same data type!`); /* Custom Error */
    var c = a + b;
    console.log(`The result of the sum is ${c}`);
} catch (error) {
    // console.log(`Oops! There was an error!`);
    console.log(error);  /* We want to know what is the error so it goes to the "throw new Error" and show the error message */
} finally {
    console.log(`I will run no matter what!`);
}

var pi = Math.PI;
console.log(`The value of PI is ${pi}`);
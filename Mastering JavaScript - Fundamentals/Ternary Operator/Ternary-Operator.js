// Ternary Operator: A shorthand way to write an if-else statement.

'use strict';

let temperature = 35;

// condition ? value_if_true : value_if_false;
let feelTemp = temperature >= 25 ? 'warm' : 'cool';

console.log(`Today is a ${feelTemp} day`);


let cost = 5000;

let discount = cost < 1000 ? 0 : 10;

let totalCost = cost - cost * (discount / 100);

console.log(`Original CostL $${cost}`);
console.log(`Original CostL $${totalCost}`);


let today = new Date().getDay();

let day = today === 0 ? 'Sunday' : 
            today === 1 ? 'Monday' : 
            today === 2 ? 'Tuesday' : 
            today === 3 ? 'Wednesday' : 
            today === 4 ? 'Thursday' : 
            today === 5 ? 'Friday' : 
            today === 6 ? 'Saturday' : 
            'Not exactly a real day...' ;

console.log(`Today is ${day}`);

console.log(today); /* answer is 6 = Friday */
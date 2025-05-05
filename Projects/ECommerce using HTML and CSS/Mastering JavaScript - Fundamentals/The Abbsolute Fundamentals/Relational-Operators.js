'use strict';

console.log(10 > 20);
console.log(20.01 > 20);
console.log(true < false);
console.log(true > false);

console.log(9 < 9);

console.log(` <= or >= `)

console.log (9 <= 9);
console.log('10' <= 10);
console.log(true >= false);
console.log(null >= 0);

console.log(`Strict Relational Operator`)

// var x = '10'; - console.log show "false", because the datatype are different
var x = 10;
var y = 12;

var lte = typeof x === typeof y && x <= y;

console.log(lte);

// In operator

console.log(`In Operator`);

var user = {
    name: 'Luke Skywalker',
    profession: 'Developer',
    isDarkSide: false,
};

console.log('isDarkSide' in user);

console.log('age' in user);


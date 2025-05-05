'use strict';

//  Logical "OR"

let user01 = 'Nishant';
let greeting_01 = `Hello, ${user01}`;
console.log(greeting_01);

let user02 = '';
// If the user name is not available we put this
let greeting_02 = `Hello, ${user02 || 'Stranger'}`;

console.log(greeting_02);
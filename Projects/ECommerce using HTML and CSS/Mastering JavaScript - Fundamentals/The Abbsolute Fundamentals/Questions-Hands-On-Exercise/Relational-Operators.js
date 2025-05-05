// Instruction

// Relational Operators are the operators that are used to test a relationship such as less than or greater than etc. Numeric comparisons are required frequently in software development and relational operators fill that space.
 
// So, open the main.js file. You'll notice a single variable named waterTemperature which is set to 55, a value in degrees Celsius. Based on this, let's try to check if water at this temperature is boiling, frozen or is it just warm enough?
 
// Right below the variable, add the following statements. Each one of these statements uses a relational operator to compare the value of waterTemperature against a literal value and accordingly computes back to a true or a false outcome.
// var isItBoiling = waterTemperature >= 100;
// var isItFrozen = waterTemperature <= 0;
// var isItWarm = waterTemperature > 30 && waterTemperature < 60;
// Now let’s augment the console.log statements to display the outcome of these relational tests.
// console.log('Is the water boiling?', isItBoiling);
// console.log('Is the water frozen?', isItFrozen);
// console.log('Is it warm?', isItWarm);
// So, were your questions answered? You’ll see more and more uses of relational operators as we go along.



'use strict'

var waterTemperature = 55;

var isItBoiling = waterTemperature >= 100;
var isItFrozen = waterTemperature <= 0;
var isItWarm = waterTemperature > 30 && waterTemperature < 60;

console.log('Is the water boiling? ' + isItBoiling);
console.log('Is the water frozen? ' + isItFrozen);
console.log('Is it the worm? ' + isItWarm);
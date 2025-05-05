/*
Switch - Hands-on Exercise

The switch-case statement allows you to work with several flavors of a given condition to switch the flow of control. It also allows you to map multiple conditions to a common outcome.
 
Let's work with one of the examples we saw in the video where we will implement a switch-case to identify the type of vegetable or fruit, provided to the script.
 
Open the main.js file. You'll notice a variable named item set to 'Lettuce'. Let's try to identify if Lettuce is a fruit or a vegetable.

Right after Line 4 and before the console.log statement at the end, add the following code to implement a switch-case conditional that can handle multiple common cases as well.
switch (item) {
  case 'Apple':
  case 'Banana':
  case 'Kiwi':
  case 'Strawberry':
    type = 'fruit';
    break;
  case 'Lettuce':
  case 'Potato':
  case 'Celery':
  case 'Eggplant':
    type = 'vegetable';
    break;
  default: {
    throw new Error('Unable to identify item...');
  }
}
That's it. So, were you able to find out what Lettuce is?
*/


'use strict';

// let item = 'Kiwi';
// let item = 'Potato';
let item = 'Lettuce';
let type;

switch (item) {
    case 'Apple':
    case 'Banana':
    case 'Kiwi':
    case 'Strawberry':
        type = 'fruit';
        break;
    case 'Lettuce':
    case 'Potato':
    case 'Celery':
    case 'Eggplant':
        type = 'Vegetable';
        break;
    default: {
        throw new Error('Unable to identify item ... ');
    }
}

console.log(`${item} is a ${type}`);
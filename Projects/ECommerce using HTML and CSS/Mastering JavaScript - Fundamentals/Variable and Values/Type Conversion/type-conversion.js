'use strict';

console.log(10 + '10'); /* In JavaScript, when you use the + operator with a number and a string, the number is converted to a string, and concatenation (joining of strings) happens. */
console.log(10 - '5'); /* the - operator does not perform string concatenation. Instead, JavaScript tries to convert the string '5' into a number, and then it performs subtraction. */

// const greeting = 'Hi ';
const greeting = 20;
// const message = 'Can I ask you a question?';
const message = 50;
// const output = greeting + message;
const output = String(greeting) + String(message);

console.log(output);

const orderTicket = [
    {
        id: 'OBJ01',
        name: 'Chocolate Muffin',
        cost: '2',
    },
    {
        id: 'OBJ02',
        name: 'New York Cheesecake',
        cost: '4.5',
    },
];

// let totalCost = orderTicket[0].cost + orderTicket[1].cost; - Because both cost: are String;

let totalCost = Number(orderTicket[0].cost) + Number(orderTicket[1].cost);

console.log(`The Total Cost: ${totalCost}`);

const COLORS = ['Red', 'Green', 'Blue'];

console.log(COLORS); /* - It shows in Array-Style; */
console.log(String(COLORS)); 
console.log(COLORS.toString()); /* Both are same way - (String(COLORS)) */
console.log(`${COLORS}`);

console.log(`Boolean numbers`);

console.log(Boolean(0));
console.log(Boolean(1));

console.log(String(true));
console.log(String(false));

'use strict'

var users = [
    [1, 'John'],
    [2, 'Sarah'],
    [3, 'Fox'],
    [4, 'Mike'],
];

// console.log(users[2]); - show [3, 'Fox']
// console.log(users[2][0]); - 3
console.log(users[2][1]); /* - Fox */

var user = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Sarah',
    },
    {
        id: 3,
        name: 'Fox',
    },
    {
        id: 4,
        name: 'Mike',
    },
];

// var admins = user;
var admins = [...user]; /* The ... (three dots) is called the spread operator. This operator helps copy all the items inside the user list into a new list called admins. */

// slice() is an older method that works in many older browsers, while the [...] spread operator is a newer way to copy arrays.
// var admins = user.slice(); - .slice() is a method in JavaScript that makes a copy of an array. When you use user.slice(), it creates a new array (or list) that is a copy of user.

admins[3] = {id: 34, name: 'Sagar'};

console.log(user[3]['name']);

console.log(user[3]);
// console.log(admins);
// console.log(admins[2]); - It shows = { id: 3, name: 'Fox' }
console.log(admins[3]); 
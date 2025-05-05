// Arrow functions are anonymous functions that can be assigned to constants and variables to make them equivalent to function expressions.

'use strict';

// const areaOfRect = function (l, w) {
//     return Number(l) * Number(w);
// };

// const perimeterOfRect = function(l, w) {
//     return 2 * (Number(l) + Number(w));
// };

// Arrow Function way

const areaOfRect = (l, w) => Number(l) * Number(w);

const perimeterOfRect = (l, w) => 2 * (Number(l) * Number(w));

// const createUser = function (user, age, isAdmin) {
//     return {
//         // user: user,
//         // age: age,
//         // isAdmin: isAdmin,

//         user,
//         age,
//         isAdmin,
//     };
// };

// Arrow Function way

const createUser = (user, age, isAdmin) => ( {
    // user: user,
    // age: age,
    // isAdmin: isAdmin,

    // Shortdown notation

    user,
    age,
    isAdmin,
} );

let john = createUser('John M', 20, true);

console.log(john);
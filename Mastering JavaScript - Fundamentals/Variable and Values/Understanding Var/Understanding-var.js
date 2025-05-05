'use strict'

var user = 'Sarah Rice';

// console.log(globalThis.hasOwnProperty('user'));
// console.log(globalThis);

function sayHi() {
    var greeting = "It's so good to meet you!";
    
    function greet(){
        return `She also says, ${greeting}`;
    }
    console.log(`${user} says Hi!`);
    console.log(greet());
}

sayHi();
// console.log(greeting);

// try {
//     console.log(greeting);
// } catch (error) {
//     console.log(`Throw Error: This is not access because it is in the function not called outside the function`);
// } finally {
//     console.log('Execution complete');
// }
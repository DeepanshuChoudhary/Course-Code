'use strict';

// const person = {
//     name: 'John',
//     greet: function() {
//       console.log(this.name); // 'this' refers to the person object
//     },
// };

// person.greet(); // Step 4: Calling the greet function

const person = {
    name: 'Deepanshu Choudhary',
    age: 25,
    // age: 15,
    profession: 'Software Engineer',
    
    // sayHi: function() {
    sayHi() { /* Just a shortcut way of defining the function */
        return `Hi, my name is ${this.name}. I'm ${this.age} years old and I'm a ${this.profession}`;
    },

    carDrive() {
        return this.age >= 18 ? 'can Drive' : 'cannot drive';
    }
};

person.myJob = function() {
    return `I work as a ${this.profession}`;
}

console.log(person.sayHi());
console.log(person.carDrive());
console.log(person.myJob());
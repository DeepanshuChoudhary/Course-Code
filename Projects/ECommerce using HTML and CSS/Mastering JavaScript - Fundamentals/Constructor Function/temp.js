'use strict';

function User (name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;

    return `Name ${this.name}, Age ${this.age}, isAdmin ${this.isAdmin}.`
}

const john = new User('John M', 20, true);
const jimmy = new User('Jimmy K', 17, false);

console.log(john.age);
console.log(john);
console.log(User());
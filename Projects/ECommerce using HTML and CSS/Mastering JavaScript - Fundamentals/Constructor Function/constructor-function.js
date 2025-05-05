'use strict';

// Constructor Function - This is like template, Think of it like a blueprint for making multiple similar objects with the same properties and methods.

function User (name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
    this.canDrive = () => (this.age >= 18 ? 'Yes' : 'No');
    this.accessAccounts = () => (this.isAdmin ? 'You can Access...' : 'Denied Access...')
}

const Deepanshu = new User ('Deepanshu Choudhary', 25, true);
const Anshu = new User ('Anshu Choudhary', 17, false);

// console.log(Deepanshu.age);
// console.log(Anshu.age);

// console.log(Deepanshu); - Show all the details of 'Deepanshu'

// console.log(Deepanshu.canDrive());
// console.log(Anshu.canDrive());

console.log(Deepanshu.accessAccounts());
console.log(Anshu.accessAccounts());
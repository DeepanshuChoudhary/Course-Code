'use strict';

const person1 = {
    name: 'Alice',
    sayHi: function() {
        return `Hi, I'm ${this.name};`
    },
};

const person2 = {
    name: 'Bob',
    sayHi: person1.sayHi // Copy the method and name print 'Bob' because of ${this.name} represent 'Bob' in this code
}

console.log(person1.sayHi());
console.log(person2.sayHi());
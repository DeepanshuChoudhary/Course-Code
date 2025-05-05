'use strict';

let students = [
    {
        id: 1,
        name: 'John Mills',
        age: 17,
    },
    {
        id: 2,
        name: 'Sarah Jones',
        age: 17,
    },
];

console.log(students[0].name);
console.log(students[1].name);
console.log(students[2]?.name);
console.log(students[2]?.name ?? 'No record found ... ');
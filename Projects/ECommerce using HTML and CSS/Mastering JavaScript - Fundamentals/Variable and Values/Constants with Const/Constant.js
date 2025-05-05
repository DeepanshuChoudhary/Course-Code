'use strict'
const PI = 3.1412;
const VERSION = 2.01;
const URL = '/api/v2/posts';

const ADMIN = {
    access: 2,
    userID: 'john@23',
};

ADMIN.access = 3;

// ADMIN = {}; - given an error "TypeError: Assignment to constant variable."

console.log(ADMIN);

const COLORS = ['red', 'green', 'blue'];

COLORS.push('Black');
console.log(COLORS);
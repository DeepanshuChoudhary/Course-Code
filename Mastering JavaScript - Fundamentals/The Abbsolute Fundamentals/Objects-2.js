'use strict'

var sentinel = {
    name: 'Sentinel Design\u{2122}', 
    employeeCount:  50, 
    // city: 'Tokyo', 
    // country: 'Japan', 
    location: {             /* Nested */
        city: 'Tokyo',
        country: 'Japan',
    },
    isListed: false,
};

var john = {
    name: 'John Mockery',
    age: 23,
    designation: 'Sr.Developer',
    organization: sentinel.name,
    address: sentinel.location,
};


var sarah = {
    name: 'Sarah Rice',
    age: 27,
    designation: 'UX/UI Designer',
    organization: sentinel.name,
    address: sentinel.location,
}

// If i want to change the city of the John we can do - 
// john.address.city = 'New York'; - the both sarah and john city location is showing "New York" because it {Pass by Reference} change the actual value
john.address = {city: 'New York', country: 'US'} /* Re-assign the value for the John not change the actual value */

console.log(john);
console.log(sarah);
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

console.log(sentinel.name);

var propName = 'employeeCount'
console.log(sentinel[propName]);

sentinel.stockSymbol = 'SDJ'; /* This can add new property in the "sentinel" list */
sentinel.isListed = true; /* change the existing value or say reassign value */
delete sentinel.location.city; /* can also delete the value */

sentinel.country = 'US';


var currencies = new Object();
currencies['Japan'] = 'Yen';
currencies['US'] = 'US Dollar';

console.log(
    `The currency of ${sentinel.location.country} is ${currencies[sentinel.location.country]
    }`
);

console.log(sentinel);

var fruit = 'Apple';
var pie = fruit;
pie = 'Walnut';

console.log(`Fruit name is: ${fruit}`);
console.log(`Pie: ${pie}`);


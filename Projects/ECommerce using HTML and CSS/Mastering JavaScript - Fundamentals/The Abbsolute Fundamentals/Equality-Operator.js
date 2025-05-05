'use strict';

console.log('Equality Operator');

console.log(10 == 10);
console.log(10 == '10');
console.log(10 == '11');
console.log(1 == true);
console.log(0 == true);
console.log('Waffle' == 'waffle');
console.log(null == undefined);

var redCar = {
    color: 'red',
    id: 1,
};

var someCar = redCar; /* Now it shows - true */
// {
//     color: 'red', - Show "False"
//     id: 1,
// };

console.log(redCar == someCar);
'use strict' 

var fruit = ['Apple', 'Kivi', 'Banana', 'Strawberry'];

fruit.push('Avocado'); /* This can push the element in array in last position */

// fruit.pop(); - This are use to pop-out the array elements
// fruit.pop();

fruit[4] = 'Mango';
fruit[5] = 'Pineapple';
fruit[10] = 'orange'; /* Create the element at 10th position but also giving <4 empty items> space and total items are now 11 */

console.log(`I love ${fruit[0]}`);

console.log(`I also like ${fruit[2]}`);

console.log(fruit.length);

console.log(fruit);

console.log(`Let's have a ${fruit[fruit.length-1]} milkshake`);
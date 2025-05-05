/*
Creating Constants with Const - Hands-on Exercise

Constants cannot be reassigned and that means once declared their value is set in stone, well almost. You see while a constant, created using the const keyword cannot be reassigned a literal value, in the case of data structures such as Arrays and Objects, you do get to modify the contents of the said structure.
 
So, a property within an object assigned to a constant can indeed be mutated. This is important to understand. Besides this, constants behave like variables created using let and are thus block scoped.
 
Let's create some constants to understand how they work. Open the main.js file and let's begin by creating two constants as shown below. 
const PI = 3.1412;
const radiusOfCircle = 5.2;
Based on the values of these constants, let's now compute & display the circumference of the circle by adding the following statements.
const circumference = 2 * PI * radiusOfCircle;
console.log(`Circumference of the circle: ${circumference}`);
So far so good, everything works well. Now try modifying the value of radiusOfCircle.
 
radiusOfCircle = 6.4;
 
When your script is executed, you'll notice an error which says TypeError: Assignment to constant variable. This is because you cannot re-assign a literal value to a constant.
 
Now, remove the radiusOfCircle mutation statement and the original declaration as well and replace it with the following.
const circle = {
  radius: 5.2,
};
Then modify the circumference computation statement as shown below.
const circumference = 2 * PI * circle.radius;
circumference = 2 * PI * circle.radius;
 
So far so good, your app should report the same value of circumference as well. Now, right after the circle object, add the following statement.
 
circle.radius = 6.4;

*/
'use strict'

const PI = 3.1412;
const radiusOfCircle = 5.2;

// const circumference = 2 * PI * radiusOfCircle;

// const radiusOfCircle = 6.4;


const circle = {
    radius: 5.4,
};

circle.radius = 6.4;

const circumference = 2 * PI * circle.radius;

console.log(`Circumference of the circle: ${circumference}`);
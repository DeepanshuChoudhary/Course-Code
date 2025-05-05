/*
Lots of Choices with 'else if' - Hands-on Exercise

The if-else conditional can be chained together using an else which lets you handle multiple conditions easily. If the first set of conditions are not met, the control jumps to the else block, where you can have another if statement to handle the second set of conditions and this can keep going.
 
Let’s work through an example to understand. Start by opening up the main.js file. You’ll notice two variables, grade which is undefined at this time and percentage which is set at 85. Assume the percentage to be a student’s score. We now want to compute the grade based on the following assumption:
 
Grade A+ if the student scores between 91 and 100 percent
Grade B+ if the student scores between 81 and 90 percent
Grade C+ if the student scores between 71 and 80 percent
Grade D+ if the student scores between 61 and 70 percent
Fail if scores are 60 or below
 
To implement these complex conditions, we’ll implement an if - else - if set of statements as shown below, right before the console.log statement.
 
if (percentage <= 100 && percentage >= 91) {
  grade = 'A+';
} else if (percentage <= 90 && percentage >= 81) {
  grade = 'B+';
} else if (percentage <= 80 && percentage >= 71) {
  grade = 'C+';
} else if (percentage <= 70 && percentage >= 61) {
  grade = 'D+';
} else {
  grade = 'Fail';
}
 
If you now run your app, you’ll get the correct value of grade in the console output.
*/

'use strict';

let grade;
let percentage = 85;

if (percentage >= 91 && percentage <= 100) {
    grade = 'A+';
} else if (percentage >= 81 && percentage <= 90) {
    grade = 'B+';
} else if (percentage >= 71 && percentage <= 80) {
    grade = 'C+';
} else if (percentage >= 61 && percentage <= 70) {
    grade = 'D+';
} else {
    grade = 'Fail'
}

console.log(`The student has secured ${grade}`);

'use strict';

// Logical AND

// let isUserSmiling = true;
let isUserSmiling = false;

// The && operator only moves to the second part of the expression if the first part is true.
isUserSmiling && console.log('User is smiling');


// Logial AND Assignment Operator 

/*
let isSunny = true; // The box has 'true'
let weather = 'sunny';

isSunny &&= weather; // Since isSunny is true, it changes isSunny to 'sunny'

console.log(isSunny); // Output: 'sunny' 
*/

let dataDownloaded = 95;
// let dataDownloaded = 100; 

let hasBeenDownloaded = dataDownloaded === 100;

hasBeenDownloaded &&= 'Data download now complete...';

hasBeenDownloaded ||= 'Downloading...';

console.log(hasBeenDownloaded);
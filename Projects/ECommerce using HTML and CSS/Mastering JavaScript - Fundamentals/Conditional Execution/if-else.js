'use strict';

let cost = 1250;
// let cost = 250;

if (cost < 1000) {
    console.log('No discount is applicable!');
} else {
    console.log('Special Offer: 10% discount for a limited time only!');
}

// let temperature = 15;
let temperature = 35;

if (temperature < 20) {
    console.log(`It's quite cool today`);
} else {
    console.log(`It's quite warm today!`);
}

// Create a new Date object and get the current hour (0–23) in 24-hour format.
// This stores the current hour of the day in the variable 'currentHour'.
let currentHour = new Date().getHours();

if (currentHour >= 0 && currentHour <= 12) {
    console.log('Good Morning!');
} else {
    console.log('Good Day!');
}

console.log(currentHour);
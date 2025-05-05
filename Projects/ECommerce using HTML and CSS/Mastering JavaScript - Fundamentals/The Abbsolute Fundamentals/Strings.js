'use strict';

var user = "Deepanshu Choudhary";

// typeof user;

var designation = 'Sr. Designer';
var organization = 'Sentinel Design\u{2122}'; /* for putting TM logo we put ( \u{2122} ) */
var city = 'New York';
var country = 'USA';
var location = city + ', ' + country;
// var favQuote = "To 'single-quote' or "double-quote""; Error
var favQuote = 'To \'single-quote\' or "double-quote"'; 

// var employeeData = 'Name: ' + user + 
// '\nDesignation: ' + designation +
// '\nOrganzation: ' + organization +
// '\nLocation: ' + location;

var employeeData = `Name: ${user}
Designation: ${designation}
Organization: ${organization}
Location: ${location}`; /* here we use [ ` ] this */

var sentence = 'I can\'t believe it\'s already October';

var greeting = `Hi, my name is ${user} \u{1F642} and i work as a ${designation} at ${organization}. Here's a simple equation: 2 + 2 = ${2+2}`; /* for smile emoji we put ( \u{1F642} ) */

console.log(sentence);

console.log(employeeData);

console.log(greeting);

// console.log(location);

// console.log(favQuote);
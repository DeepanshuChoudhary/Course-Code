'use strict'

var showReport = true;
var hasDownloaded = false;
var isPaymentConfirmed = true;
var forceDelete = false;


// var message = 'hey'
var message = 'hi my name is Deepanshu';  // message is an empty string, so it's considered "falsy"

// Double negation (!!) is used to convert the value of 'message' into a boolean.
// If 'message' is empty (falsy), !!message will be 'false'.
// If 'message' had some value (truthy), !!message would be 'true'.
var showPostButton = !!message;  // In this case, since message is empty, showPostButton will be false.

// var numOfCharacters = 20; True-Value, if 0 False-value
var numOfCharacters = 0;
var showEditButton = !!numOfCharacters;

var bothValues = message.length;

// typeof showReport;

// console.log(typeof message);

console.log(`Show Post Button: ${showPostButton}`);

console.log(`Show Edit Button: ${showEditButton}`);

console.log(`Show both Value: ${bothValues}`);

// console.log(typeof showReport);
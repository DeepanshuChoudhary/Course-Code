'use strict';

var costOfProduct = 1000;
var discount = 1200;

try {
  // Check if discount is greater than or equal to the product cost
  if (costOfProduct <= discount) {
    throw new Error('Cost of the product should be higher than the discount value');
  }
  
  // Calculate the total cost
  var totalCost = costOfProduct - discount;
  console.log(`Total Cost: ${totalCost}`);
  
} catch (error) {
  // Handle the error and show a message to the user
  console.log('Oops! We have an error: ', error.message);
  
} finally {
  // This will run regardless of whether there was an error or not
  console.log('Thank you for using the app!');
}

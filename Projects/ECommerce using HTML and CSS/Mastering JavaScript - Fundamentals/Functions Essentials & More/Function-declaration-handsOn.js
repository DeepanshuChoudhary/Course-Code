// output - 77 degrees Fahrenheit is  25 degrees Celsius

'use strict';

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let tempInFahrenheit = 77;
console.log(`${tempInFahrenheit} degree Fahrenheit is `, toCelsius(tempInFahrenheit), 'degrees Celsius');
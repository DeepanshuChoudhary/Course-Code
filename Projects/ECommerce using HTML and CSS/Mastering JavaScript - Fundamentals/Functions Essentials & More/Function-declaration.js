'use strict';

function computerRectStats(length, width) {
    let areaRect = Number(length) * Number(width);
    let perimeterRect = 2 * (Number(length) + Number(width));
    console.log(`Area: ${areaRect}`);
    console.log(`Perimeter: ${perimeterRect}`);
}

function computePayable(cost) {
    // let discount = cost < 1000 ? 0 : 10;
    let discount = Number(cost) < 1000 ? 0 : 10; /* This can handle "String" as well */
    
    // let totalCost = cost - cost * (discount / 100);
    // return totalCost;

    return cost - cost * (discount / 100);
}

let rectALength = 25;
let rectAWidth = 10;

computerRectStats(rectALength, rectAWidth);

console.log(`The discounted price of the: ${computePayable("2500")}`);
console.log(`The discounted price of the: ${computePayable(500)}`);
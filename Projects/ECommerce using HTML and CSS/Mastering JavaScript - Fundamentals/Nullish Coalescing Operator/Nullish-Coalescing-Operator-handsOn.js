'use strict';

let tempData = {
    location: 'Lake Eastwood',
    sensors1: 0,
    sensors2: null,
    sensors3: 1.8,
}

console.log(`${tempData.location}: ${tempData.sensors1 ?? tempData.sensors2 ?? tempData.sensors3} Degrees`);
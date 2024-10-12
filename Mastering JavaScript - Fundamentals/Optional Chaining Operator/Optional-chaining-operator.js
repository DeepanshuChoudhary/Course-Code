'use strict';

let restaurants = [
    {
        name: 'The Bao Boat',
        category: 'Oriental',
        city: 'New York',
        location: {
            lat: 36.88,
            long: 78.21,
        },
    },
    {
        name: 'Imperial Dinar',
        category: 'Continental',
        city: 'Los Angeles',
    },
];

console.log(`Location ${restaurants[0].location.lat}, ${restaurants[0].location.long}`);
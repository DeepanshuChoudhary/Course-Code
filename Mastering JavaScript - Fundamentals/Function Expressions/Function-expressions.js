// 'use strict';

// // Anonymous Function

// const todayDay = function() {
//     const days = [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//     ];

//     // const today = new Date().getDay();
//     const today = new Date().todayDay();
//     return days[today];
// };

// console.log(`Today is: ${todayDay()}`);

'use strict';

// Anonymous Function
const todayDay = function() {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    const today = new Date().getDay(); // Use getDay() to get the current day
    return days[today]; // Returns the name of the day
};

console.log(`Today is: ${todayDay()}`); // Calls the function and logs the day

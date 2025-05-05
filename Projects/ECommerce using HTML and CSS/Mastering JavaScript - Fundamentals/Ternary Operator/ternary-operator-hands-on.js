'use strict';

const today = 'Thursday';
// const typeOfDay = null;

// condition ? value_if_true : value_if_false;

/*
The || checks if it’s either Saturday or Sunday.
If it’s true, the output is 'Weekend'.
If false, the code checks if today is Wednesday.
If it's Wednesday, the output is 'Hump Day'.
If none of the conditions match, the output is 'Weekday'.
*/
const typeOfDay = today === 'Saturday' || today === 'Sunday' ? 'Weekend' : today === 'Wednesday' ? 'Hump Day' : 'Weekday';

console.log(`${today} - ${typeOfDay}`);


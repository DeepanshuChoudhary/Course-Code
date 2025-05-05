/* Output - Joe Mockery is logged in... */

'use strict';

let inputUsername = 'joe';
let inputPassword = 'joe@901';


const database = {
    joe: {
        user: 'Joe Mockery',
        password: 'joe@901',
    },
};

let checkPassword = database[inputUsername].password === inputPassword;

checkPassword && console.log(`${database[inputUsername].user || 'User'} is logged in...`);


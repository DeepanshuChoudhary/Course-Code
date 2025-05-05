'use strict';

let a = 20;
let b = 50;

let action = 'ADD';

switch(action) {
    case 'ADD':{
        let sum = a + b;
        console.log(`The sum of ${a} and ${b} is ${sum}`);
        break;
    }
    
    case 'SUBTRACT': {
        let diff = a - b;
        console.log(`The subtraction of ${a} and ${b} produces ${diff}`);
        break;
    }
    
    case 'MULTIPLY': {
        let multiply = a * b;
        console.log(`The multiplication of ${a} and ${b} produces ${multiply}`);
        break;
    }

    case 'DIVIDE': {
        let division = a / b;
        console.log(`The division of ${a} and ${b} produces ${division}`);
        break;
    }

    default: {
        throw new Error('Invalid action...');
    }
}
'user strict';

const user = {
    username: 'Deepanshu Choudhary',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Nishant Nagar";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Anshu";
//     // console.log(this);
//     console.log(this.username); // It shows "Undefined".
// }

// chai();

// const chai = () => {
//     let username = "Deepanshu";
//     console.log(this);
// }

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(3, 3));
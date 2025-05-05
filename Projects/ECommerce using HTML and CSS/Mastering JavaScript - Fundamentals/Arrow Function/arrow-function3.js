'use strict';

/* 
Normal Function: this points to the object it is inside.
Arrow Function: this does not point to the object it is inside. Instead, it looks for this from where the function was created (the outer environment). If it doesn’t find anything, it returns undefined.

Arrow functions don’t have their own this. They use this from where the function is written.
If this doesn’t point to an object with the property you're looking for (like name), it will return undefined.

*/

const student = {
    name: 'Deepanshu Choudhary',
    showName: function() {
        console.log(this.name); // 'this' refers to student name object
    },
};


const student2 = {
    name: "Deepanshu Nagar",
    showName: () => {
        console.log(this.name); // 'this' doesn't refers to student2 object
    },
};

student.showName();
student2.showName();

'use strict';

const obj = {
    x: 10,
    y: 20,
    // addZ(z) {
    //     return this.x + this.y + z;
    // }

    addZ() {
        return (z) => this.x + this.y + z; /* Arrow Function */
    },

    // addZ: function(z) {
    //     return this.x + this.y + z;
    // },
};

// console.log(obj.addZ(35));

let addZFn = obj.addZ();

console.log(addZFn(35));

// console.log(obj.addZ(0));
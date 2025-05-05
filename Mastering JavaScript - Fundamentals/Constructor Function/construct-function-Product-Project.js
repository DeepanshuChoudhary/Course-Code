'use strict';

const Product = function(name, description, cost, stock) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.stock = stock;
    let revenue = 0;

    // Regular Function style 
    /* this.buy = function(qty) {
        if (qty <= this.stock) {
            this.stock -= qty; // Reduces stock by qty
            let costOfOrder = qty * this.cost; // Calculates cost
            revenue += costOfOrder; // Updates revenue
            console.log(qty + " of " + this.name + ": $" + costOfOrder); // Logs the order
        }
    }; */
    
    // Arrow-Function
    this.buy = qty => {
        if(qty <= this.stock) {
            // this.stock = this.stock - qty;
            this.stock -= qty;
            let costOfOrder = qty * this.cost;
            revenue += costOfOrder;
            console.log(`${qty} of ${this.name}: $${costOfOrder}`);
        } else {
            console.log(`We're out of stock...`);
        }
    };

    this.getStock = () => `Available Quantity (${this.name}): ${this.stock} units`;

    this.salesReport = () => `Total sales for ${this.name}: $${revenue}`;

};

const vPhone = new Product (
    'vPhone 12 Pro',
    'The fastest smartphone ever invented',
    800,
    25,
);

const tabBookPro = new Product (
    'Tab Book Pro v2',
    'Our thinnest tab',
    1250,
    40,
);

// Action

vPhone.buy(5);
vPhone.buy(3);
vPhone.buy(30);
vPhone.buy(10);

console.log(vPhone.getStock());
console.log(vPhone.salesReport());
//  Arrow function to calculate the total_cost_of_items_in_the_cart.js

const calculateTotalCost = (cart) => {
    //  Ensure Valid Input Value 
    if(!Array.isArray(cart) || cart.length === 0){
        console.log("Invalid Input plz provide proper array with unit price.");
        return null;
    }

// calculate the total cost 

const totalCost=cart.reduce ((sum, item)=> sum +(item.unitPrice * item.quantity), 0);

// return the total cost
return totalCost;

};

const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
];

const totalcost =calculateTotalCost(customerCart);

// display the result

console.log(`Total cost of items:$ ${totalcost}`);






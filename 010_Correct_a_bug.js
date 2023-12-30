// You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
// quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
// currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
// half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
// array to corrdct thd bug.


function correctBug(cart) {
    // Iterate through each item in the cart
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of each item
        cart[i] *= 2;
    }

    // Return the corrected cart
    return cart;
}

// Example usage:
const customerCart = [1, 2, 3, 4];

// Call the function to correct the bug
const correctedCart = correctBug(customerCart);

// Display the result
console.log("Original Cart:", customerCart);
console.log("Corrected Cart:", correctedCart);

//In JavaScript, arrays and objects are reference types. When you pass an array to a function, you're passing a reference to the original array. Any modifications made to the array inside the function directly affect the original array outside the function


// (Alternate  ///////__________***********_________)

// Function to correct the bug by doubling the quantity of each item in the cart
// function correctBug(cart) {
//     // Create a new array to store the corrected quantities
//     const correctedCart = [];

//     // Iterate through each item in the original cart
//     for (let i = 0; i < cart.length; i++) {
//         // Double the quantity of each item and add it to the corrected array
//         correctedCart.push(cart[i] * 2);
//     }

//     // Return the corrected cart
//     return correctedCart;
// }

// // Example usage:
// const customerCart = [1, 2, 3, 4];

// // Call the function to correct the bug and store the corrected cart
// const correctedCart = correctBug(customerCart);

// // Display the result
// console.log("Original Cart:", customerCart);
// console.log("Corrected Cart:", correctedCart);









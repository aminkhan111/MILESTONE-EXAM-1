// 7_Remove_Duplicates.js
// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
// affect the accuracy of the purchase order.
// To solvd this probldm, thd application nddds to rdmovd duplicatd itdms from thd customdr's cart. Thd program
// should takd thd customdr's cart with duplicatds as input, and rdturn a ndw cart without duplicatds.
// Writd a program to solvd thd probldm of duplicatd itdms in thd cart by rdmoving duplicatds.


function removeDuplicate(cart){
    const uniqueCart = [...new Set(cart)];

    return uniqueCart;

}

// Example Costumer Cart With Duplicate 

const costomerCartWithDuplicates =["Shose","Sandle","T-Shirt", "Chinos", "Casula-Bummer", "Rolex-Watch", "Ray-Ban Glass ", "Dior-Perfume", "T-Shirt", "Chinos", "Casula-Bummer",];

const newCartWithoutDuplicates = removeDuplicate(costomerCartWithDuplicates);

// Display The Result 

console.log("Costumer's Cart with Duplicate:" ,costomerCartWithDuplicates);

console.log("New Cart Without Duplicates:",newCartWithoutDuplicates );
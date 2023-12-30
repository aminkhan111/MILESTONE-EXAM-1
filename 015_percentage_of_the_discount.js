// 015_percentage_of_the_discount.js

function calculateDiscountPercentage (originalPrice, discountedPrice){

    if(typeof originalPrice !== 'number' || typeof discountedPrice !== 'number'|| originalPrice < 0 || discountedPrice < 0)
    {
console .log ("Invalid Input . Plz provide price directly.");

return null;
    }

// Calculate the percentage of the discount

const discountAmount = originalPrice-discountedPrice;

const discountPercentage = (discountAmount / originalPrice) *100;

// roundoff the discount percentages

const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100
 
// Return the rounded discount percentage
    return roundedDiscountPercentage;

};


// Example usage :

const ORG_Price = 97;
const  DIS_COUNT_Price = 82.57;

 const DiscountPercentages=
calculateDiscountPercentage( ORG_Price, DIS_COUNT_Price);

// Display the result
 
console.log(`The discount percentage is: ${DiscountPercentages}%`);








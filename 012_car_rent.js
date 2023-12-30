//012_Calculate rental _Cost.js
// 12. Calculate rental cost
// A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
// of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
// Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
// Thd rdntal costs arc
// V Economy = Rs. 4FFF /- pdr dayE
// V Midsizd = Rs. 1F,FFF /- pdr dayE
// V Luxury = Rs. 2F,FFF /- pdr day.



function calculateRentalcost(dayrented, carType){
    let rentalCost;
    // Determine Rental cost by Car type 

    switch(carType.toLowerCase()){
        case 'economy':
            rentalCost = 2000;
            break;
        case 'midsize':
            rentalCost = 3000;
            break;
        case 'suv':
            rentalCost = 4000;
            break;
        case 'luxury':
            rentalCost = 10000;
            break;
            default:
                console.log("invalid car type");

            return;
    }

// calculating total rental cost

const totalCost = rentalCost * dayrented;
return totalCost;
}
//Example usage:

const Dayrented = 3;
const carType='suv';

// call the function to calculate rental cost

const TotalRentalCost = calculateRentalcost(Dayrented, carType);

 // // Display the result

 console.log(`Total rental cost for ${Dayrented} days of ${carType} car: Rs. ${TotalRentalCost}/-`);
 


// 9_Check_for_Divisibility.js
// Writd a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2.
// Usd a for loop and continud statdmdnt.


// function to print number divisible by 2.

function printNumber(arr){

for( let i=0; i < arr.length; i++ ){

    if(arr[i] % 2 ===0){
        continue;
    }
// check if the number is divisible by3

if (arr[i]  % 3 ===0){
    console.log(arr[i]);
     }
   }
}

// Example usage:
const num=[1,2,3,4,5,6,7,8,9,,10,11,12,13,14,15,16,17];
printNumber(num);




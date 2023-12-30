// 3_Color_Mixer.js

// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// #ased on the following criteria"
// L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
// L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
// L If any other com#ination of colors is input, the program should print "Invalid color com#ination"Q



// color mixer function 

function mixColors(color1, color2){
    // convert color into uppper case for case insencetive compiarison

    color1=color1.toLowerCase();
    color2=color2.toLowerCase();



// variable to store resulting color
let resultingColor;

//// Use a switch statement to determine the resulting color based on the input colors

switch (`${color1}-${color2}`){
    case 'red-blue':
    case 'blue-red':
   resultingColor = 'purple';
   break; 
    case 'red-yellow':
    case 'yellow-red':
   resultingColor = 'orange';
   break; 
    case 'yellow-blue':
    case 'blue-yellow':
   resultingColor = 'green';
   break; 
   
   default:

// If the combination of colors is not one of the valid options, log an error message
            console.log("Invalid color combination");
            return; // Exit the function early for an invalid color combination

   
}

// Log the resulting color to the console
console.log(`Resulting Color: ${resultingColor}`);
}

//  Example usage:

const color1 = 'red';
const color2 = 'blue';

// Call the mixColors function with the example values
mixColors(color1, color2);
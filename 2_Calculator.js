// 2_Calculator.js

// Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
// to perform the operation on the two num#ersQ
// The calculator function should"
// L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
// L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
// L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
// operation and store the result in a varia#le called resultP
// L If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ



// calculator function
function calculator(num1, num2, operator){
    let result;

    // use switch statement to determine the operation based on the operator 
    switch (operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // check if the denominator is not zero to avoid division by zero
            if (num2 !== 0){
            result = num1 + num2;
            } else{
                console.log("Error: Division by zero is not allowed");
                return;// exit the function early if division by zero is attemted 
            }
            break;
default:
    // If the operator is not one of the valid operators, log an error message
    console.log("Invalid operator");
    return; // Exit the function early if an invalid operator is provided

    }
// log the result to the console
console.log(`Result: ${result}`);
}
// Example usage:
const number1 = 10;
const number2 = 5;
const operation = '*';

// Call the calculator function with the example values
calculator(number1, number2, operation);







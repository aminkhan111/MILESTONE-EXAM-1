// 5_Capitalize.js
// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changesQ
//-------------------------------------+++++----
// create a function to capitalize first letter of a name 


// use the ternary operator to check and capitalize the first letter if needed 

function capitalizeName(name){


const modifiedName = name[0].toLowerCase() === name[0]?name[0].toUpperCase() +name.slice(1) : name;

// return the modified or original name
 return modifiedName;
}
// Example usage:
const userName = "john";

// call the function to capitalize the first letter of the name 

const modifiedUserName = capitalizeName(userName);

// Display the result
 console .log (`Original Name : ${userName}`);

 console.log(`modified Name:${modifiedUserName}`);




///////////--------------------***********/////////


// name[0]: This extracts the first character of the name string. Strings in JavaScript are zero-indexed, so name[0] represents the first character.

// .toLowerCase(): This converts the first character to lowercase. This step is checking if the original first character is already lowercase.

// ===: This is the equality operator, checking if the lowercase version of the first character is equal to the original first character. It is used in the ternary operator to decide the subsequent actions.

// ?: This is the ternary operator, a concise way to write an if-else statement. If the condition before the ? is true, the expression immediately after the ? is executed; otherwise, the expression after the : is executed.

// name[0].toUpperCase() + name.slice(1): This is the expression to execute if the condition is true. It capitalizes the first letter by converting it to uppercase (name[0].toUpperCase()) and then concatenates the rest of the original string (name.slice(1)), starting from the second character.

// :: This separates the expressions to be executed based on whether the condition is true or false.

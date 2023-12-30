// 1_Password_ValiDator.js
// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleQ




// creating a function to velidate the password 

function validatePassword(password,confirmedPassword){

    // check if password match
    if(password === confirmedPassword){
        console.log("Password Matched. Password Validation Sucessful.");
        return true;
    } else {
        console.log ("Password Didn't match.Password validation 🥴 unsuccessful");
      return false; //password Not Match
    }
}
    // Example usage:
const enteredPassword = "securePassword123";
const confirmedPassword = "securePassword123";

// Calling the function to validate the password
const isPasswordValid = validatePassword(enteredPassword, confirmedPassword);


// further Action 
if (isPasswordValid){
   // Perform actions when the password is valid
   console.log("You can proceed with further actions.");
} else {
    // Perform actions when the password is not valid
    console.log("Please check your password and try again.");
}






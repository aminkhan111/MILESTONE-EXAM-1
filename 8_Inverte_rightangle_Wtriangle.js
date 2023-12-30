 // Inverte_rightangle_Wtriangle.js
//  pattern with asterisks
// Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
// with i rows.
// Invdrtdd right-angldd pattdrn:
 
 // Function to print an inverted right-angled triangle pattern
function printInvertedTrianglePattern(i) {
    // Iterate through each row
    for (let row = i; row >= 1; row--) {
        // Print asterisks based on the row number
        let pattern = '';
        for (let j = 1; j <= row; j++) {
            
            pattern += '* ';
        }
        // Log the pattern for the current row
        console.log(pattern);
    }
}

// Example usage:
const numRows = 6;

// Call the function to print the inverted right-angled triangle pattern
printInvertedTrianglePattern(numRows);

























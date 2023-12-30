// 6_Vowel_Counter.js
// We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
// countedQ


function countVowels(name){
    let vowelCount = 0;

    const lowercasedName = name.toLowerCase();

    for(let i= 0; i<lowercasedName.length; i++)
    {
if(['a','e','i','o','u'].includes(lowercasedName[i])){
    vowelCount++;
}
    }
    return vowelCount;

}

const personName = "Abdul Amin Khan";

// call the function to count the vowel 
const numberofVowels=countVowels(personName);
// Display the result 
console.log(`Number of vowels in the name"${personName}": ${numberofVowels}`);










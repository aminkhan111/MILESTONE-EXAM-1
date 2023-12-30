
// Function to convert Celsius to Fahrenheit

function CtoF(Cel){
    const far=(Cel*9/5)+32;
    return far;
}

const celsiusTemperature =25;

const far=CtoF(celsiusTemperature);

// Displaying the result 

console.log(`${celsiusTemperature} degree celciusis: ${far} Degree Fahrenheit.`);



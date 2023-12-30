// 4. Highest Marks
// A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marksQ


//  function find the highest mark 

function findHighestMark(marks){
    const highestMarks = Math.max(...marks);

    // Display the Highest marks to the teacher 
    console.log (`the highest mark onthe class is :${highestMarks}`);
}
// Example usage 
const studentMarks=[85,92,78,98,88,62];

 // calling highest mark 
 findHighestMark(studentMarks);





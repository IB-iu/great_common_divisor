/* 
This code implements the Euclidean algorithm, used to find the greatest common divisor 
(the largest positive integer that divides both numbers without leaving a remainder) of 
two positive integers.

The input to the program are two numbers and the output is the greatest common divisor.
*/

// Import and initialize the prompt-sync module used to request user input in terminal
const prompt = require("prompt-sync")();

// Ask for a first number, store it as an int, and cast it to an absolute number
var a = Math.abs(parseInt(prompt("Enter the first number (a): ")));
// Ask for a second number, store it as an int, and cast it to an absolute number
var b = Math.abs(parseInt(prompt("Enter the second number (b): ")));

// Function to get the remainder of the division between two numbers. The modulo operator would be equivalent to num1 - (num2 * num1/num2) 
function getRemainder(num1, num2) {
    return num1 % num2;
}

// The Euclidean algorithm requires a to be different than 0
if (a != 0) {
    // We divide b by a and get the initial remainder: b % a = r1
    var remainder = getRemainder(b,a);
    
    // We recursively calculate the remainders until it is 0
    while (remainder != 0) {
        // We reassign the last calculated remainder to be the previous_reminder
        previousRemainder = remainder;
        // We calculate the new remainder of the division of a and the previous_reminder
        remainder = getRemainder(a,previousRemainder);
        // We reassign the last calculated previous reminder to be a
        a = previousRemainder;
    }
// Print out the greatest common divisor, which is the value of a when the while loop finishes (when the remainder is 0)
console.log(`The greatest common divisor is ${a}.`)

// If the number provided as a is 0, the user needs to prompt a different number
} else {
    console.log(`The first number provided must not be 0.`);
}
// Exercise: 4. Reverse a string without using reverse().

// Problem Description in My Own Words
// For a input string, the result should be the last character first, the second last character second, ... the first character last.

// Input: String
// Output: String

// Assumptions
// - The input string can have any character
// - The reverse of an empty string is an empty string
// - If something else is input into the function, it is out of scope, unless automatically converted to a string

// Test Cases (2 - 4)
// Normal case:
// reverseString("String") -> gnirtS
// reverseString("Reverse this string") -> gnirts siht esreveR
// Case related to assumptions:
// reverseString("") -> ""
// Out of scope:
// reverseString({""}) -> no valid result

// Rough Plan / Subproblems
// - Go through the string character by character
// - Start with the last one and write it into a result variable
// - Continue with the second last one and append it to the result variable
// - Keep going until the first character of the input string is reached
// Next Step (Smallest Subproblem): No need to add unnecessary complexity (helper functions)

// Pseudocode for the Next Step
// Initialize the variable result as an empty string
// Initialize variable currentPosition as length of the input string - 1 (its last character)
// As long as currentPosition is >= 0  
// Append the character at the currentPosition to result
// Decrement currentPosition (by 1)
// Return the result

// Implementation
"use strict";

function reverseString(string) {
    let result = "";
    for (let currentPosition = string.length - 1; currentPosition >= 0; currentPosition--) {
        result += string.charAt(currentPosition);
    }
    return result;
}

console.log('reverseString("String")', reverseString("String"));
console.log('reverseString("Reverse this string")', reverseString("Reverse this string"));
console.log('reverseString("")', reverseString(""));

// Short Debug Log
// What did I change or learn?
// - If I build the core of the algorithm accordingly, no testing for exceptions is needed beforehand
// - If a variable only exists to monitor another variable, the variable itself can serve as the loop condition (keepGoing not needed here)

// Exercise: 6. Find the average of all even numbers in an array.

// Problem Description in My Own Words
// Identify all even numbers in a given array and calculate their average

// Input: Array of numbers
// Output: Average value (number)

// Assumptions
// - The result for an array without even numbers is 0 (also for totally empty arrays)
// - Even is defined as "number modulo 2 = 0" (4,3 ist not an even number and will be ignored)

// Test Cases (2 - 4)
// Normal case:
// averageOfEvenNumbers([2]) -> 2
// averageOfEvenNumbers([1, 2]) -> 2
// averageOfEvenNumbers([1, 2, 3, 4]) -> 3
// Edge / boundary case:
// averageOfEvenNumbers([2, "10"]) -> 2
// averageOfEvenNumbers(["10"]) -> 0
// Case related to assumptions:
// averageOfEvenNumbers([]) -> 0
// Out of scope:
// averageOfEvenNumbers(<Non-string inputs>) -> no valid result

// Rough Plan / Subproblems
// - Go through the input array element by element
// - For each element, check if it is even according to the definition from the assumptions
// - If it is, add its value to a sum variable
// - Also, increment a counter variable
// - If it is not, skip it and just continue with the next element
// - If there is no more next element, we are done and can return sum / counter
// Next Step (Smallest Subproblem): No need to add unnecessary complexity (helper functions)

// Pseudocode for the Next Step
// Create a variable called sum of type number that starts with the value 0.
// Create a variable called counter of type number that starts with the value 0.
// Repeat for each element of the array (as many times as its length)
    // If the current element % 2 = 0
        // Add element to sum
        // Increment counter
// If no even number was counted, return 0
// Otherwise, return sum / counter

// Implementation
"use strict";

function averageOfEvenNumbers(array) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number" && array[i] % 2 === 0) {
            sum += array[i];
            counter++;
        }
    }
    if (counter === 0) {
        return 0;
    } else {
        return sum / counter;
    }
}

console.log('averageOfEvenNumbers([2])', averageOfEvenNumbers([2]));
console.log('averageOfEvenNumbers([1, 2])', averageOfEvenNumbers([1, 2]));
console.log('averageOfEvenNumbers([1, 2, 3, 4])', averageOfEvenNumbers([1, 2, 3, 4]));
console.log('averageOfEvenNumbers([2, "10"])', averageOfEvenNumbers([2, "10"]));
console.log('averageOfEvenNumbers(["10"])', averageOfEvenNumbers(["10"]));
console.log('averageOfEvenNumbers([])', averageOfEvenNumbers([]));

// Short Debug Log
// What went wrong, if anything?
// - averageOfEvenNumbers([2, "10"]) returned "105" at first
// What did I change or learn?
// - By practicing, I got way faster/better since the first exercise
// - Comparison behaves differently from assignment/addition (string gets concatenated, not added)
// - Always test again, if changing even minor things (especially before committing)
// Exercises: 1. Find the second smallest distinct number in an array.

// Problem description in my own words
// When all unique values of an array would be sorted ascending, the second value is desired.

// Input / Output
// Array of numbers / number which is the second smallest, ignoring duplicates

// Assumptions
// - Array has at least two different values (not empty)
// - Every value in the array is a number
// - Numbers can be integer or float, positive or negative

// 2–4 test cases
// secondSmallestDistinctNumber([1, 2, 3, 4, 5]) -> 2 -> ok
// secondSmallestDistinctNumber([1, 1, 2, 2, 3, 4, 5]) -> 2 -> ok
// secondSmallestDistinctNumber([1, 2]) -> 2 -> ok
// secondSmallestDistinctNumber([-1, -2]) -> -1 -> ok
// Out of scope based on assumptions:
// secondSmallestDistinctNumber([1, 1]) -> no valid result

// Rough plan / subproblems
// - Get smallest number
// - Get smallest number that is different from the smallest number

// Pseudocode for the smallest next step
// function getSmallestNumber(array) {
    // Create a variable called result to store the current smallest number, starting with the first value of the array.
    // Compare each number after the first number to the result variable.
    // If a number from the array is smaller than the result variable, write it into the result variable.
    // Return the result variable.
// }

// Implementation
"use strict";

function getSmallestNumber(array) {
    let result = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < result) {
            result = array[i];
        }
    }
    return result;
}
// getSmallestNumber([1, 2, 3, 4, 5]) -> 1 -> ok
// getSmallestNumber([3, 2, 1]) -> 1 -> ok
// getSmallestNumber([-1, -2]) -> -2 -> ok

// Pseudocode for the smallest next step
// function secondSmallestDistinctNumber(array) {
    // Create a variable called smallestNumber of type number that starts with the value getSmallestNumber(array).
    // Create a variable called result of type number that starts with the value Infinity.
    // Perform for each of the arrays elements
    // If the current value equals the variable smallestNumber, skip it
    // If the current value is smaller than the variable result, write it into the variable result
    // Return the variable result
    // }
    
    
// Implementation
function secondSmallestDistinctNumber(array) {
    let smallestNumber = getSmallestNumber(array);
    let result = Infinity;
    for(let i = 0; i < array.length; i++) {
        if(array[i] === smallestNumber) {
        } else {
            if(array[i] < result) {
                result = array[i];
            }
        }
    }
    return result;
}

// Short debug log: What went wrong? Which assumption was tested?
// No implementation bugs encountered.
// Tested the assumption that duplicate smallest values are ignored.
// Tested that negative numbers work as expected.
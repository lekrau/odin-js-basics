// Exercise: 2. Count how many times a specific value appears in an array.

// Problem Description in My Own Words
// The count of a specified value in a list of values is requested.

// Input:
// - List of values
// - Value to be counted
// Output: Occurrences of the value

// Assumptions
// - List of values can be empty -> result 0
// - Value to be counted is a primitive value (not an object)
// - List of values can contain non-primitive values (comparing strict equality)

// Test Cases (2 - 4)
// Normal case:
// countValueOccurrences([1, 2, 3, 4, 5], 1) -> 1
// countValueOccurrences([1, 1, 2, 3, 4], 1) -> 2
// countValueOccurrences([1, 2, 3, 4, 1], 1) -> 2
// countValueOccurrences(["1", "2", 3, 4, "1"], "1") -> 2
// Edge / boundary case:
// countValueOccurrences([1, 2, 3, 4, 1], 5) -> 0
// countValueOccurrences([], 5) -> 0
// countValueOccurrences(["1", 1], "1") -> 1
// Out of scope:
// countValueOccurrences([1, 2], { value: 1 }) -> no valid result

// Rough Plan / Subproblems
// No added value in creating artificial complexity
// Next Step (Smallest Subproblem):
// Write the pseudocode algorithm directly because it is already the smallest useful subproblem

// Pseudocode for the Next Step
// Create a variable called counter of type number that starts with the value 0.
// Go through all values of the input list/array
// If the current value matches the value to be counted, add 1 to the counter variable
// If the current value does not match, leave the counter unchanged.
// When done with the whole array, return the counter

// Implementation
"use strict";

function countValueOccurrences(array, value) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            counter++;
        }
    }
    return counter;
}

console.log("countValueOccurrences([1, 2, 3, 4, 5], 1)", countValueOccurrences([1, 2, 3, 4, 5], 1));
console.log("countValueOccurrences([1, 1, 2, 3, 4], 1)", countValueOccurrences([1, 1, 2, 3, 4], 1));
console.log("countValueOccurrences([1, 2, 3, 4, 1], 1)", countValueOccurrences([1, 2, 3, 4, 1], 1));
console.log('countValueOccurrences(["1", "2", 3, 4, "1"], "1")', countValueOccurrences(["1", "2", 3, 4, "1"], "1"));
console.log("countValueOccurrences([1, 2, 3, 4, 1], 5)", countValueOccurrences([1, 2, 3, 4, 1], 5));
console.log("countValueOccurrences([], 5)", countValueOccurrences([], 5));
console.log('countValueOccurrences(["1", 1], "1")', countValueOccurrences(["1", 1], "1"));

// Short Debug Log
// - What went wrong, if anything? I accidentally assigned the value to be counted to the current array value in the if, instead of comparing them 
// - Which assumption was tested or confirmed? Empty input arrays return 0 for every value to be counted
// - What did I change or learn? Not every problem requires splitting into subproblems
// Exercise: 7. Remove duplicate values from an array.

// Problem Description in My Own Words
// Element of an array that have the same value as another element should be removed until all elements have unique values

// Input: Array (with duplicates)
// Output: Array (without duplicates)

// Assumptions
// - If the array has no duplicates, the argument is returned
// - For the input [1, 1, 2, 2, 3], the expected output is [1, 2, 3], not just [3]
// - Non-array arguments are out of scope
// - The array can contain any values that can be evaluated with ===
// - It doesn't matter if the input [1, 2, 1] returns [1, 2] or [2, 1]

// Test Cases (2 - 4)
// Normal case:
// removeDuplicates([1, 1, 2, 2, 3]) -> [1, 2, 3]
// removeDuplicates([1]) -> [1]
// removeDuplicates(["Hello", "Hello", "world"]) -> ["Hello", "world"]
// Edge / boundary case:
// removeDuplicates([]) -> []
// Case related to assumptions:
// removeDuplicates(["Hello", "hello", "world"]) -> ["Hello", "hello", "world"]
// Out of scope:
// removeDuplicates(<Non-array inputs>) -> no valid result

// Rough Plan / Subproblems
// - Identify the position of the next duplicate for a given element
// - When a duplicate was identified, remove it and search again for a duplicate
// - Done, when all elements don't have no more duplicates
// Next Step (Smallest Subproblem): findNextDuplicate(array, elementPosition)

// Pseudocode for the Next Step
// If elementPosition >= length of array
    // Return -1
// Else
    // Create a variable called currentPosition of type number that starts with the value elementPosition + 1.
    // As long as currentPosition <= length of array
        // If element at elementPosition === element at currentPosition
            // Return currentPosition
        // Increment currentPosition
    // Return -1

// Implementation
"use strict";

function findNextDuplicate(array, elementPosition) {
    if (elementPosition >= array.length) {
        return -1;
    } else {
        let testElement = array[elementPosition];
        for (let currentPosition = elementPosition +1; currentPosition < array.length; currentPosition++) {
            if (array[currentPosition] === testElement) {
                return currentPosition;
            }
        }
        return -1;
    }
}

// console.log('findNextDuplicate([1, 1], 0)', findNextDuplicate([1, 1], 0));
// console.log('findNextDuplicate([1, 1, 1], 0)', findNextDuplicate([1, 1, 1], 0));
// console.log('findNextDuplicate([2, 1, 1], 0)', findNextDuplicate([2, 1, 1], 0));
// console.log('findNextDuplicate([2], 0)', findNextDuplicate([2], 0));
// console.log('findNextDuplicate([], 0)', findNextDuplicate([], 0));

// Pseudocode for removeNextDuplicate(array)
// Create a variable called currentPosition of type number that starts with the value 0.
// For each element of the array
        // If not findNextDuplicate(currentElement) === -1
            // Then remove element at position findNextDuplicate(currentElement)
// Return the array
// LEARNING: Solving this problem showed me that I can skip this, as it almost solves its super problem

// Pseudocode for removeDuplicates()
// Create a variable called currentPosition of type number that starts with the value 0.
// For each element of the array
    // Create a variable keepGoing of type boolean that starts with the value true.
    // As long as keepGoing
        // If not findNextDuplicate(currentElement) === -1
            // Then remove element at position findNextDuplicate(currentElement)
            // Else keepGoing = false
// Return the array

function removeDuplicates(array) {
    for (let currentPosition = 0; currentPosition < array.length; currentPosition++) {
        let keepGoing = true;
        while (keepGoing) {
            let nextDuplicate = findNextDuplicate(array, currentPosition)
            if (!(nextDuplicate === -1)) {
                array.splice(nextDuplicate, 1);
            } else {
                keepGoing = false;
            }
        }
    }
    return array;
}

console.log('removeDuplicates([1, 1, 2, 2, 3])', removeDuplicates([1, 1, 2, 2, 3]));
console.log('removeDuplicates([1])', removeDuplicates([1]));
console.log('removeDuplicates(["Hello", "Hello", "world"])', removeDuplicates(["Hello", "Hello", "world"]));
console.log('removeDuplicates([])', removeDuplicates([]));
console.log('removeDuplicates(["Hello", "hello", "world"])', removeDuplicates(["Hello", "hello", "world"]));

// Short Debug Log
// What went wrong, if anything?
// - I tried to just safe the results of array.splice in the array args, which meant that after the first splice array had just one element (which should have been removed)
// -> Maybe try out unknown syntax in console first
// What did I change or learn?
// - Don't be stingy with variables as temporary memory, especially if the operation stored in it is used at least twice (also helps with debugging)
// - I can debug!!!
// - The input array is modified
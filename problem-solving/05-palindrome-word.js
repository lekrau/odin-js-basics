// Exercise: 5. Check whether a word is a palindrome.

// Problem Description in My Own Words
// Check wether the input word is identical, if the order of its letters is reversed

// Input: Word (string)
// Output: Boolean

// Assumptions (minimal version)
// - Capitalization should be ignored
// - An empty input word is a palindrome
// - The content of the input string doesn't matter (but if it contains e.g. spaces, they also need to have the same distance from front and end)
// - Other types that string as input are out of scope

// Test Cases (2 - 4)
// Normal case:
// isPalindrome("anna") -> true
// isPalindrome("Palindrome") -> false
// Case related to assumptions: 
// isPalindrome("Anna") -> true
// isPalindrome("Ana") -> true
// Potential future features:
// isPalindrome("Anni meide die Minna") -> true
// isPalindrome("Anni, meide die Minna!") -> true
// Out of scope:
// isPalindrome(<Non-string inputs>) -> no valid result

// Rough Plan / Subproblems
// - Convert the input to all lowercase (or uppercase)
// - Compare the last letter with the first letter, the second last with the second letter, etc.
// - If one pair doesn't match, return false
// - Do it until the letter from the end is equal to the letter from the beginning (alternative: until half of the word length is reached)
// - If all pairs match, return true
// - Potential additional feature: Remove all special characters, including spaces (separate function - sentencePalindrome)
// Next Step (Smallest Subproblem): No need to add unnecessary complexity (helper functions)

// Pseudocode for the Next Step
// Create a variable called lowerCase of type string that starts with the value word converted to lower case
// Create a variable called currentPosition of type number that starts with the value 0
// As long as currentPosition is < (lowerCase.length - 1 - currentPosition)
    // If the character of lowerCase at the currentPosition is not equal to the character at (lowerCase.length - 1 - currentPosition)
        // Return false;
// Return true;

// Implementation
"use strict";

function isPalindrome(word) {
    let lowerCase = word.toLowerCase();
    let wordLength = lowerCase.length;
    for (let currentPosition = 0; currentPosition < (wordLength - 1 - currentPosition); currentPosition++) {
        if (!(lowerCase.charAt(currentPosition) === lowerCase.charAt(wordLength - 1 - currentPosition))) {
            return false;
        }
    }
    return true;
}

console.log('isPalindrome("anna")', isPalindrome("anna"));
console.log('isPalindrome("Palindrome")', isPalindrome("Palindrome"));
console.log('isPalindrome("Anna")', isPalindrome("Anna"));
console.log('isPalindrome("Ana")', isPalindrome("Ana"));

// Short Debug Log
// What did I change or learn?
// I need to make sure to write down (or at least implement) what I (correctly) think of
// Assumptions are important and should be consistent with Test Cases and Pseudocode
// It's usually best to go for the minimal version first and potentially enhance it later
// Exercise: 8. Convert a sentence to title case.

// Problem Description in My Own Words
// Convert a sentence so that the first letter of each word is capitalized and all other letters are in lower case.

// Input: Sentence (string)
// Output: Sentence (string)

// Assumptions
// - An empty input sentence returns an empty output
// - Words are separated by exactly one space
// - Special characters are just left as they are
// - Input different from a string is out of scope
// - Optional future feature: Don't capitalize the first letter of minor words like articles (a, an, the), coordinating conjunctions (and, but, or), and short prepositions (in, on, to, of)

// Test Cases (2 - 4)
// Normal case:
// titleCaseSentence("hello world!") ->  "Hello World!"
// titleCaseSentence("Convert a sentence to title case.") ->  "Convert A Sentence To Title Case."
// Edge / boundary case:
// titleCaseSentence("Word") -> "Word"
// Case related to assumptions:
// titleCaseSentence("") -> ""
// Out of scope:
// titleCaseSentence(<Non-string inputs>) -> no valid result
// Potential future feature
// titleCaseSentence("Convert a sentence to title case.") -> "Convert a Sentence to Title Case."

// Rough Plan / Subproblems
// - Convert a word to title case
// - Go through the sentence and add word by word to a result variable
// - End, when there is no word left
// Next Step (Smallest Subproblem): titleCaseWord(word)

// Pseudocode for the Next Step
// Create a variable called result of type string that starts with the value word converted to lower case.
// Convert the first letter of result to upper case (is this possible using charAt? if not, potentially rebuild the word letter by letter)
// Return the result

// titleCaseWord("word") -> "Word"
// titleCaseWord("Word") -> "Word"
// titleCaseWord("") -> ""

// Implementation
"use strict";

function titleCaseWord(word) {
    let result = word.toLowerCase();
    result = result.replace(result.charAt(0), result.charAt(0).toUpperCase());
    return result;
}

// console.log('titleCaseWord("word")', titleCaseWord("word"));
// console.log('titleCaseWord("Word")', titleCaseWord("Word"));
// console.log('titleCaseWord("word ")', titleCaseWord("Word "));
// console.log('titleCaseWord("")', titleCaseWord(""));

// Pseudocode for titleCaseSentence(sentence)
// Create a variable called result of type string that starts with the value empty string.
// Create a variable called currentPosition of type number that starts with the value 0.
// As long as currentPosition < sentence.length
    // Create a variable called nextSpace of type number that starts with the value position of the next space.
    // If nextSpace is -1
        // Create a variable called wordEnd of type number that starts with the value sentence.length.
    // Else
        // Create a variable called wordEnd of type number that starts with the value nextSpace.
    // Append the identified word including the following space (currentPosition to wordEnd) converted to title case to the result variable
    // Set currentPosition = wordEnd + 1    
// Return the result

function titleCaseSentence(sentence) {
    let result = "";
    let wordEnd;
    for (let currentPosition = 0; currentPosition < sentence.length; currentPosition = wordEnd) {
        let nextSpace = sentence.indexOf(" ", currentPosition);
        if (nextSpace === -1) {
            wordEnd = sentence.length;
        } else {
            wordEnd = nextSpace + 1;
        }        
        result += titleCaseWord(sentence.slice(currentPosition, wordEnd));
    }
    return result;
}

console.log('titleCaseSentence("hello world!")', titleCaseSentence("hello world!"));
console.log('titleCaseSentence("Convert a sentence to title case.")', titleCaseSentence("Convert a sentence to title case."));
console.log('titleCaseSentence("Word")', titleCaseSentence("Word"));
console.log('titleCaseSentence("")', titleCaseSentence(""));

// Short Debug Log
// What did I change or learn?
// - Changing the first letter of a word to uppercase in the helper function with replace works, but is not the cleanest way
//   (better use indexOf(0) and combine it with the rest of the word) 
// - It is ok to be aware of minor fuzziness in the pseudocode (in this case regarding the exact positions)
//   if it is expected to be quickly solvable during implementation/debugging
// - Feature for minor words is not implemented on purpose to avoid scope creep
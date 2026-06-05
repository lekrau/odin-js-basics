// Exercise: 3. Return the longest word in a sentence.

// Problem Description in My Own Words
// Calculate the length of each word in a input sentence and return the word which is the longest.

// Input: Sentence
// Output: Word

// Assumptions
// - Input sentence is a string with words separated by single blanks
// - Words don't need to make sense and can contain any characters (also special)
// - If there are multiple words, which equally are the longest, return the first of them
// - If the sentence is made of just one word, return the whole sentence

// Test Cases (2 - 4)
// Normal case:
// longestWordInSentence("Hello Leon") -> Hello
// longestWordInSentence("Return the longest word in a sentence") -> sentence
// Edge / boundary case:
// longestWordInSentence("Hello world") -> Hello
// Case related to assumptions:
// longestWordInSentence("Hello world!") -> world!
// longestWordInSentence("Hell0 world") -> Hell0

// Rough Plan / Subproblems
// 1) Identify the words of a given sentence (separate them in an array)
    // a) Identify the first word of a sentence
    // b) Identify the following word of a sentence
// 2) Go through the words, check the length of each one and remember the highest length and the related word
// 3) If already one with the same length was identified, keep the old one
// Next Step (Smallest Subproblem): 1) a)

// Pseudocode for the Next Step
// function firstWord(sentence) {
    // Create a variable called wordEnd of type number that starts with the position of the first space in the sentence.
    // If there is no first space, return the input sentence.
    // Return the characters up to wordEnd.
// }

// Implementation
"use strict";

function firstWord(sentence) {
     let wordEnd = sentence.indexOf(" ");
     if(wordEnd === -1) {
        return sentence;
     } else {
        return sentence.slice(0, wordEnd);
     }
}
// firstWord("Return the longest word") -> Return
// firstWord("Hello") -> Hello
// console.log('firstWord("Return the longest word")', firstWord("Return the longest word"));
// console.log('firstWord("Hello")', firstWord("Hello"));

// Pseudocode for 1) b)
// function firstWordFrom(sentence, beginning) {
    // Create a variable called wordEnd of type number that starts with the position of the next space in the sentence from the beginning arg.
    // If there is no next space, return the input sentence up from the beginning arg.
    // Return the characters between the beginning arg and wordEnd.
// }

function firstWordFrom(sentence, beginning) {
    let wordEnd = sentence.indexOf(" ", beginning);
    if (wordEnd === -1) {
        return sentence.slice(beginning, sentence.length);
    } else {
        return sentence.slice(beginning, wordEnd);
    }
}
// firstWordFrom("Hello Leon", 0) -> Hello
// firstWordFrom("Hello Leon", 6) -> Leon
// firstWordFrom("Return the longest word", 11) -> longest
console.log('firstWordFrom("Hello Leon", 0)', firstWordFrom("Hello Leon", 0));
console.log('firstWordFrom("Hello Leon", 6)', firstWordFrom("Hello Leon", 6));
console.log('firstWordFrom("Return the longest word", 11)', firstWordFrom("Return the longest word", 11));

// Pseudocode for 1)
// function wordsOfSentence(sentence) {
    // Create a variable called result of type array that starts as an empty array.
    // Create a variable called keepRunning of type boolean that starts with the value true.
    // As long as keepRunning is true
        // Add the firstWord of sentence arg to the result variable
        // Check if there is a space after the first word (position = length of the last element of result)
        // If yes, cut the last identified word and the space after it out of the sentence arg
        // If no, set keepRunning to false
    // Return the result

    // OLD APPROACH
    // Create a variable called wordBeginning of type number that starts with the value 0.
    // Create a variable called wordEnd of type number that starts with the value 0.
    // As long as wordEnd is smaller than the length of the sentence
        // Search for the position of the next space and safe it to wordBeginning
        // Search for the position of the following space and safe it to wordEnd
        // Add the characters between 
// }
// wordsOfSentence("Hello Leon") -> ["Hello", "Leon"]
// wordsOfSentence("Return the longest word") -> ["Return", "the", "longest", "word"]
// wordsOfSentence("Hello") -> ["Hello"]

function wordsOfSentence(sentence) {
    // TODO TBD WEITER !!!
}

// Short Debug Log
// - What went wrong, if anything?
// - Which assumption was tested or confirmed?
// - What did I change or learn? Further subproblems become apparent after the rough plan, when starting to write the pseudocode for the subproblems identified up to this point
// https://javascript.info/array-methods#tasks

"use strict";

// #1 Translate border-left-width to borderLeftWidth
function camelize(str) {
    const words = str.split("-");
    let capitalizedWords = words.slice(1);
    capitalizedWords = capitalizedWords.map((string) => string[0].toUpperCase() + string.substring(1));
    return words[0] + capitalizedWords.join("");
}


// console.log(`camelize("background-color")`, camelize("background-color")); // 'backgroundColor'
// console.log(`camelize("list-style-image")`, camelize("list-style-image")); // 'listStyleImage'
// console.log(`camelize("-webkit-transition")`, camelize("-webkit-transition")); // 'WebkitTransition'

// #2 Filter range
function filterRange(arr, a, b) {
    return arr.filter((num) => num >= a && num <= b);
}

function randomArray(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.round(Math.random() * 100));
    }
    return result;
}

const arr = [5, 3, 8, 1];
const randomArr = randomArray(5);
const lowerBound = Math.round(Math.random() * 100);
const upperBound = Math.round(Math.random() * 100);
// console.log(`filterRange([5, 3, 8, 1], 1, 4)`, filterRange([5, 3, 8, 1], 1, 4));
// console.log(`filterRange([${array}], 25, 75)`, filterRange(array, 25, 75));
// console.log(`filterRange([${array}], ${lowerBound}, ${upperBound})`, filterRange(array, lowerBound, upperBound));

// #3 Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < a || element > b) {
            arr.splice(i,1);
            i--;
        }
    }
}

// console.log(arr);
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);
// console.log(randomArr);
// filterRangeInPlace(randomArr, 25, 75);
// console.log(randomArr);

// #4 Sort in decreasing order
// let arr2 = [5, 2, 1, -10, 8];
// let arr3 = [5, 2, 15];

// arr2.sort((a, b) => b - a);
// arr3.sort((a, b) => b - a);

// alert(arr2); // 8, 5, 2, 1, -10
// alert(arr3);

// #5 Copy and sort array
// function copySorted(arr) {
//     let copy = [];
//     arr.forEach(element => {
//        copy.push(element); 
//     });
//     copy.sort();
//     return copy;
// }

// function copySortedSolution(arr) {
//   return arr.slice().sort();
// }

// let arr4 = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr4);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr4 ); // HTML, JavaScript, CSS (no changes)

// #6 Shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const storage = array[i];
        array[i] = array[j];
        array[j] = storage;

        // Alternative short form
        // [array[i], array[j]] = [array[j], array[i]];
    }
}

// #7 Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    const result = [];
    for (const element of arr) {
        if (result.indexOf(element) === -1) {
            result.push(element);
        }
    }
    return result;
}

console.log(arr);
console.log(unique(arr));

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));
console.log([1, 2, 1, 3, 2]);
console.log(unique([1, 2, 1, 3, 2]));

for (let i = 0; i < 10; i++) {
    // shuffle(arr);
    // console.log(i, arr);
}
"use strict";

// Output even numbers in the loop
// https://javascript.info/while-for#output-even-numbers-in-the-loop

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Replace "for" with "while"
// https://javascript.info/while-for#replace-for-with-while

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// Repeat until the input is correct
//  https://javascript.info/while-for#repeat-until-the-input-is-correct

let keepGoing = true;
while (keepGoing) {
    let input = prompt("Enter a number greater than 100.","");
    if (input > 100 || input === "" || input === null) {
        keepGoing = false;
    } 
}

// Sample solution
// let num;
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// Output prime numbers
// https://javascript.info/while-for#output-prime-numbers

const upperLimit = 10;
// for (let i = 2; i <= upperLimit; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

function isPrime(number) {
    if (number === 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
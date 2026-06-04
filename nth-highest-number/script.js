"use strict";

function createRandomArray(length) {
    let result = new Array(length);
    for (let i = 0; i < length; i++) {
        result[i] = Math.round(Math.random() * 100); 
    }
    return result;
}

function getHighest(array) {
    let result = array[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= result) {
            result = array[i]; 
        }
    }
    return result;
}

function getHighestExcept(array, ignore) {
    let result = -Infinity;
    for(let i = 0; i < array.length; i++) {
        if(!(array[i] === ignore)) {
            if(array[i] >= result) {
                result = array[i]; 
        }
        }
    }
    return result;
}

function isIgnored(number, ignores) {
    for(let i = 0; i < ignores.length; i++) {
        if(ignores[i] === number) {
            return true;
        }
    }
    return false;
}

function getHighestExcepts(array, ignores) {
    let result = -Infinity;
    for(let i = 0; i < array.length; i++) {
        if(!isIgnored(array[i], ignores) && array[i] >= result) {
            result = array[i];
        }
    }
    return result;
}

function getThirdHighest(array) {
    const highest = getHighest(array);
    const secondHighest = getHighestExcept(array, highest);
    return getHighestExcepts(array, [highest, secondHighest]);
}

function getNthHighest(array, n) {
    let ignores = Array(n - 1);
    for(let i = 0; i < n - 1; i++) {
        ignores[i] = getHighestExcepts(array, ignores);
    }
    console.log(ignores);
    return getHighestExcepts(array, ignores);
}

let test1 = [1, 2, 3];
let test2 = [3, 2, 1];
let test3 = [5, 5, 4, 3];
let test4 = [100, 20, 100, 50, 40];
let numbers = createRandomArray(10);
let n = Math.round(Math.random() * 10);

// console.log("test1: ", test1);
// console.log(getHighest( test1));
// console.log(getHighestExcepts(test1, [3, 2]));
// console.log(getThirdHighest(test1));

// console.log("test2: ", test2);
// console.log(getHighest(test2));
// console.log(getHighestExcepts(test2, [3, 2]));
// console.log(getThirdHighest(test2));

// console.log("test3: ", test3);
// console.log(getHighest(test3));
// console.log(getHighestExcepts(test3, [5]));
// console.log(getThirdHighest(test3));

// console.log("test4: ", test4);
// console.log(getHighest(test4));
// console.log(getHighestExcepts(test4, [100]));
// console.log(getThirdHighest(test4));

console.log("getNthHighest([1, 2, 3], 1)", getNthHighest([1, 2, 3], 1));
console.log("getNthHighest([1, 2, 3], 2)", getNthHighest([1, 2, 3], 2));
console.log("getNthHighest([1, 2, 3], 3)", getNthHighest([1, 2, 3], 3));
console.log("getNthHighest([3, 2, 1], 3)", getNthHighest([3, 2, 1], 3));
console.log("getNthHighest([5, 5, 4, 3], 1)", getNthHighest([5, 5, 4, 3], 1));
console.log("getNthHighest([5, 5, 4, 3], 2)", getNthHighest([5, 5, 4, 3], 2));
console.log("getNthHighest([5, 5, 4, 3], 3)", getNthHighest([5, 5, 4, 3], 3));
console.log("getNthHighest([100, 20, 100, 50, 40], 3)", getNthHighest([100, 20, 100, 50, 40], 3));

console.log("numbers: ", numbers);
// console.log(getHighest(numbers));
// console.log(getHighestExcepts(numbers, [getHighest(numbers)]));
// console.log(getThirdHighest(numbers));
console.log("getNthHighest(numbers, ", n, ")",getNthHighest(numbers, n));
// https://www.theodinproject.com/lessons/foundations-loops-and-arrays#summary

function sumOfTripledEvens(array) {
    let evens = array.filter((num) => num % 2 === 0);
    let tripled = evens.map((num) => num * 3);
    return tripled.reduce((a, b) => a + b);
}

let array = [1, 2, 3, 4, 5];

console.log(array);
console.log(sumOfTripledEvens(array));
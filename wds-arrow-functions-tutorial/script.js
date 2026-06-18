// WEITER: Beispiele aus YT-Video vorab selbst in Arrowfunctions konvertieren
// https://youtu.be/h33Srr5J9nY?si=VWYPDqirpwKSMCz2

function sum (a, b) {
    return a + b;
}

let sum2 = (a, b) => {
    return a + b;
}

let sum3 = (a, b) => a + b;

function isPositive (number) {
    return number >= 0;
}

let isPositive2 = (number) => number >= 0;

let isPositive3 = number => number >= 0;

function randomNumber() {
    return Math.random();
}

let randomNumber2 = () => Math.random();

document.addEventListener('click', function()) {
    console.log('Click');
}

document.addEventListener('click', () => console.log('Click'));
'use strict';

// Task 1: What's the result of OR?
// alert( null || 2 || undefined );
// What is the code below going to output? -> 2

// Task 2: What's the result of OR'ed alerts? -> alert(1), alert(2)
// alert( alert(1) || 2 || alert(3) );

// Task 3: What is the result of AND? -> null
// alert( 1 && null && 2 );

// Task 4: What is the result of AND'ed alerts? -> alert(1), alert(undefined)
// alert( alert(1) && alert(2) );

// Task 5: The result of OR AND OR -> alert(3)
// alert( null || 2 && 3 || 4 );

// Task 6: Check the range between
// if (age >= 14 && age <= 90) {

// }

// Task 7: Check the range outside
// if (age < 14 || age > 90) {
    
// }
// if (!(age >= 14 && age <= 90)) {

// }

// Task 8: A question about "if"
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// Which of these alerts are going to execute? -> first, third
// What will the results of the expressions be inside if(...)? -> true, false, true

// Task 9: Check the login
let login = prompt("Who's there?", "");
if (login === '' || login === null) {
    alert("Canceled");
} else if (login === "Admin") {
    let password = prompt("Password?", "");
    if (password === '' || password === null) {
        alert("Canceled");
    } else if (password === "TheMaster") {
        alert("Welcome!");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I don't know you");
}
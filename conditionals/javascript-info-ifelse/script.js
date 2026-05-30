'use strict';

// Task 1: if (a string with zero)
// if ("0") {
//   alert( 'Hello' );
// }
// Will alert be shown? -> Yes

// Task 2: The name of JavaScript
// let task2 = prompt('What is the “official” name of JavaScript?','');
// if (task2 === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don’t know? ECMAScript!");
// }

// Task 3: Show the sign
// let task3 = prompt("Give me a number!");

// if (task3 > 0) {
//   alert(1);
// } else if (task3 < 0) {
//   alert(-1)
// } else if (task3 == 0) {
//   alert(0);
// } else {
//   alert(NaN);
// }

// Task 4: Rewrite 'if' into '?'
// let result = (a + b < 4) ? 'Below' : 'Over';

// Task 5: Rewrite 'if..else' into '?'
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
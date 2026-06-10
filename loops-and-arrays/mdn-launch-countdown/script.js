// Exercise: MDN Implementing a launch countdown
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#implementing_a_launch_countdown

// Implementation
"use strict";

const output = document.querySelector(".output");
output.textContent = "";

for (let i = 10; i >= 0; i--) {
    const para = document.createElement('p');
    if (i === 10) {
        para.textContent = "Countdown " + i;
    } else if (i === 0) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = i;
    }
    output.appendChild(para);
}
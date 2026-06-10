// Exercise: MDN Filling in a guest list
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#filling_in_a_guest_list

// Implementation
"use strict";

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// Practice of the for...of loop
for (const person of people) {
    if (person === "Phil" || person === "Lola") {
        refused.textContent += person + ", ";
    } else {
        admitted.textContent += person + ", ";
    }   
}

// No comma at the end of the lists
const trailingCommaAndSpaceLength = 2;
refused.textContent = refused.textContent.slice(0, refused.textContent.length - trailingCommaAndSpaceLength) + ".";
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - trailingCommaAndSpaceLength) + ".";
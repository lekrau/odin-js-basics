"use strict";

// Task 1: Is "else" required?
function checkAge1(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return 'Did parents allow you?';
}
}
function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return 'Did parents allow you?';
}
// Is there any difference in the behavior of these two variants? -> No

// Task 2: Rewrite the function using '?' or '||'
function checkAge3(age) {
    return (age > 18) ?  true : 'Did parents allow you?';
}
function checkAge4(age) {
    return age > 18 || 'Did parents allow you?';
}

// Task 3: Function min(a, b)
function min(a,b) {
    if (a < b) {
        return a;
    } else if (a >= b) {
        return b;
    } /* else if (a === b) {
         return a;
    }*/ else {
        return undefined;
    }
}
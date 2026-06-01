function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// Replace Function Expressions with arrow functions
let ask2 = (question, yes, no) => confirm(question) ? yes() : no();

ask2(
  "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redText = document.createElement("p");
redText.textContent = "Hey I’m red!";
container.appendChild(redText);
redText.style.color = "red";

const blueH3 = document.createElement("h3");
blueH3.textContent = "I’m a blue h3!";
container.appendChild(blueH3);
blueH3.setAttribute("style", "color: blue;");

const pinkDiv = document.createElement("div");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "1px solid black";
const divH1 = document.createElement("h1");
divH1.textContent = "I’m in a div";
const divP = document.createElement("p");
divP.textContent = "ME TOO!";
container.appendChild(pinkDiv);
pinkDiv.appendChild(divH1);
pinkDiv.appendChild(divP);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World");
});

// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
// METHODS 2 & 3
const btn4 = document.querySelector("#btn4");

// METHOD 2
btn4.onclick = alertFunction;

// METHOD 3
// btn4.addEventListener("click", alertFunction);

btn4.addEventListener("click", function (e) {
  console.log(e);
  e.target.style.backgroundColor = "green";
});

// MDN https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_objects
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

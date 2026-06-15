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
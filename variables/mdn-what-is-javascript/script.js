function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.getElementById("button");

button.addEventListener("click", updateName);
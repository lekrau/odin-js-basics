const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // ADD CONDITIONAL HERE

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");

const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  switch (month) {
  case "February":
    days = 28;
    break;

  case "April":
    days = 30;
    break;

  case "June":
    days = 30;
    break;

  case "September":
    days = 30;
    break;

  case "November":
    days = 30;
    break;

  default:
    // Redundant
    days = 31;
    break;
  }

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

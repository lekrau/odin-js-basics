const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
    const choice = select.value;
    let bgColor = "white";
    let textColor = "black";

  // ADD SWITCH STATEMENT
  switch (choice) {
    case "black":
        bgColor = "black";
        textColor = "white";
        break;
    case "purple":
        bgColor = "purple";
        textColor = "#008000";
        break;
    case "yellow":
        bgColor = "yellow";
        textColor = "#0000FF";
        break;
    case "psychedelic":
        bgColor = "#E713EF";
        textColor = "#1812FA";
        break;
  }
  
  update(bgColor, textColor);
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
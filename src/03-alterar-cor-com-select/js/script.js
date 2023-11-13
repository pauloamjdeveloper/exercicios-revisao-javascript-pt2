const inputColor = document.getElementById("color-select");

const colorRed = "#FF0000";
const colorGreen = "#00FF00";
const colorBlue = "#1E90FF";
const colorYellow = "#FFFF00";
const colorWhite = "#FFFFFF";

inputColor.addEventListener("change", function () {
  let selectedColor = inputColor.value;

  if (selectedColor === "red") {
    document.body.style.backgroundColor = colorRed;
  } else if (selectedColor === "green") {
    document.body.style.backgroundColor = colorGreen;
  } else if (selectedColor === "blue") {
    document.body.style.backgroundColor = colorBlue;
  } else if (selectedColor === "yellow") {
    document.body.style.backgroundColor = colorYellow;
  } else {
    document.body.style.backgroundColor = colorWhite;
  }
});
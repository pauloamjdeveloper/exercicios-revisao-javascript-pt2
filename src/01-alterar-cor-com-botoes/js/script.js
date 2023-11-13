const buttonRed = document.getElementById("button-red");
const buttonGreen = document.getElementById("button-green");
const buttonBlue = document.getElementById("button-blue");
const buttonYellow = document.getElementById("button-yellow");

const colorRed = "#FF0000";
const colorGreen = "#00FF00";
const colorBlue = "#1E90FF";
const colorYellow = "#FFFF00";

buttonRed.addEventListener("click", function () {
  document.body.style.backgroundColor = colorRed;
});

buttonGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = colorGreen;
});

buttonBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = colorBlue;
});

buttonYellow.addEventListener("click", function () {
  document.body.style.backgroundColor = colorYellow;
});
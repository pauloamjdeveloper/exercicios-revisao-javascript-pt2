const paragraph = document.getElementById("paragraph");

const colorBlack = "#000000";
const colorWhite = "#FFFFFF";

let fontColor = colorBlack;
let backgroundColor = colorWhite;

function changeTextColor() {
  fontColor = fontColor === colorBlack ? colorWhite : colorBlack;
  paragraph.style.color = fontColor;
}

function changeBackgroundColor() {
  backgroundColor = backgroundColor === colorWhite ? colorBlack : colorWhite;
  paragraph.style.backgroundColor = backgroundColor;
}
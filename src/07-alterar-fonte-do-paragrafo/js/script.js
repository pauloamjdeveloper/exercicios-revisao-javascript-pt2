const paragraph = document.getElementById("paragraph");

const colorBlack = "#000000";
const colorWhite = "#FFFFFF";

let fontColor = colorBlack;
let backgroundColor = colorWhite;
let currentSize = window.getComputedStyle(paragraph, null).getPropertyValue("font-size");

function changeTextColor() {
  fontColor = fontColor === colorBlack ? colorWhite : colorBlack;
  paragraph.style.color = fontColor;
}

function changeBackgroundColor() {
  backgroundColor = backgroundColor === colorWhite ? colorBlack : colorWhite;
  paragraph.style.backgroundColor = backgroundColor;
}

function increaseFontSize() {
  currentSize = (parseFloat(currentSize) + 1) + "px";
  paragraph.style.fontSize = currentSize;
}

function decreaseFontSize() {
  currentSize = (parseFloat(currentSize) - 1) + "px";
  paragraph.style.fontSize = currentSize;
}
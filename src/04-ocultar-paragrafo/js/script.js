const inputParagraph = document.getElementById("paragraph");
const button = document.getElementById("action-button");

button.addEventListener("click", function () {
  if (inputParagraph.style.display === "none" || inputParagraph.style.display === "") {
    inputParagraph.style.display = "block";
  } else {
    inputParagraph.style.display = "none";
  }
});
const form = document.getElementById("input-form");
const checkboxes = form.querySelectorAll("input[type=checkbox]");
const button = document.getElementById("button-selected");
const resultMessage = document.getElementById("message");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateButton);
});

function updateButton() {
    let checkboxesSelected = Array.from(checkboxes).filter(checkbox => checkbox.checked);

    if (checkboxesSelected.length >= 2) {
        button.removeAttribute("disabled");
    } else {
        button.setAttribute("disabled", "true");
    }
}

button.addEventListener("click", () => {
    let checkboxesSelected = Array.from(checkboxes).filter(checkbox => checkbox.checked);
    
    if (checkboxesSelected.length >= 2) {
        resultMessage.textContent = "Itens selecionados com sucesso!";
    }
});
const physicalPerson = document.getElementById("physical-person");
const legalPerson = document.getElementById("legal-person");

const name = document.getElementById("name");
const cpf = document.getElementById("cpf");
const cnpj = document.getElementById("cnpj");
const birthDate = document.getElementById("birth-date");
const address = document.getElementById("address");
const zipCode = document.getElementById("zip-code");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const register = document.getElementById("register-button");
const cancel = document.getElementById("cancel-button");

const message = document.getElementById("result");

const registerClient = function (event) {
  event.preventDefault();

  if (physicalPerson.checked) {
    window.location.href = "sent-client.html";
  } else if (legalPerson.checked) {
    window.location.href = "sent-client.html";
  } else {
    message.textContent = "Preencha todos os campos disponíveis.";
  }
}

const validatePhysicalPerson = function () {
  if (physicalPerson.checked) {
    cpf.removeAttribute("disabled");
    birthDate.removeAttribute("disabled");
    zipCode.removeAttribute("disabled");
    cnpj.setAttribute("disabled", true);
  }
}

const validateLegalPerson = function () {
  if (legalPerson.checked) {
    cnpj.removeAttribute("disabled");
    cpf.setAttribute("disabled", true);
    birthDate.setAttribute("disabled", true);
    zipCode.removeAttribute("disabled");

  }
}

const resetPage = function () {
  window.location.reload();
}

function goBack() {
  window.location.href = "index.html";
}

physicalPerson.addEventListener("change", validatePhysicalPerson);
legalPerson.addEventListener("change", validateLegalPerson);

register.addEventListener("click", registerClient);
cancel.addEventListener("click", resetPage);
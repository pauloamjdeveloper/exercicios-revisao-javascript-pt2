function registerUser() {
  const username = document.getElementById("user-name").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const message = document.getElementById("result");

  if (!username || !password || !confirmPassword) {
    message.textContent = "Por favor, preencha todos os campos.";
    return false;
  }

  if (password.length < 6 || password.length > 10) {
    message.textContent = "A senha deve conter entre 6 e 10 caracteres.";
    return false;
  }

  if (password !== confirmPassword) {
    message.textContent = "As senhas não coincidem. Tente novamente.";
    return false;
  }

  window.location.href = "sent-user.html";
}

function cancel() {
  location.reload();
}

function goBack() {
  window.location.href = "index.html";
}
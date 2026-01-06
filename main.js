
const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Заполните логин и пароль");
    return;
  }

  // 1️⃣ получаем старых пользователей
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // 2️⃣ добавляем нового
  users.push({
    username,
    password
  });

  // 3️⃣ сохраняем обратно
  localStorage.setItem("users", JSON.stringify(users));

  alert("Пользователь сохранён");

  form.reset();
});


const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";

    passwordInput.type = isPassword ? "text" : "password";
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");
});
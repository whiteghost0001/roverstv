const form = document.getElementById("signup-form");
const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");


togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", type === "password" ? "text" : "password");
  togglePassword.textContent = type === "password" ? "🙈" : "👁️";
});

const form = document.getElementById("signup-form");
const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

// Password visibility toggle
togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute("type", type === "password" ? "text" : "password");
  togglePassword.textContent = type === "password" ? "🙈" : "👁️";
});


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  if (!username || !email || !password) {
    alert("All fields are required!");
    return;
  }

  
  alert(`Welcome to Rovers TV, ${username}!`);
  form.reset();
});

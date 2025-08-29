document.addEventListener("DOMContentLoaded", function () {
  // ----------------- Theme Toggle --------------
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  // Check for saved theme preference or respect OS preference
  const savedTheme = localStorage.getItem("theme");
  const osPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (osPrefersDark ? "dark" : "light");

  // Apply initial theme
  htmlElement.setAttribute("data-bs-theme", initialTheme);
  themeIcon.textContent = initialTheme === "dark" ? "☀️" : "🌙"; // Set icon based on initial theme

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      // Apply new theme
      htmlElement.setAttribute("data-bs-theme", newTheme);

      // Update icon
      themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";

      // Save preference
      localStorage.setItem("theme", newTheme);
    });
  }

  // ----------------- main --------------
  console.log("Public page loaded");

  // ------------------ login ---------------
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const remember = document.getElementById("remember").checked;

      // Simple validation
      if (!email || !password) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      // In a real application, you would send this data to your server
      // For now, we simulate a successful login and redirect to /admin
      console.log("Login attempt with:", { email, password, remember });
      
      // Simulate login process and redirect to admin
      // window.location.href = '/admin'; // Uncomment when backend is ready
      // For now, simulate and redirect
      alert("Inicio de sesión exitoso. Redirigiendo al panel de administración...");
      window.location.href = '/admin'; // Redirect to admin
    });
  }

  // ----------------- register -------------
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const terms = document.getElementById("terms").checked;

      // Simple validation
      if (!name || !email || !password || !confirmPassword) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      if (!terms) {
        alert("Debe aceptar los Términos y Condiciones.");
        return;
      }

      // In a real application, you would send this data to your server
      // For now, we simulate a successful registration and redirect to /admin
      console.log("Registration attempt with:", {
        name,
        email,
        password,
        terms,
      });

      // Simulate registration process and redirect to admin
      // window.location.href = '/admin'; // Uncomment when backend is ready
      // For now, simulate and redirect
      alert("Registro exitoso. Redirigiendo al panel de administración...");
      window.location.href = '/admin'; // Redirect to admin
    });
  }
});

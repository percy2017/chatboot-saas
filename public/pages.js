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

  // ----------------- Logout desde el área pública --------------
  const publicLogoutButton = document.getElementById("publicLogoutButton");
  if (publicLogoutButton) {
    publicLogoutButton.addEventListener("click", function (e) {
      e.preventDefault();

      fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "Sesión cerrada correctamente.") {
            // Recargar la página para reflejar el cambio de estado
            window.location.reload();
          } else {
            alert(data.message || "Error al cerrar sesión.");
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert("Error de conexión con el servidor.");
        });
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

      // Enviar datos al servidor
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.message === "Inicio de sesión exitoso.") {
            // Recargar la página para reflejar el cambio de estado o redirigir
            window.location.reload(); // O window.location.href = '/'; 
          } else {
            // Mostrar mensaje de error
            alert(data.message || "Error desconocido en el inicio de sesión.");
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert("Error de conexión con el servidor.");
        });
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
      window.location.href = '/admin'; // Redirect to admin
    });
  }
});

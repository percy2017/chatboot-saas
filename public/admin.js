// Admin Panel Specific JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // Apply the saved theme or OS preference for the admin panel
    const savedTheme = localStorage.getItem("theme");
    const osPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (osPrefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-bs-theme", initialTheme);
    
    // Update theme icon if it exists on the page
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
        themeIcon.textContent = initialTheme === "dark" ? "☀️" : "🌙";
    }

    // Re-initialize theme toggle functionality for the admin panel
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const currentTheme = document.documentElement.getAttribute("data-bs-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-bs-theme", newTheme);
            
            // Update icon if it exists
            if (themeIcon) {
                themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
            }
            
            // Save preference
            localStorage.setItem("theme", newTheme);
        });
    }
});
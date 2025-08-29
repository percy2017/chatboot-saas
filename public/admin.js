// Admin Panel Specific JavaScript

(function () {
    'use strict';

    // --- Theme Handling ---
    const THEME_KEY = 'chatbot-saas-admin-theme';
    const THEME_ICON_ID = 'admin-theme-icon';
    const THEME_TOGGLE_ID = 'admin-theme-toggle';

    /**
     * Gets the currently stored theme from localStorage or defaults to 'light'.
     * @returns {string} The theme ('light' or 'dark').
     */
    function getStoredTheme() {
        return localStorage.getItem(THEME_KEY) || 'light';
    }

    /**
     * Saves the specified theme to localStorage.
     * @param {string} theme - The theme to save ('light' or 'dark').
     */
    function setStoredTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }

    /**
     * Applies the specified theme to the document element.
     * @param {string} theme - The theme to apply ('light' or 'dark').
     */
    function setTheme(theme) {
        if (theme !== 'light' && theme !== 'dark') {
            console.warn(`Invalid theme '${theme}'. Defaulting to 'light'.`);
            theme = 'light';
        }
        document.documentElement.setAttribute('data-bs-theme', theme);
        
        // Update icon
        const themeIcon = document.getElementById(THEME_ICON_ID);
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    /**
     * Toggles the theme between 'light' and 'dark'.
     */
    function toggleTheme() {
        const currentTheme = getStoredTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setStoredTheme(newTheme);
        setTheme(newTheme);
    }

    /**
     * Initializes the theme based on stored preference or system preference.
     */
    function initTheme() {
        const storedTheme = getStoredTheme();
        // If no theme is stored, check system preference
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const theme = systemPrefersDark ? 'dark' : 'light';
            setStoredTheme(theme);
            setTheme(theme);
        } else {
            setTheme(storedTheme);
        }
    }

    // --- Logout Handling ---
    function handleLogoutClick(event) {
        event.preventDefault();
        fetch('/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Sesión cerrada correctamente.") {
                window.location.href = '/login';
            } else {
                alert(data.message || "Error al cerrar sesión.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error de conexión con el servidor.");
        });
    }

    // --- User Info Handling ---
    function loadUserInfo() {
        const userNameElement = document.getElementById('adminUserName');
        if (!userNameElement) return; // Element not on this page

        fetch('/api/user')
            .then(response => response.json())
            .then(user => {
                if (user.name) {
                    userNameElement.textContent = user.name;
                } else {
                    userNameElement.textContent = "Usuario";
                }
            })
            .catch(error => {
                console.error('Error al obtener información del usuario:', error);
                userNameElement.textContent = "Usuario"; // Fallback
            });
    }

    // --- DOMContentLoaded Event ---
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize theme
        initTheme();

        // Setup theme toggle button
        const themeToggle = document.getElementById(THEME_TOGGLE_ID);
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        } else {
            console.warn('Theme toggle button not found');
        }

        // Setup logout button
        const logoutButton = document.getElementById('adminLogoutButton');
        if (logoutButton) {
            logoutButton.addEventListener('click', handleLogoutClick);
        }

        // Load user info
        loadUserInfo();
    });

    // Also initialize theme immediately in case DOM is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        // DOM is already loaded
        initTheme();
    }

})();
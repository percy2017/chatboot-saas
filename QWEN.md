# Project Context for Qwen Code

## Project Overview

This project is a **Node.js web application** for a **Software as a Service (SaaS) ChatBot platform**. The main goal is to create a web-based interface for managing AI chatbots.

### Key Technologies

- **Backend:** Node.js with Express.js (v5.1.0)
- **Frontend:** EJS templating engine, Bootstrap 5, Vanilla JavaScript
- **Real-time Communication:** Socket.IO (v4.8.1)
- **Database:** SQLite (mentioned in README, but not directly visible in core files)
- **API Integration:** Evolution API (v1.8.2) (mentioned in README)
- **Development Server:** Nodemon for hot-reloading during development

### Architecture

The application follows a standard structure:
- `server.js` is the main entry point, setting up the Express server and Socket.IO.
- Routes are defined in `server.js` for serving pages and handling API/webhook requests (e.g., `/`, `/login`, `/register`, `/webhook`).
- Views are rendered using EJS templates located in the `views/` directory. Common layout elements like headers and footers are in `views/pages/`.
- Static assets (CSS, JS, images) are served from the `public/` directory.
- The frontend uses Bootstrap 5 for styling and responsiveness.

### Features (Planned)

1.  **Frontend (Phase 1):**
    - Main landing page (`/`)
    - Login page (`/login`)
    - Registration page (`/register`)
2.  **Dashboard (Phase 2 - Partially Planned):**
    - Main dashboard
    - Instance management
    - User management
3.  **Multi-user Support:** Distinguishes between admin and client roles (planned).
4.  **Responsive Design:** Utilizes Bootstrap 5 for full responsiveness.

## Development Workflow

### Running the Application

- **Production Mode:** `npm start` (runs `node server.js`)
- **Development Mode (with hot-reload):** `npm run dev` (runs `nodemon server.js`)
- The server listens on port `4002`.

### Building

There is no explicit build step defined beyond running the Node.js application. Dependencies are managed via `npm`.

### Testing

No test scripts or frameworks are configured in `package.json`. Testing practices are not evident from the provided files.

## Code Conventions

- **JavaScript Style:** Uses ES Modules (ESM) (`import`/`export`) as indicated by `"type": "module"` in `package.json` and `import` statements in `server.js`.
- **Templating:** EJS is used for server-side rendering of HTML pages. Templates are organized in `views/`, with common components like header/footer included in page templates.
- **Frontend JS:** Client-side JavaScript logic for interactive elements (like login/register forms) is located in `public/pages.js`. It uses standard event listeners and DOM manipulation.
- **Styling:** Bootstrap 5 is the primary CSS framework. Custom styles can be added to `public/pages.css`.
- **Static Assets:** Static files (CSS, JS, images) are placed in the `public/` directory and are served automatically by Express.
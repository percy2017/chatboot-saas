import express from 'express';
import { getDatabase } from '../database/db.js';

const router = express.Router();

// Función para obtener información del usuario logueado desde la sesión
function getLoggedInUser(req) {
  if (req.session.userId) {
    return {
      id: req.session.userId,
      email: req.session.userEmail,
      name: req.session.userName,
      role: req.session.userRole,
    };
  }
  return null;
}

// Middleware para verificar autenticación
function requiresAuth(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect('/login');
}

// Ruta para la página principal
router.get('/', (req, res) => {
  const user = getLoggedInUser(req);
  res.render('pages/main', { user, activeTab: 'home' });
});

// Ruta para el panel de administración
router.get('/admin', requiresAuth, async (req, res) => {
  res.render('admin/main', { activeTab: 'dashboard' });
});

// Ruta para obtener información del usuario logueado
router.get('/api/user', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'No autenticado.' });
  }

  res.json({
    id: req.session.userId,
    email: req.session.userEmail,
    name: req.session.userName,
    role: req.session.userRole,
  });
});

export default router;
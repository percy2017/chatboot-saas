import express from 'express';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../database/models/userModel.js';

const router = express.Router();

// Ruta para mostrar la página de login
router.get('/login', (req, res) => {
  // Verificar si el usuario ya está logueado
  if (req.session.userId) {
    return res.redirect('/admin');
  }
  res.render('pages/login', { activeTab: 'login' });
});

// Ruta para mostrar la página de registro
router.get('/register', (req, res) => {
  res.render('pages/register', { activeTab: 'register' });
});

// Ruta para login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Por favor, complete todos los campos.' });
    }

    // Buscar usuario por email
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // Verificar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    // Guardar información del usuario en la sesión
    req.session.userId = user.id;
    req.session.userEmail = user.email;
    req.session.userName = user.name;
    req.session.userRole = user.role;

    // Devolver información del usuario logueado
    res.json({
      message: 'Inicio de sesión exitoso.',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

// Ruta para logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
      return res.status(500).json({ message: 'Error al cerrar sesión.' });
    }
    res.json({ message: 'Sesión cerrada correctamente.' });
  });
});

export default router;
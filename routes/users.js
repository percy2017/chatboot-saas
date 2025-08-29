import express from 'express';
import { 
  getAllUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} from '../database/models/userModel.js';

const router = express.Router();


function requireAdmin(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  
  if (req.session.userRole !== 'admin') {
    return res.status(403).send('Acceso denegado. Se requiere rol de administrador.');
  }
  
  next();
}

router.get('/users', requireAdmin, async (req, res) => {
  try {
    const users = await getAllUsers();
    res.render('admin/users', { users, activeTab: 'users' });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error interno del servidor');
  }
});


router.post('/users', requireAdmin, async (req, res) => {
  try {
    const { email, password, name, role } = req.body;
    
    // Validación básica
    if (!email || !password || !name || !role) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
    
    // Crear el usuario
    const newUser = await createUser({ email, password, name, role });
    
    // Si es una solicitud AJAX, responder con JSON
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      res.json({ message: 'Usuario creado exitosamente.', user: newUser });
    } else {
      // Si no es AJAX, redirigir a la lista de usuarios
      res.redirect('/admin/users');
    }
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

router.post('/:id', requireAdmin, async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, password, name, role } = req.body;
    
    // Preparar datos para actualizar (solo incluir campos que no estén vacíos)
    const updateData = {};
    if (email) updateData.email = email;
    if (name) updateData.name = name;
    if (role) updateData.role = role;
    if (password) updateData.password = password; // La contraseña se hasheará en la función updateUser
    
    // Actualizar el usuario
    const updatedUser = await updateUser(userId, updateData);
    
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    
    // Si es una solicitud AJAX, responder con JSON
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      res.json({ message: 'Usuario actualizado exitosamente.', user: updatedUser });
    } else {
      // Si no es AJAX, redirigir a la lista de usuarios
      res.redirect('/admin/users');
    }
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

router.post('/:id/delete', requireAdmin, async (req, res) => {
  try {
    const userId = req.params.id;
    
    // No permitir que un administrador se elimine a sí mismo
    if (userId == req.session.userId) {
      return res.status(400).json({ message: 'No puedes eliminarte a ti mismo.' });
    }
    
    const deleted = await deleteUser(userId);
    
    if (!deleted) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    
    // Si es una solicitud AJAX, responder con JSON
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      res.json({ message: 'Usuario eliminado exitosamente.' });
    } else {
      // Si no es AJAX, redirigir a la lista de usuarios
      res.redirect('/admin/users');
    }
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

export default router;
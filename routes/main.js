import express from 'express';
import { getDatabase } from '../database/db.js';
import { getAllInstancesWithStats } from '../database/models/instanceModel.js';
import { getMessagesByInstance } from '../database/models/messageModel.js';
import { getContactsByInstance } from '../database/models/contactModel.js';
import { getChatsByInstance } from '../database/models/chatModel.js';

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

// Ruta para la vista unificada de datos
router.get('/admin/data', requiresAuth, async (req, res) => {
  try {
    const { type = 'messages', instance } = req.query;
    const instances = await getAllInstancesWithStats();
    
    res.render('admin/data', { 
      activeTab: 'data',
      instances,
      selectedType: type,
      selectedInstance: instance || null
    });
  } catch (error) {
    console.error('Error al cargar vista de datos:', error);
    res.status(500).render('errors/500', { error: 'Error interno del servidor' });
  }
});

// API endpoint para obtener datos con paginación (para DataTables)
router.get('/api/data/:type', requiresAuth, async (req, res) => {
  try {
    const { type } = req.params;
    const { instance, draw, start = 0, length = 10, search } = req.query;
    
    let data = [];
    let totalRecords = 0;
    let filteredRecords = 0;

    // Obtener datos según el tipo
    switch (type) {
      case 'messages':
        data = await getMessagesByInstance(instance);
        break;
      case 'contacts':
        data = await getContactsByInstance(instance);
        break;
      case 'chats':
        data = await getChatsByInstance(instance);
        break;
      default:
        return res.status(400).json({ error: 'Tipo de datos no válido' });
    }

    totalRecords = data.length;
    
    // Filtrar por búsqueda si existe
    if (search?.value) {
      const searchTerm = search.value.toLowerCase();
      data = data.filter(item => {
        return Object.values(item).some(value => 
          value && value.toString().toLowerCase().includes(searchTerm)
        );
      });
    }
    
    filteredRecords = data.length;
    
    // Paginación
    const startIndex = parseInt(start);
    const pageSize = parseInt(length);
    const paginatedData = data.slice(startIndex, startIndex + pageSize);

    res.json({
      draw: parseInt(draw) || 1,
      recordsTotal: totalRecords,
      recordsFiltered: filteredRecords,
      data: paginatedData
    });
  } catch (error) {
    console.error('Error en API de datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
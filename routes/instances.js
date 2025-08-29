import express from 'express';
import axios from 'axios';
import { getAllUsers } from '../database/models/userModel.js';
// Importaciones para creación local si es necesario en el futuro
// import { createInstance as createLocalInstance } from '../database/models/instanceModel.js';

const router = express.Router();

// Middleware para verificar autenticación
function requiresAuth(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect('/login');
}

// Middleware para verificar rol de administrador
function requireAdmin(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  
  if (req.session.userRole !== 'admin') {
    return res.status(403).send('Acceso denegado. Se requiere rol de administrador.');
  }
  
  next();
}

// --- Funciones auxiliares para interactuar con Evolution API ---
const getEvolutionApiConfig = () => {
  const evolutionApiUrl = process.env.EVOLUTION_API_URL;
  const evolutionApiKey = process.env.EVOLUTION_API_KEY;

  if (!evolutionApiUrl || !evolutionApiKey) {
      throw new Error('EVOLUTION_API_URL o EVOLUTION_API_KEY no están configuradas.');
  }

  return { evolutionApiUrl, evolutionApiKey };
};

const getInstancesFromEvolutionAPI = async () => {
  const { evolutionApiUrl, evolutionApiKey } = getEvolutionApiConfig();
  
  try {
      // Endpoint correcto para listar instancias en Evolution API
      const response = await axios.get(`${evolutionApiUrl}/instance/fetchInstances`, {
          headers: {
              'apikey': evolutionApiKey
          }
      });
      
      // Ajuste para manejar la estructura real de los datos:
      // La respuesta es un array de objetos {instance: {...}}
      // Extraemos las instancias reales
      if (Array.isArray(response.data)) {
          return response.data.map(item => item.instance || item);
      }
      
      return response.data; // Se espera que sea un array de instancias
  } catch (error) {
      console.error('Error al obtener instancias de Evolution API:', error.response?.data || error.message);
      throw error;
  }
};

const getInstanceStatusFromEvolutionAPI = async (instanceName) => {
  const { evolutionApiUrl, evolutionApiKey } = getEvolutionApiConfig();
  
  try {
      const response = await axios.get(`${evolutionApiUrl}/instance/connectionState/${instanceName}`, {
          headers: {
              'apikey': evolutionApiKey
          }
      });
      // Se espera que response.data tenga { instance: { instanceName, state } }
      // Pero ahora también manejamos directamente { state }
      return response.data?.instance?.state || response.data?.state || 'unknown';
  } catch (error) {
      // Si la instancia no existe o hay otro error, devolvemos 'unknown'
      console.error(`Error al obtener estado de instancia '${instanceName}' de Evolution API:`, error.response?.data || error.message);
      return 'unknown';
  }
};

const createInstanceInEvolutionAPI = async (instanceData) => {
  const { evolutionApiUrl, evolutionApiKey } = getEvolutionApiConfig();
  
  try {
      // Asumimos que instanceData contiene instanceName y otros parámetros necesarios
      const response = await axios.post(`${evolutionApiUrl}/instance/create`, instanceData, {
          headers: {
              'apikey': evolutionApiKey,
              'Content-Type': 'application/json'
          }
      });
      return response.data;
  } catch (error) {
      console.error('Error al crear instancia en Evolution API:', error.response?.data || error.message);
      throw error;
  }
};

const deleteInstanceFromEvolutionAPI = async (instanceName) => {
  const { evolutionApiUrl, evolutionApiKey } = getEvolutionApiConfig();
  
  try {
      await axios.delete(`${evolutionApiUrl}/instance/${instanceName}`, {
          headers: {
              'apikey': evolutionApiKey
          }
      });
      return { message: 'Instancia eliminada exitosamente en Evolution API.' };
  } catch (error) {
      console.error('Error al eliminar instancia en Evolution API:', error.response?.data || error.message);
      throw error;
  }
};

const getQRCodeFromEvolutionAPI = async (instanceName) => {
    const { evolutionApiUrl, evolutionApiKey } = getEvolutionApiConfig();
    
    try {
        const response = await axios.get(`${evolutionApiUrl}/instance/connect/${instanceName}`, {
            headers: {
                'apikey': evolutionApiKey
            }
        });
        return response.data; // Debe contener 'code' (QR) y 'pairingCode'
    } catch (error) {
        console.error('Error al obtener QR de Evolution API:', error.response?.data || error.message);
        throw error;
    }
};

// --- Rutas ---

// Ruta para mostrar la lista de instancias (obtenidas de Evolution API)
router.get('/instances', requireAdmin, async (req, res) => {
  try {
    console.log("--- Inicio de carga de instancias ---");
    // 1. Obtener lista de instancias desde Evolution API
    let evolutionInstances = [];
    try {
        evolutionInstances = await getInstancesFromEvolutionAPI();
        console.log("Instancias obtenidas de Evolution API:", JSON.stringify(evolutionInstances, null, 2));
    } catch (apiError) {
        console.error('No se pudo conectar con Evolution API para obtener instancias.');
        
        // --- INICIO: Datos simulados para desarrollo ---
        console.warn('Usando datos de ejemplo para desarrollo.');
        evolutionInstances = [
            {
                instanceName: "instancia_de_ejemplo_1",
                instanceId: "id-ejemplo-1"
            },
            {
                instanceName: "instancia_de_ejemplo_2",
                instanceId: "id-ejemplo-2"
            }
        ];
        // --- FIN: Datos simulados para desarrollo ---
    }

    // 2. Para cada instancia, obtener su estado actual
    console.log("Obteniendo estado de cada instancia...");
    const instancesWithStatus = await Promise.all(evolutionInstances.map(async (inst) => {
        console.log(`Solicitando estado para: ${inst.instanceName}`);
        let status = 'unknown';
        // Solo intentamos obtener el estado real si no estamos usando datos simulados
        if (!inst.instanceName.startsWith("instancia_de_ejemplo_")) {
            status = await getInstanceStatusFromEvolutionAPI(inst.instanceName);
        } else {
            // Estado simulado para ejemplos
            status = Math.random() > 0.5 ? 'open' : 'connecting'; 
        }
        console.log(`Estado para ${inst.instanceName}: ${status}`);
        const instWithStatus = {
            ...inst,
            status: status
        };
        console.log(`Instancia con estado:`, JSON.stringify(instWithStatus, null, 2));
        return instWithStatus;
    }));

    console.log("Instancias con estado final:", JSON.stringify(instancesWithStatus, null, 2));
    console.log("--- Fin de carga de instancias ---");

    // 3. Obtener lista de usuarios locales (para futuras asignaciones si es necesario)
    const users = await getAllUsers();

    // 4. Renderizar la vista con las instancias de Evolution API
    res.render('admin/instances', { 
        instances: instancesWithStatus, 
        users, 
        activeTab: 'instances',
        evolutionApiError: null // No hubo error
    });
  } catch (error) {
    console.error('Error al obtener instancias:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta para crear una nueva instancia (en Evolution API)
router.post('/instances', requireAdmin, async (req, res) => {
  try {
    const { name } = req.body; // Solo necesitamos el nombre para crear en Evolution API
    
    // Validación básica
    if (!name) {
      return res.status(400).json({ message: 'Nombre es obligatorio.' });
    }

    // Preparar datos para crear en Evolution API
    // Aquí puedes añadir más configuraciones por defecto
    const createPayload = {
      instanceName: name,
      qrcode: true,
      integration: "WHATSAPP-BAILEYS"
      // Añade aquí otros parámetros por defecto que necesites
    };

    // Crear la instancia en Evolution API
    const evolutionData = await createInstanceInEvolutionAPI(createPayload);
    
    res.json({ 
      message: 'Instancia creada exitosamente en Evolution API.', 
      instance: evolutionData.instance
    });

  } catch (error) {
    console.error('Error al crear instancia en Evolution API:', error);
    if (error.response) {
        // La API devolvió un error
        return res.status(error.response.status).json({ 
            message: `Evolution API: ${error.response.data || error.message}` 
        });
    }
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

// Ruta para eliminar una instancia (en Evolution API)
router.post('/instances/:name/delete', requireAdmin, async (req, res) => {
  try {
    const instanceName = req.params.name;
    
    await deleteInstanceFromEvolutionAPI(instanceName);
    
    res.json({ message: 'Instancia eliminada exitosamente en Evolution API.' });
  } catch (error) {
    console.error('Error al eliminar instancia en Evolution API:', error);
    if (error.response) {
        return res.status(error.response.status).json({ 
            message: `Evolution API: ${error.response.data || error.message}` 
        });
    }
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
});

// Ruta para obtener el código QR de una instancia (desde Evolution API)
router.get('/instances/:name/qrcode', requireAdmin, async (req, res) => {
    try {
        const instanceName = req.params.name;
        
        const qrData = await getQRCodeFromEvolutionAPI(instanceName);
        
        res.json({
            message: 'Código QR obtenido exitosamente.',
            qrData: qrData
        });
    } catch (error) {
        console.error('Error al obtener QR de Evolution API:', error);
        if (error.response) {
            return res.status(error.response.status).json({ 
                message: `Evolution API: ${error.response.data || error.message}` 
            });
        }
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
});

export default router;
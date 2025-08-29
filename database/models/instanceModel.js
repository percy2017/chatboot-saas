import { getDatabase } from '../db.js';

/**
 * Obtiene todas las instancias con información del propietario y estadísticas.
 * @returns {Promise<Array>} Una promesa que resuelve a un array de instancias con datos de usuario y conteos.
 */
async function getAllInstancesWithStats() {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    // Esta consulta obtiene instancias, el nombre del usuario y conteos de chats, mensajes y contactos.
    // Usamos subconsultas para los conteos para evitar problemas con JOINs y GROUP BY.
    const query = `
      SELECT 
        i.id,
        i.name,
        i.user_id,
        i.status,
        u.name AS owner_name,
        i.created_at,
        i.updated_at,
        -- Subconsulta para contar chats
        (SELECT COUNT(*) FROM chats WHERE owner = i.name) AS chat_count,
        -- Subconsulta para contar mensajes
        (SELECT COUNT(*) FROM messages WHERE owner = i.name) AS message_count,
        -- Subconsulta para contar contactos
        (SELECT COUNT(*) FROM contacts WHERE owner = i.name) AS contact_count
      FROM instances i
      LEFT JOIN users u ON i.user_id = u.id
      ORDER BY i.id DESC
    `;
    
    const instances = await db.all(query);
    return instances;
  } catch (err) {
    console.error('Error al obtener instancias con estadísticas:', err);
    throw err;
  }
}

/**
 * Obtiene una instancia por su ID con información del propietario.
 * @param {number} id - El ID de la instancia.
 * @returns {Promise<Object|null>} Una promesa que resuelve a la instancia o null si no se encuentra.
 */
async function getInstanceById(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const instance = await db.get(
      `SELECT i.*, u.name AS owner_name FROM instances i LEFT JOIN users u ON i.user_id = u.id WHERE i.id = ?`,
      [id]
    );
    return instance || null;
  } catch (err) {
    console.error(`Error al obtener la instancia con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Obtiene una instancia por su nombre.
 * @param {string} name - El nombre de la instancia.
 * @returns {Promise<Object|null>} Una promesa que resuelve a la instancia o null si no se encuentra.
 */
async function getInstanceByName(name) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const instance = await db.get('SELECT * FROM instances WHERE name = ?', [name]);
    return instance || null;
  } catch (err) {
    console.error(`Error al obtener la instancia con nombre ${name}:`, err);
    throw err;
  }
}


/**
 * Crea una nueva instancia.
 * @param {Object} instanceData - Los datos de la instancia a crear.
 * @param {string} instanceData.name - El nombre único de la instancia.
 * @param {number} instanceData.user_id - El ID del usuario propietario.
 * @returns {Promise<Object>} Una promesa que resuelve a la instancia creada.
 */
async function createInstance(instanceData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { name, user_id } = instanceData;
  
  try {
    // Verificar si el nombre ya existe
    const existingInstance = await getInstanceByName(name);
    if (existingInstance) {
      throw new Error(`Ya existe una instancia con el nombre '${name}'.`);
    }

    // Insertar la nueva instancia
    const result = await db.run(
      `INSERT INTO instances (name, user_id) VALUES (?, ?)`,
      [name, user_id]
    );
    
    // Obtener la instancia recién creada
    const newInstance = await getInstanceById(result.lastID);
    return newInstance;
  } catch (err) {
    console.error('Error al crear la instancia:', err);
    throw err;
  }
}

/**
 * Actualiza una instancia existente.
 * @param {number} id - El ID de la instancia a actualizar.
 * @param {Object} instanceData - Los datos de la instancia a actualizar.
 * @param {string} [instanceData.name] - El nuevo nombre de la instancia.
 * @param {number} [instanceData.user_id] - El nuevo ID del usuario propietario.
 * @param {string} [instanceData.status] - El nuevo estado de la instancia.
 * @returns {Promise<Object>} Una promesa que resuelve a la instancia actualizada.
 */
async function updateInstance(id, instanceData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { name, user_id, status } = instanceData;
  let query = 'UPDATE instances SET ';
  const params = [];
  
  if (name !== undefined) {
    // Verificar unicidad del nombre si se está actualizando
    if (name) {
        const existingInstance = await getInstanceByName(name);
        if (existingInstance && existingInstance.id != id) { // Comparar con ID diferente
            throw new Error(`Ya existe una instancia con el nombre '${name}'.`);
        }
    }
    query += 'name = ?, ';
    params.push(name);
  }
  
  if (user_id !== undefined) {
    query += 'user_id = ?, ';
    params.push(user_id);
  }

  if (status !== undefined) {
    query += 'status = ?, ';
    params.push(status);
  }
  
  // Eliminar la última coma y espacio
  query = query.slice(0, -2);
  
  query += ', updated_at = CURRENT_TIMESTAMP ';
  query += ' WHERE id = ?';
  params.push(id);
  
  try {
    await db.run(query, params);
    
    // Obtener la instancia actualizada
    const updatedInstance = await getInstanceById(id);
    return updatedInstance;
  } catch (err) {
    console.error(`Error al actualizar la instancia con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Elimina una instancia por su ID.
 * @param {number} id - El ID de la instancia a eliminar.
 * @returns {Promise<boolean>} Una promesa que resuelve a true si la instancia fue eliminada, false si no se encontró.
 */
async function deleteInstance(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const result = await db.run('DELETE FROM instances WHERE id = ?', [id]);
    return result.changes > 0;
  } catch (err) {
    console.error(`Error al eliminar la instancia con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Actualiza el estado de una instancia por su nombre.
 * @param {string} name - El nombre de la instancia.
 * @param {string} status - El nuevo estado.
 * @returns {Promise<boolean>} Una promesa que resuelve a true si se actualizó, false si no se encontró.
 */
async function updateInstanceStatusByName(name, status) {
    const db = getDatabase();
    if (!db) {
      throw new Error('La base de datos no ha sido inicializada.');
    }
    
    try {
      const result = await db.run(
        'UPDATE instances SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE name = ?',
        [status, name]
      );
      return result.changes > 0;
    } catch (err) {
      console.error(`Error al actualizar el estado de la instancia '${name}' a '${status}':`, err);
      throw err;
    }
  }

export { 
  getAllInstancesWithStats,
  getInstanceById,
  getInstanceByName,
  createInstance, 
  updateInstance, 
  deleteInstance,
  updateInstanceStatusByName
};
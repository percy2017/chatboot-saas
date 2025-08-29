import { getDatabase } from '../db.js';

/**
 * Obtiene todos los chats de la base de datos.
 * @returns {Promise<Array>} Una promesa que resuelve a un array de chats.
 */
async function getAllChats() {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const chats = await db.all('SELECT * FROM chats ORDER BY id');
    return chats;
  } catch (err) {
    console.error('Error al obtener chats:', err);
    throw err;
  }
}

/**
 * Obtiene un chat por su ID.
 * @param {string} id - El ID del chat.
 * @returns {Promise<Object|null>} Una promesa que resuelve al chat o null si no se encuentra.
 */
async function getChatById(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const chat = await db.get('SELECT * FROM chats WHERE id = ?', [id]);
    return chat || null;
  } catch (err) {
    console.error(`Error al obtener el chat con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Crea un nuevo chat.
 * @param {Object} chatData - Los datos del chat a crear.
 * @param {string} chatData.id - El ID del chat.
 * @param {string} chatData.owner - El propietario del chat (nombre de la instancia).
 * @param {string} [chatData.raw_data_json] - Datos JSON sin procesar.
 * @returns {Promise<Object>} Una promesa que resuelve al chat creado.
 */
async function createChat(chatData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { id, owner, raw_data_json } = chatData;
  
  try {
    // Insertar el nuevo chat
    const result = await db.run(
      `INSERT OR REPLACE INTO chats (id, owner, raw_data_json) VALUES (?, ?, ?)`,
      [id, owner, raw_data_json]
    );
    
    // Obtener el chat recién creado
    const newChat = await getChatById(id);
    return newChat;
  } catch (err) {
    console.error('Error al crear el chat:', err);
    throw err;
  }
}

/**
 * Actualiza un chat existente.
 * @param {string} id - El ID del chat a actualizar.
 * @param {Object} chatData - Los datos del chat a actualizar.
 * @param {string} [chatData.owner] - El nuevo propietario del chat.
 * @param {string} [chatData.raw_data_json] - Nuevos datos JSON sin procesar.
 * @returns {Promise<Object>} Una promesa que resuelve al chat actualizado.
 */
async function updateChat(id, chatData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { owner, raw_data_json } = chatData;
  let query = 'UPDATE chats SET ';
  const params = [];
  
  if (owner !== undefined) {
    query += 'owner = ?, ';
    params.push(owner);
  }
  
  if (raw_data_json !== undefined) {
    query += 'raw_data_json = ?, ';
    params.push(raw_data_json);
  }
  
  // Eliminar la última coma y espacio
  query = query.slice(0, -2);
  
  query += ', updated_at = CURRENT_TIMESTAMP ';
  query += ' WHERE id = ?';
  params.push(id);
  
  try {
    await db.run(query, params);
    
    // Obtener el chat actualizado
    const updatedChat = await getChatById(id);
    return updatedChat;
  } catch (err) {
    console.error(`Error al actualizar el chat con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Elimina un chat por su ID.
 * @param {string} id - El ID del chat a eliminar.
 * @returns {Promise<boolean>} Una promesa que resuelve a true si el chat fue eliminado, false si no se encontró.
 */
async function deleteChat(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const result = await db.run('DELETE FROM chats WHERE id = ?', [id]);
    return result.changes > 0;
  } catch (err) {
    console.error(`Error al eliminar el chat con ID ${id}:`, err);
    throw err;
  }
}

export { 
  getAllChats, 
  getChatById, 
  createChat, 
  updateChat, 
  deleteChat 
};
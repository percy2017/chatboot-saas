import { getDatabase } from '../db.js';

/**
 * Obtiene todos los mensajes de la base de datos.
 * @returns {Promise<Array>} Una promesa que resuelve a un array de mensajes.
 */
async function getAllMessages() {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const messages = await db.all('SELECT * FROM messages ORDER BY messageTimestamp DESC');
    return messages;
  } catch (err) {
    console.error('Error al obtener mensajes:', err);
    throw err;
  }
}

/**
 * Obtiene un mensaje por su ID.
 * @param {string} id - El ID del mensaje.
 * @returns {Promise<Object|null>} Una promesa que resuelve al mensaje o null si no se encuentra.
 */
async function getMessageById(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const message = await db.get('SELECT * FROM messages WHERE id = ?', [id]);
    return message || null;
  } catch (err) {
    console.error(`Error al obtener el mensaje con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Crea un nuevo mensaje.
 * @param {Object} messageData - Los datos del mensaje a crear.
 * @param {string} messageData.id - El ID del mensaje.
 * @param {string} messageData.remoteJid - El JID remoto.
 * @param {string} [messageData.participant] - El participante.
 * @param {string} [messageData.pushName] - El nombre push.
 * @param {string} [messageData.messageType] - El tipo de mensaje.
 * @param {number} [messageData.messageTimestamp] - La marca de tiempo del mensaje.
 * @param {string} messageData.owner - El propietario del mensaje (nombre de la instancia).
 * @param {string} [messageData.source] - La fuente del mensaje.
 * @param {string} [messageData.content] - El contenido del mensaje.
 * @param {string} [messageData.raw_data_json] - Datos JSON sin procesar.
 * @returns {Promise<Object>} Una promesa que resuelve al mensaje creado.
 */
async function createMessage(messageData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { id, remoteJid, participant, pushName, messageType, messageTimestamp, owner, source, content, raw_data_json } = messageData;
  
  try {
    // Insertar el nuevo mensaje
    const result = await db.run(
      `INSERT OR REPLACE INTO messages 
      (id, remoteJid, participant, pushName, messageType, messageTimestamp, owner, source, content, raw_data_json) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, remoteJid, participant, pushName, messageType, messageTimestamp, owner, source, content, raw_data_json]
    );
    
    // Obtener el mensaje recién creado
    const newMessage = await getMessageById(id);
    return newMessage;
  } catch (err) {
    console.error('Error al crear el mensaje:', err);
    throw err;
  }
}

/**
 * Actualiza un mensaje existente.
 * @param {string} id - El ID del mensaje a actualizar.
 * @param {Object} messageData - Los datos del mensaje a actualizar.
 * @param {string} [messageData.remoteJid] - El nuevo JID remoto.
 * @param {string} [messageData.participant] - El nuevo participante.
 * @param {string} [messageData.pushName] - El nuevo nombre push.
 * @param {string} [messageData.messageType] - El nuevo tipo de mensaje.
 * @param {number} [messageData.messageTimestamp] - La nueva marca de tiempo del mensaje.
 * @param {string} [messageData.owner] - El nuevo propietario del mensaje.
 * @param {string} [messageData.source] - La nueva fuente del mensaje.
 * @param {string} [messageData.content] - El nuevo contenido del mensaje.
 * @param {string} [messageData.raw_data_json] - Nuevos datos JSON sin procesar.
 * @returns {Promise<Object>} Una promesa que resuelve al mensaje actualizado.
 */
async function updateMessage(id, messageData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { remoteJid, participant, pushName, messageType, messageTimestamp, owner, source, content, raw_data_json } = messageData;
  let query = 'UPDATE messages SET ';
  const params = [];
  
  if (remoteJid !== undefined) {
    query += 'remoteJid = ?, ';
    params.push(remoteJid);
  }
  
  if (participant !== undefined) {
    query += 'participant = ?, ';
    params.push(participant);
  }
  
  if (pushName !== undefined) {
    query += 'pushName = ?, ';
    params.push(pushName);
  }
  
  if (messageType !== undefined) {
    query += 'messageType = ?, ';
    params.push(messageType);
  }
  
  if (messageTimestamp !== undefined) {
    query += 'messageTimestamp = ?, ';
    params.push(messageTimestamp);
  }
  
  if (owner !== undefined) {
    query += 'owner = ?, ';
    params.push(owner);
  }
  
  if (source !== undefined) {
    query += 'source = ?, ';
    params.push(source);
  }
  
  if (content !== undefined) {
    query += 'content = ?, ';
    params.push(content);
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
    
    // Obtener el mensaje actualizado
    const updatedMessage = await getMessageById(id);
    return updatedMessage;
  } catch (err) {
    console.error(`Error al actualizar el mensaje con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Elimina un mensaje por su ID.
 * @param {string} id - El ID del mensaje a eliminar.
 * @returns {Promise<boolean>} Una promesa que resuelve a true si el mensaje fue eliminado, false si no se encontró.
 */
async function deleteMessage(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const result = await db.run('DELETE FROM messages WHERE id = ?', [id]);
    return result.changes > 0;
  } catch (err) {
    console.error(`Error al eliminar el mensaje con ID ${id}:`, err);
    throw err;
  }
}

export { 
  getAllMessages, 
  getMessageById, 
  createMessage, 
  updateMessage, 
  deleteMessage 
};
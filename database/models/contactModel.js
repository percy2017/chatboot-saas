import { getDatabase } from '../db.js';

/**
 * Obtiene todos los contactos de la base de datos.
 * @returns {Promise<Array>} Una promesa que resuelve a un array de contactos.
 */
async function getAllContacts() {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const contacts = await db.all('SELECT * FROM contacts ORDER BY id');
    return contacts;
  } catch (err) {
    console.error('Error al obtener contactos:', err);
    throw err;
  }
}

/**
 * Obtiene un contacto por su ID.
 * @param {string} id - El ID del contacto.
 * @returns {Promise<Object|null>} Una promesa que resuelve al contacto o null si no se encuentra.
 */
async function getContactById(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const contact = await db.get('SELECT * FROM contacts WHERE id = ?', [id]);
    return contact || null;
  } catch (err) {
    console.error(`Error al obtener el contacto con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Crea un nuevo contacto.
 * @param {Object} contactData - Los datos del contacto a crear.
 * @param {string} contactData.id - El ID del contacto.
 * @param {string} [contactData.pushName] - El nombre push del contacto.
 * @param {string} [contactData.profilePictureUrl] - La URL de la imagen de perfil.
 * @param {string} contactData.owner - El propietario del contacto (nombre de la instancia).
 * @param {string} [contactData.raw_data_json] - Datos JSON sin procesar.
 * @returns {Promise<Object>} Una promesa que resuelve al contacto creado.
 */
async function createContact(contactData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { id, pushName, profilePictureUrl, owner, raw_data_json } = contactData;
  
  try {
    // Insertar el nuevo contacto
    const result = await db.run(
      `INSERT OR REPLACE INTO contacts (id, pushName, profilePictureUrl, owner, raw_data_json) VALUES (?, ?, ?, ?, ?)`,
      [id, pushName, profilePictureUrl, owner, raw_data_json]
    );
    
    // Obtener el contacto recién creado
    const newContact = await getContactById(id);
    return newContact;
  } catch (err) {
    console.error('Error al crear el contacto:', err);
    throw err;
  }
}

/**
 * Actualiza un contacto existente.
 * @param {string} id - El ID del contacto a actualizar.
 * @param {Object} contactData - Los datos del contacto a actualizar.
 * @param {string} [contactData.pushName] - El nuevo nombre push del contacto.
 * @param {string} [contactData.profilePictureUrl] - La nueva URL de la imagen de perfil.
 * @param {string} [contactData.owner] - El nuevo propietario del contacto.
 * @param {string} [contactData.raw_data_json] - Nuevos datos JSON sin procesar.
 * @returns {Promise<Object>} Una promesa que resuelve al contacto actualizado.
 */
async function updateContact(id, contactData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { pushName, profilePictureUrl, owner, raw_data_json } = contactData;
  let query = 'UPDATE contacts SET ';
  const params = [];
  
  if (pushName !== undefined) {
    query += 'pushName = ?, ';
    params.push(pushName);
  }
  
  if (profilePictureUrl !== undefined) {
    query += 'profilePictureUrl = ?, ';
    params.push(profilePictureUrl);
  }
  
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
    
    // Obtener el contacto actualizado
    const updatedContact = await getContactById(id);
    return updatedContact;
  } catch (err) {
    console.error(`Error al actualizar el contacto con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Elimina un contacto por su ID.
 * @param {string} id - El ID del contacto a eliminar.
 * @returns {Promise<boolean>} Una promesa que resuelve a true si el contacto fue eliminado, false si no se encontró.
 */
async function deleteContact(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const result = await db.run('DELETE FROM contacts WHERE id = ?', [id]);
    return result.changes > 0;
  } catch (err) {
    console.error(`Error al eliminar el contacto con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Obtiene contactos filtrados por instancia.
 * @param {string} instanceName - Nombre de la instancia (opcional).
 * @returns {Promise<Array>} Una promesa que resuelve a un array de contactos.
 */
async function getContactsByInstance(instanceName = null) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    let query = `
      SELECT c.*, 
             i.name as instance_name
      FROM contacts c 
      LEFT JOIN instances i ON c.owner = i.name
      ${instanceName ? 'WHERE c.owner = ?' : ''}
      ORDER BY c.pushName, c.id
    `;
    
    const params = instanceName ? [instanceName] : [];
    const contacts = await db.all(query, params);
    return contacts;
  } catch (err) {
    console.error('Error al obtener contactos por instancia:', err);
    throw err;
  }
}

export { 
  getAllContacts, 
  getContactById, 
  createContact, 
  updateContact, 
  deleteContact,
  getContactsByInstance
};
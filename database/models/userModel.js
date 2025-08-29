import bcrypt from 'bcrypt';
import { getDatabase } from '../db.js';

/**
 * Obtiene todos los usuarios de la base de datos.
 * @returns {Promise<Array>} Una promesa que resuelve a un array de usuarios.
 */
async function getAllUsers() {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const users = await db.all('SELECT id, email, name, role, created_at, updated_at FROM users ORDER BY id');
    return users;
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    throw err;
  }
}

/**
 * Obtiene un usuario por su ID.
 * @param {number} id - El ID del usuario.
 * @returns {Promise<Object|null>} Una promesa que resuelve al usuario o null si no se encuentra.
 */
async function getUserById(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const user = await db.get('SELECT id, email, name, role, created_at, updated_at FROM users WHERE id = ?', [id]);
    return user || null;
  } catch (err) {
    console.error(`Error al obtener el usuario con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Obtiene un usuario por su email.
 * @param {string} email - El email del usuario.
 * @returns {Promise<Object|null>} Una promesa que resuelve al usuario o null si no se encuentra.
 */
async function getUserByEmail(email) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
    return user || null;
  } catch (err) {
    console.error(`Error al obtener el usuario con email ${email}:`, err);
    throw err;
  }
}

/**
 * Crea un nuevo usuario.
 * @param {Object} userData - Los datos del usuario a crear.
 * @param {string} userData.email - El email del usuario.
 * @param {string} userData.password - La contraseña del usuario.
 * @param {string} userData.name - El nombre del usuario.
 * @param {string} userData.role - El rol del usuario ('admin' o 'client').
 * @returns {Promise<Object>} Una promesa que resuelve al usuario creado.
 */
async function createUser(userData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { email, password, name, role } = userData;
  
  try {
    // Hashear la contraseña
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    // Insertar el nuevo usuario
    const result = await db.run(
      `INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)`,
      [email, passwordHash, name, role]
    );
    
    // Obtener el usuario recién creado
    const newUser = await getUserById(result.lastID);
    return newUser;
  } catch (err) {
    console.error('Error al crear el usuario:', err);
    throw err;
  }
}

/**
 * Actualiza un usuario existente.
 * @param {number} id - El ID del usuario a actualizar.
 * @param {Object} userData - Los datos del usuario a actualizar.
 * @param {string} [userData.email] - El nuevo email del usuario.
 * @param {string} [userData.password] - La nueva contraseña del usuario.
 * @param {string} [userData.name] - El nuevo nombre del usuario.
 * @param {string} [userData.role] - El nuevo rol del usuario.
 * @returns {Promise<Object>} Una promesa que resuelve al usuario actualizado.
 */
async function updateUser(id, userData) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  const { email, password, name, role } = userData;
  let query = 'UPDATE users SET ';
  const params = [];
  
  if (email !== undefined) {
    query += 'email = ?, ';
    params.push(email);
  }
  
  if (password !== undefined) {
    // Hashear la nueva contraseña
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    query += 'password_hash = ?, ';
    params.push(passwordHash);
  }
  
  if (name !== undefined) {
    query += 'name = ?, ';
    params.push(name);
  }
  
  if (role !== undefined) {
    query += 'role = ?, ';
    params.push(role);
  }
  
  // Eliminar la última coma y espacio
  query = query.slice(0, -2);
  
  query += ', updated_at = CURRENT_TIMESTAMP ';
  query += ' WHERE id = ?';
  params.push(id);
  
  try {
    await db.run(query, params);
    
    // Obtener el usuario actualizado
    const updatedUser = await getUserById(id);
    return updatedUser;
  } catch (err) {
    console.error(`Error al actualizar el usuario con ID ${id}:`, err);
    throw err;
  }
}

/**
 * Elimina un usuario por su ID.
 * @param {number} id - El ID del usuario a eliminar.
 * @returns {Promise<boolean>} Una promesa que resuelve a true si el usuario fue eliminado, false si no se encontró.
 */
async function deleteUser(id) {
  const db = getDatabase();
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }
  
  try {
    const result = await db.run('DELETE FROM users WHERE id = ?', [id]);
    return result.changes > 0;
  } catch (err) {
    console.error(`Error al eliminar el usuario con ID ${id}:`, err);
    throw err;
  }
}

export { 
  getAllUsers, 
  getUserById, 
  getUserByEmail,
  createUser, 
  updateUser, 
  deleteUser 
};
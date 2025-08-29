import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de la base de datos
const dbPath = path.join(__dirname, 'app.db');
const DEFAULT_ADMIN_EMAIL = 'admin@chatbotsaas.com';
const DEFAULT_ADMIN_PASSWORD = 'admin123';
const DEFAULT_ADMIN_NAME = 'Administrador';

// Variable para almacenar la instancia de la base de datos
let db;

// =================================================================
// FUNCIONES DE INICIALIZACIÓN
// =================================================================

/**
 * Inicializa la base de datos y crea las tablas si no existen.
 */
async function initializeDatabase() {
  try {
    // Abrir la base de datos
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log(`Conectado a la base de datos SQLite en: ${dbPath}`);

    // Crear tablas
    await createTables();
    
    // Crear el usuario administrador por defecto
    await createDefaultAdmin();

    // Ejecutar migración de multimedia
    try {
      const { addMultimediaFields } = await import('./migrate-multimedia.js');
      await addMultimediaFields();
    } catch (error) {
      console.error('Error en migración de multimedia:', error);
    }

  } catch (err) {
    console.error('Error al inicializar la base de datos:', err);
    throw err;
  }
}

/**
 * Crea todas las tablas necesarias en la base de datos.
 */
async function createTables() {
  // Tabla de usuarios
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      name TEXT NOT NULL,
      role TEXT NOT NULL, -- 'admin' o 'client'
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("Tabla 'users' verificada/creada.");

  // Tabla de instancias
  await db.exec(`
    CREATE TABLE IF NOT EXISTS instances (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL,
      user_id INTEGER, -- Relación con la tabla users
      status TEXT DEFAULT 'unknown', -- Estado de la instancia (ej: 'unknown', 'created', 'open', 'close', 'connecting')
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL
    );
  `);
  console.log("Tabla 'instances' verificada/creada.");

  // Tabla de contactos
  await db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id TEXT PRIMARY KEY,
      pushName TEXT,
      profilePictureUrl TEXT,
      owner TEXT NOT NULL, -- Nombre de la instancia
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      raw_data_json TEXT,
      FOREIGN KEY (owner) REFERENCES instances (name) ON DELETE CASCADE
    );
  `);
  console.log("Tabla 'contacts' verificada/creada.");

  // Tabla de chats
  await db.exec(`
    CREATE TABLE IF NOT EXISTS chats (
      id TEXT PRIMARY KEY,
      owner TEXT NOT NULL, -- Nombre de la instancia
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      raw_data_json TEXT,
      FOREIGN KEY (owner) REFERENCES instances (name) ON DELETE CASCADE
    );
  `);
  console.log("Tabla 'chats' verificada/creada.");

  // Tabla de mensajes
  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      remoteJid TEXT NOT NULL, -- JID del chat
      participant TEXT, -- JID del remitente
      pushName TEXT, -- Nombre del remitente
      messageType TEXT,
      messageTimestamp INTEGER,
      owner TEXT NOT NULL, -- Nombre de la instancia
      source TEXT,
      content TEXT, -- Para almacenar texto plano o una descripción del mensaje
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      raw_data_json TEXT,
      FOREIGN KEY (owner) REFERENCES instances (name) ON DELETE CASCADE,
      FOREIGN KEY (remoteJid) REFERENCES chats (id) ON DELETE CASCADE
      -- Nota: Puede haber mensajes sin contacto directo (por ejemplo, de grupos), 
      -- por eso no se fuerza una FK a contacts.id
    );
  `);
  console.log("Tabla 'messages' verificada/creada.");

  // Crear índices para mejorar el rendimiento
  await createIndexes();
}

/**
 * Crea índices en las tablas para mejorar el rendimiento de las consultas.
 */
async function createIndexes() {
  // Índice en la columna 'owner' de la tabla messages
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_messages_owner ON messages(owner);
  `);
  console.log("Índice 'idx_messages_owner' verificada/creada.");

  // Índice en la columna 'remoteJid' de la tabla messages
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_messages_remoteJid ON messages(remoteJid);
  `);
  console.log("Índice 'idx_messages_remoteJid' verificada/creada.");

  // Índice en la columna 'messageTimestamp' de la tabla messages
  await db.exec(`
    CREATE INDEX IF NOT EXISTS idx_messages_timestamp ON messages(messageTimestamp);
  `);
  console.log("Índice 'idx_messages_timestamp' verificada/creada.");
}

/**
 * Crea un usuario administrador por defecto si no existe.
 */
async function createDefaultAdmin() {
  try {
    // Verificar si el usuario administrador ya existe
    const existingUser = await db.get(
      'SELECT id FROM users WHERE email = ?',
      [DEFAULT_ADMIN_EMAIL]
    );
    
    if (existingUser) {
      console.log(`El usuario administrador con email '${DEFAULT_ADMIN_EMAIL}' ya existe.`);
      return;
    }
    
    // Hashear la contraseña
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, saltRounds);
    
    // Insertar el nuevo usuario administrador
    await db.run(
      `INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)`,
      [DEFAULT_ADMIN_EMAIL, passwordHash, DEFAULT_ADMIN_NAME, 'admin']
    );
    
    console.log(`Usuario administrador creado exitosamente:
  Email: ${DEFAULT_ADMIN_EMAIL}
  Contraseña: ${DEFAULT_ADMIN_PASSWORD}
  Nombre: ${DEFAULT_ADMIN_NAME}`);
    
  } catch (err) {
    console.error('Error al crear el usuario administrador por defecto:', err);
  }
}

// =================================================================
// FUNCIONES DE ACCESO A LA BASE DE DATOS
// =================================================================

/**
 * Obtiene la instancia de la base de datos.
 * @returns {sqlite.Database} La instancia de la base de datos.
 */
function getDatabase() {
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada. Llama a initializeDatabase() primero.');
  }
  return db;
}

// =================================================================
// EXPORTS
// =================================================================

export { 
  // Funciones de inicialización
  initializeDatabase, 
  
  // Funciones de acceso a la base de datos
  getDatabase
};

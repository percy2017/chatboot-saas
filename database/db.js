import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a la base de datos
const dbPath = path.join(__dirname, 'app.db');

let db;

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

    // Crear tabla para usuarios
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

    // Crear tabla para instancias
    await db.exec(`
      CREATE TABLE IF NOT EXISTS instances (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE NOT NULL,
        user_id INTEGER, -- Relación con la tabla users
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL
      );
    `);
    console.log("Tabla 'instances' verificada/creada.");

    // Crear tabla para contactos
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

    // Crear tabla para chats
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

    // Crear tabla para mensajes
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

    // Crear un índice en la columna 'owner' de la tabla messages para mejorar el rendimiento de las consultas
    await db.exec(`
      CREATE INDEX IF NOT EXISTS idx_messages_owner ON messages(owner);
    `);
    console.log("Índice 'idx_messages_owner' verificada/creada.");

    // Crear un índice en la columna 'remoteJid' de la tabla messages
    await db.exec(`
      CREATE INDEX IF NOT EXISTS idx_messages_remoteJid ON messages(remoteJid);
    `);
    console.log("Índice 'idx_messages_remoteJid' verificada/creada.");

    // Crear un índice en la columna 'messageTimestamp' de la tabla messages
    await db.exec(`
      CREATE INDEX IF NOT EXISTS idx_messages_timestamp ON messages(messageTimestamp);
    `);
    console.log("Índice 'idx_messages_timestamp' verificada/creada.");

  } catch (err) {
    console.error('Error al inicializar la base de datos:', err);
    throw err;
  }
}

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

export { initializeDatabase, getDatabase };
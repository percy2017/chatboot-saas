import { initializeDatabase, getDatabase } from './db.js';
import { fileURLToPath } from 'url';
import path from 'path';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a la base de datos
const dbPath = path.join(__dirname, 'app.db');

/**
 * Elimina todas las tablas de la base de datos.
 * @param {sqlite.Database} db - La instancia de la base de datos.
 */
async function dropAllTables(db) {
  try {
    // Desactivar las restricciones de clave foránea temporalmente
    await db.exec('PRAGMA foreign_keys = OFF;');
    
    // Lista de tablas a eliminar (en orden inverso de dependencias si es necesario)
    const tables = [
      'messages',
      'contacts',
      'chats',
      'instances',
      'users'
    ];

    // Eliminar cada tabla
    for (const table of tables) {
      await db.exec(`DROP TABLE IF EXISTS ${table};`);
      console.log(`Tabla '${table}' eliminada.`);
    }

    // Volver a activar las restricciones de clave foránea
    await db.exec('PRAGMA foreign_keys = ON;');
    
    console.log('Todas las tablas han sido eliminadas.');
  } catch (err) {
    console.error('Error al eliminar las tablas:', err);
    throw err;
  }
}

/**
 * Función principal para reiniciar la base de datos.
 */
async function resetDatabase() {
  let db;
  try {
    console.log('Iniciando reinicio de la base de datos...');
    
    // Inicializar la conexión a la base de datos
    await initializeDatabase();
    db = getDatabase();
    
    // Eliminar todas las tablas
    await dropAllTables(db);
    
    // Volver a crear las tablas (al llamar initializeDatabase, ya las crea si no existen)
    // Pero como las eliminamos, las volverá a crear.
    // No necesitamos hacer nada más, ya que initializeDatabase() se encarga de crearlas.
    console.log('Base de datos reiniciada correctamente.');
    
  } catch (err) {
    console.error('Error al reiniciar la base de datos:', err);
  }
}

// Ejecutar la función si este script se ejecuta directamente
if (import.meta.url === `file://${process.argv[1]}`) {
    resetDatabase();
}

export { resetDatabase };
import { getDatabase } from './db.js';

async function addMultimediaFields() {
  const db = getDatabase();
  
  if (!db) {
    throw new Error('La base de datos no ha sido inicializada.');
  }

  try {
    // Verificar si las columnas ya existen
    const tableInfo = await db.all("PRAGMA table_info(messages)");
    const existingColumns = tableInfo.map(col => col.name);
    
    // Columnas de multimedia a agregar
    const multimediaColumns = [
      'media_type TEXT', // imageMessage, videoMessage, etc.
      'media_filename TEXT', // nombre del archivo guardado
      'media_path TEXT', // ruta web del archivo
      'media_size INTEGER', // tamaño en bytes
      'media_mimetype TEXT', // tipo MIME
      'media_caption TEXT', // caption del multimedia
      'media_downloaded BOOLEAN DEFAULT FALSE' // si se descargó exitosamente
    ];

    console.log('Agregando campos de multimedia a la tabla messages...');

    for (const column of multimediaColumns) {
      const columnName = column.split(' ')[0];
      
      if (!existingColumns.includes(columnName)) {
        await db.exec(`ALTER TABLE messages ADD COLUMN ${column}`);
        console.log(`✓ Columna ${columnName} agregada`);
      } else {
        console.log(`- Columna ${columnName} ya existe`);
      }
    }

    console.log('Migración de multimedia completada exitosamente.');
    
  } catch (error) {
    console.error('Error en migración de multimedia:', error);
    throw error;
  }
}

export { addMultimediaFields };
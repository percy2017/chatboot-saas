import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de directorios
const UPLOAD_BASE_DIR = path.join(__dirname, '..', 'public', 'uploads');
const MEDIA_DIRS = {
  'imageMessage': 'images',
  'videoMessage': 'videos', 
  'audioMessage': 'audios',
  'documentMessage': 'documents',
  'stickerMessage': 'images'
};

// Extensiones por tipo de archivo
const FILE_EXTENSIONS = {
  'imageMessage': '.jpg',
  'videoMessage': '.mp4',
  'audioMessage': '.ogg', 
  'documentMessage': '.pdf',
  'stickerMessage': '.webp'
};

/**
 * Crea los directorios necesarios si no existen
 */
function ensureDirectoriesExist() {
  if (!fs.existsSync(UPLOAD_BASE_DIR)) {
    fs.mkdirSync(UPLOAD_BASE_DIR, { recursive: true });
  }
  
  Object.values(MEDIA_DIRS).forEach(dir => {
    const fullPath = path.join(UPLOAD_BASE_DIR, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
    }
  });
}

/**
 * Genera un nombre de archivo único
 */
function generateFileName(messageId, messageType, originalName = null) {
  const timestamp = Date.now();
  const extension = FILE_EXTENSIONS[messageType] || '.bin';
  
  if (originalName) {
    const ext = path.extname(originalName) || extension;
    const name = path.basename(originalName, ext);
    return `${messageId}_${timestamp}_${name}${ext}`;
  }
  
  return `${messageId}_${timestamp}${extension}`;
}

/**
 * Descarga un archivo multimedia desde Evolution API
 */
async function downloadMediaFile(serverUrl, apiKey, messageId, messageType) {
  try {
    const downloadUrl = `${serverUrl}/chat/getBase64FromMediaMessage/${messageId}`;
    
    console.log(`Descargando multimedia: ${downloadUrl}`);
    
    const response = await axios.get(downloadUrl, {
      headers: {
        'apikey': apiKey
      },
      timeout: 30000
    });

    if (response.data && response.data.base64) {
      return {
        success: true,
        base64: response.data.base64,
        mimeType: response.data.mimetype || 'application/octet-stream',
        fileName: response.data.fileName || null
      };
    } else {
      throw new Error('No se recibió contenido base64');
    }
  } catch (error) {
    console.error(`Error al descargar multimedia ${messageId}:`, error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Guarda un archivo base64 en el disco
 */
function saveBase64File(base64Data, fileName, messageType) {
  try {
    ensureDirectoriesExist();
    
    const subDir = MEDIA_DIRS[messageType] || 'documents';
    const filePath = path.join(UPLOAD_BASE_DIR, subDir, fileName);
    
    // Remover el prefijo data:image/jpeg;base64, si existe
    const cleanBase64 = base64Data.replace(/^data:[^;]+;base64,/, '');
    
    // Convertir base64 a buffer
    const buffer = Buffer.from(cleanBase64, 'base64');
    
    // Guardar archivo
    fs.writeFileSync(filePath, buffer);
    
    // Retornar la ruta relativa para acceso web
    const webPath = `/uploads/${subDir}/${fileName}`;
    
    return {
      success: true,
      localPath: filePath,
      webPath: webPath,
      size: buffer.length
    };
  } catch (error) {
    console.error('Error al guardar archivo base64:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Procesa multimedia de un mensaje
 */
async function processMessageMedia(message, serverUrl, apiKey) {
  if (!message.message || !message.messageType) {
    return null;
  }

  const messageType = message.messageType;
  const messageId = message.key?.id;
  
  if (!messageId || !MEDIA_DIRS[messageType]) {
    return null;
  }

  try {
    // Obtener información del mensaje multimedia
    let mediaInfo = null;
    let originalFileName = null;
    
    if (message.message[messageType]) {
      mediaInfo = message.message[messageType];
      originalFileName = mediaInfo.fileName || mediaInfo.caption || null;
    }

    // Descargar el archivo
    const downloadResult = await downloadMediaFile(serverUrl, apiKey, messageId, messageType);
    
    if (!downloadResult.success) {
      console.warn(`No se pudo descargar multimedia para mensaje ${messageId}`);
      return null;
    }

    // Generar nombre de archivo
    const fileName = generateFileName(messageId, messageType, originalFileName || downloadResult.fileName);
    
    // Guardar archivo
    const saveResult = saveBase64File(downloadResult.base64, fileName, messageType);
    
    if (!saveResult.success) {
      console.error(`Error al guardar archivo multimedia ${messageId}`);
      return null;
    }

    return {
      messageId,
      messageType,
      originalFileName,
      fileName,
      webPath: saveResult.webPath,
      localPath: saveResult.localPath,
      mimeType: downloadResult.mimeType,
      fileSize: saveResult.size,
      caption: mediaInfo?.caption || null
    };

  } catch (error) {
    console.error(`Error procesando multimedia ${messageId}:`, error);
    return null;
  }
}

/**
 * Limpia archivos multimedia antiguos (opcional)
 */
function cleanupOldMedia(daysOld = 30) {
  try {
    ensureDirectoriesExist();
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    Object.values(MEDIA_DIRS).forEach(subDir => {
      const dirPath = path.join(UPLOAD_BASE_DIR, subDir);
      
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        
        files.forEach(file => {
          const filePath = path.join(dirPath, file);
          const stats = fs.statSync(filePath);
          
          if (stats.mtime < cutoffDate) {
            fs.unlinkSync(filePath);
            console.log(`Archivo eliminado: ${file}`);
          }
        });
      }
    });
  } catch (error) {
    console.error('Error al limpiar archivos antiguos:', error);
  }
}

export {
  processMessageMedia,
  cleanupOldMedia,
  ensureDirectoriesExist,
  MEDIA_DIRS,
  FILE_EXTENSIONS
};
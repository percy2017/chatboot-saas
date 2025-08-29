import express from 'express';
import { 
  createInstance, 
  getInstanceByName 
} from '../database/models/instanceModel.js';
import { 
  createMessage 
} from '../database/models/messageModel.js';
import { 
  createContact 
} from '../database/models/contactModel.js';
import { 
  createChat 
} from '../database/models/chatModel.js';
import { getDatabase } from '../database/db.js';
import { processMessageMedia } from '../utils/mediaHandler.js';

const router = express.Router();

// Ruta para el webhook de Evolution API
router.post('/webhook', async (req, res) => {
  try {
    console.log('\n--- Headers: ---');
    console.log(req.headers);
    console.log('\n--- Body (Payload): ---');
    console.log(req.body);

    // Obtener Socket.IO instance
    const io = req.app.get('io');

    const db = getDatabase();
    if (!db) {
      throw new Error('La base de datos no está disponible.');
    }

    const payload = req.body;
    const eventType = payload.event;
    const instanceName = payload.instance;
    const owner = instanceName;
    const jsonData = JSON.stringify(payload);
    
    // Verificar si la instancia existe, si no existe la creamos
    let instanceResult = await getInstanceByName(instanceName);
    if (!instanceResult) {
      // La instancia no existe, la creamos con user_id = 1 (admin por defecto)
      instanceResult = await createInstance({ name: instanceName, user_id: 1 });
      console.log(`Instancia '${instanceName}' creada automáticamente.`);
    } else {
      console.log(`Instancia '${instanceName}' ya existe.`);
    }

    // Procesar diferentes tipos de eventos
    switch (eventType) {
      case 'messages.upsert':
        await handleMessagesUpsert(db, payload.data, owner, jsonData, payload.server_url, payload.apikey, io);
        break;
      case 'contacts.update':
        await handleContactsUpdate(db, payload.data, owner, jsonData, io);
        break;
      case 'chats.update':
        await handleChatsUpdate(db, payload.data, owner, jsonData, io);
        break;
      case 'presence.update':
        await handlePresenceUpdate(db, payload.data, owner, jsonData, io);
        break;
      case 'messages.update':
        await handleMessagesUpdate(db, payload.data, owner, jsonData, io);
        break;
      case 'send.message':
        await handleSendMessage(db, payload.data, owner, jsonData, payload.server_url, payload.apikey, io);
        break;
      default:
        console.log(`Evento no manejado: ${eventType}`);
    }

    res.status(200).send('Webhook recibido y procesado correctamente.');
  } catch (error) {
    console.error('Error al procesar el webhook:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Manejar evento de mensajes
async function handleMessagesUpsert(db, data, owner, jsonData, serverUrl, apiKey, io) {
  try {
    if (Array.isArray(data)) {
      // Múltiples mensajes
      for (const message of data) {
        await storeMessage(db, message, owner, jsonData, serverUrl, apiKey, io);
      }
    } else if (data && typeof data === 'object') {
      // Un solo mensaje
      await storeMessage(db, data, owner, jsonData, serverUrl, apiKey, io);
    }
  } catch (error) {
    console.error('Error al manejar mensajes:', error);
  }
}

// Manejar evento de contactos
async function handleContactsUpdate(db, data, owner, jsonData, io) {
  try {
    if (Array.isArray(data)) {
      for (const contact of data) {
        await storeContact(db, contact, owner, jsonData, io);
      }
    } else if (data && typeof data === 'object') {
      await storeContact(db, data, owner, jsonData, io);
    }
  } catch (error) {
    console.error('Error al manejar contactos:', error);
  }
}

// Manejar evento de chats
async function handleChatsUpdate(db, data, owner, jsonData, io) {
  try {
    if (Array.isArray(data)) {
      for (const chat of data) {
        await storeChat(db, chat, owner, jsonData, io);
      }
    }
  } catch (error) {
    console.error('Error al manejar chats:', error);
  }
}

// Almacenar un mensaje en la base de datos
async function storeMessage(db, message, owner, jsonData, serverUrl, apiKey, io) {
  try {
    const id = message.key?.id;
    const remoteJid = message.key?.remoteJid;
    const participant = message.key?.participant;
    const pushName = message.pushName;
    const messageType = message.messageType;
    const messageTimestamp = message.messageTimestamp;
    const source = message.source;

    // Extraer contenido del mensaje basado en su tipo
    let content = '';
    let mediaInfo = null;
    
    // Verificar si es un mensaje multimedia
    const isMultimedia = messageType && ['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'stickerMessage'].includes(messageType);
    
    if (message.message) {
      if (message.message.conversation) {
        content = message.message.conversation; // Mensaje de texto
      } else if (message.message.extendedTextMessage) {
        content = message.message.extendedTextMessage.text; // Mensaje de texto con formato
      } else if (message.message.imageMessage) {
        content = `[Imagen] ${message.message.imageMessage.caption || ''}`.trim();
      } else if (message.message.videoMessage) {
        content = `[Video] ${message.message.videoMessage.caption || ''}`.trim();
      } else if (message.message.documentMessage) {
        content = `[Documento] ${message.message.documentMessage.fileName || ''}`.trim();
      } else if (message.message.audioMessage) {
        content = `[Audio]`;
      } else if (message.message.stickerMessage) {
        content = `[Sticker]`;
      } else {
        // Para otros tipos de mensajes, guardar una descripción genérica
        content = `[${messageType || 'Mensaje'}]`;
      }
    }

    // Procesar multimedia si aplica
    if (isMultimedia && serverUrl && apiKey) {
      try {
        mediaInfo = await processMessageMedia(message, serverUrl, apiKey);
        if (mediaInfo) {
          console.log(`Multimedia procesado para mensaje ${id}: ${mediaInfo.fileName}`);
        }
      } catch (mediaError) {
        console.error(`Error procesando multimedia para mensaje ${id}:`, mediaError.message);
      }
    }

    if (id && remoteJid) {
      const messageData = {
        id,
        remoteJid,
        participant,
        pushName,
        messageType,
        messageTimestamp,
        owner,
        source,
        content,
        raw_data_json: jsonData
      };

      // Agregar información de multimedia si existe
      if (mediaInfo) {
        messageData.media_type = mediaInfo.messageType;
        messageData.media_filename = mediaInfo.fileName;
        messageData.media_path = mediaInfo.webPath;
        messageData.media_size = mediaInfo.fileSize;
        messageData.media_mimetype = mediaInfo.mimeType;
        messageData.media_caption = mediaInfo.caption;
        messageData.media_downloaded = true;
      }

      await createMessage(messageData);
      console.log(`Mensaje almacenado: ${id}${mediaInfo ? ' (con multimedia)' : ''}`);
      
      // Emitir evento Socket.IO para actualización en tiempo real
      if (io) {
        io.to('admin').emit('new_message', {
          type: 'message',
          instance: owner,
          data: {
            id,
            remoteJid,
            pushName,
            messageType,
            content,
            hasMedia: !!mediaInfo,
            mediaPath: mediaInfo?.webPath || null
          }
        });
      }
    } else {
      console.warn('Mensaje recibido sin ID o remoteJid:', message);
    }
  } catch (error) {
    console.error('Error al almacenar mensaje:', error);
  }
}

// Almacenar un contacto en la base de datos
async function storeContact(db, contact, owner, jsonData, io) {
  try {
    const id = contact.id;
    const pushName = contact.pushName;
    const profilePictureUrl = contact.profilePictureUrl;

    if (id) {
      await createContact({
        id,
        pushName,
        profilePictureUrl,
        owner,
        raw_data_json: jsonData
      });
      console.log(`Contacto almacenado/actualizado: ${id}`);
      
      // Emitir evento Socket.IO
      if (io) {
        io.to('admin').emit('new_contact', {
          type: 'contact',
          instance: owner,
          data: { id, pushName, profilePictureUrl }
        });
      }
    } else {
      console.warn('Contacto recibido sin ID:', contact);
    }
  } catch (error) {
    console.error('Error al almacenar contacto:', error);
  }
}

// Almacenar un chat en la base de datos
async function storeChat(db, chat, owner, jsonData, io) {
  try {
    const id = chat.id;

    if (id) {
      await createChat({
        id,
        owner,
        raw_data_json: jsonData
      });
      console.log(`Chat almacenado/actualizado: ${id}`);
      
      // Emitir evento Socket.IO
      if (io) {
        io.to('admin').emit('new_chat', {
          type: 'chat',
          instance: owner,
          data: { id }
        });
      }
    } else {
      console.warn('Chat recibido sin ID:', chat);
    }
  } catch (error) {
    console.error('Error al almacenar chat:', error);
  }
}

// Manejar eventos de presencia (en línea/desconectado)
async function handlePresenceUpdate(db, data, owner, jsonData, io) {
  try {
    // Solo loguear por ahora, no almacenar en BD para evitar spam
    if (data.id) {
      console.log(`Presencia actualizada en ${owner}: ${data.id}`);
    }
  } catch (error) {
    console.error('Error al manejar presencia:', error);
  }
}

// Manejar actualizaciones de mensajes (entregado, leído, etc.)
async function handleMessagesUpdate(db, data, owner, jsonData, io) {
  try {
    if (data.id && data.status) {
      // Aquí podrías actualizar el estado del mensaje en la BD si lo necesitas
      console.log(`Estado de mensaje actualizado en ${owner}: ${data.id} -> ${data.status}`);
    }
  } catch (error) {
    console.error('Error al manejar actualización de mensaje:', error);
  }
}

// Manejar mensajes enviados desde la instancia
async function handleSendMessage(db, data, owner, jsonData, serverUrl, apiKey, io) {
  try {
    // Los mensajes enviados también se pueden almacenar como mensajes normales
    await storeMessage(db, data, owner, jsonData, serverUrl, apiKey, io);
  } catch (error) {
    console.error('Error al manejar mensaje enviado:', error);
  }
}

export default router;
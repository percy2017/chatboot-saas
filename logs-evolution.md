  pushName: 'Lisden',
      
  message: {
    videoMessage: VideoMessage {
      interactiveAnnotations: [],
      annotations: [],
      url: 'https://mmg.whatsapp.net/v/t62.7161-24/540156078_1290656659225229_1896413559280881886_n.enc?ccb=11-4&oh=01_Q5Aa2QH0ASXKX44y8y_IuG1k2p3ZCRDWDFtXzgr5UwT9w0F7Bw&oe=68D7633D&_nc_sid=5e03e0&mms3=true',
      mimetype: 'video/mp4',
      fileSha256: [Uint8Array],
      fileLength: [Long],
      seconds: 10,
      mediaKey: [Uint8Array],
      caption: 'Disponibles✅',
      height: 848,
      width: 476,
      fileEncSha256: [Uint8Array],
      directPath: '/v/t62.7161-24/540156078_1290656659225229_1896413559280881886_n.enc?ccb=11-4&oh=01_Q5Aa2QH0ASXKX44y8y_IuG1k2p3ZCRDWDFtXzgr5UwT9w0F7Bw&oe=68D7633D&_nc_sid=5e03e0',
      mediaKeyTimestamp: [Long],
      jpegThumbnail: [Uint8Array],
      contextInfo: [ContextInfo],
      streamingSidecar: [Uint8Array],
      thumbnailDirectPath: '/v/t62.36147-24/539883587_1147619020747929_2352877377550592879_n.enc?ccb=11-4&oh=01_Q5Aa2QFG4gJc89vRMe-0rz5qk4ptM-pm-9NZRhqWEII1z7FwEg&oe=68D73AE5&_nc_sid=5e03e0',
      thumbnailSha256: [Uint8Array],
      thumbnailEncSha256: [Uint8Array]
    },
    messageContextInfo: MessageContextInfo {
      deviceListMetadata: [DeviceListMetadata],
      deviceListMetadataVersion: 2,
      messageSecret: [Uint8Array]
    }
  },
  contextInfo: ContextInfo { mentionedJid: [], groupMentions: [], isSampled: true },
  messageType: 'videoMessage',
  messageTimestamp: 1756355557,
  owner: 'tigo1',
  source: 'android'
} 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event MESSAGES_UPSERT 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [AuthRepository]  [string]  finding auth in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  event whatsapp to instance: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  get client to instance: tigo1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [Socket]  [string]  Getting Socket.io 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'messages.upsert',
  instance: 'tigo1',
      
{
    key: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'B0B5505C69D31B878511C858B86F2FEA',
      participant: '59163552879@s.whatsapp.net'
    },
    pushName: 'Lisden',
    message: {
      videoMessage: [VideoMessage],
      messageContextInfo: [MessageContextInfo]
    },
    contextInfo: ContextInfo {
      mentionedJid: [],
      groupMentions: [],
      isSampled: true
    },
    messageType: 'videoMessage',
    messageTimestamp: 1756355557,
    owner: 'tigo1',
    source: 'android'
  },
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:32:37.344Z',
  sender: '59169375664@s.whatsapp.net'
} 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'messages.upsert',
  instance: 'tigo1',
      
{
    key: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'B0B5505C69D31B878511C858B86F2FEA',
      participant: '59163552879@s.whatsapp.net'
    },
    pushName: 'Lisden',
    message: {
      videoMessage: [VideoMessage],
      messageContextInfo: [MessageContextInfo]
    },
    contextInfo: ContextInfo {
      mentionedJid: [],
      groupMentions: [],
      isSampled: true
    },
    messageType: 'videoMessage',
    messageTimestamp: 1756355557,
    owner: 'tigo1',
    source: 'android'
  },
  destination: undefined,
  date_time: '2025-08-28T01:32:37.344Z',
  sender: '59169375664@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  get provider to instance: tigo1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Finding chatwoot 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootRepository]  [string]  finding chatwoot 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootRepository]  [string]  finding chatwoot in store 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot account id: 1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot token: yphoCJBPeWbjXjAQP16P64z5 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot url: https://crm.iptvbolivia.com 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot inbox name: tigo1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot sign msg: false 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot sign delimiter: null 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot reopen conversation: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot conversation pending: false 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot merge brazilian contacts: undefined 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot import contacts: true 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot import messages: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Chatwoot days limit import messages: 0 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  provider found 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  provider found 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  create client to instance: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  client created 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  event messages.upsert 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChatwootService]  [string]  status broadcast found 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Inserting message in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [MessageRepository]  [string]  inserting messages 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [MessageRepository]  [string]  saving messages to store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [MessageRepository]  [string]  saving messages to store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [MessageRepository]  [string]  messages saved to store in path: /evolution/store/messages/tigo1/B0B5505C69D31B878511C858B86F2FEA 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [MessageRepository]  [string]  messages saved to store: 1 messages 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Verifying contact from message 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  finding contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  finding contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  finding contacts in store by id 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: status@broadcast 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Number already contains @broadcast 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: status@broadcast 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Profile picture not found 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [AuthRepository]  [string]  finding auth in store 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/tigo1/59163552879@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [Socket]  [string]  Getting Socket.io 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'tigo1',
      
[
    {
      id: '59163552879@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: null,
      owner: 'tigo1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:32:37.835Z',
  sender: '59169375664@s.whatsapp.net'
} 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'tigo1',
      
[
    {
      id: '59163552879@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: null,
      owner: 'tigo1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:32:37.835Z',
  sender: '59169375664@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:37     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert, messages.update, contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.upsert 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.update 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Listening event: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Event received: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Verifying if contacts exists in database to update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  message rejected 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Number already contains @g.us or @s.whatsapp.net or @lid 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [AuthRepository]  [string]  finding auth in store 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/entel1/59172811368@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: entel1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [Socket]  [string]  Getting Socket.io 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:32:43.838Z',
  sender: '59171146267@s.whatsapp.net'
} 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:32:43.838Z',
  sender: '59171146267@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:43     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert, messages.update, contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.upsert 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.update 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Listening event: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Event received: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Verifying if contacts exists in database to update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  message rejected 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Number already contains @g.us or @s.whatsapp.net or @lid 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [AuthRepository]  [string]  finding auth in store 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/entel1/59172811368@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: entel1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [Socket]  [string]  Getting Socket.io 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:32:55.245Z',
  sender: '59171146267@s.whatsapp.net'
} 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:32:55.245Z',
  sender: '59171146267@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:32:55     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert, messages.update, contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.upsert 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.update 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Listening event: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Event received: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Verifying if contacts exists in database to update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  message rejected 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Number already contains @g.us or @s.whatsapp.net or @lid 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [AuthRepository]  [string]  finding auth in store 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/entel1/59172811368@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: entel1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [Socket]  [string]  Getting Socket.io 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:33:05.538Z',
  sender: '59171146267@s.whatsapp.net'
} 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:33:05.538Z',
  sender: '59171146267@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:05     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert, messages.update, contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.upsert 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.update 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Listening event: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Event received: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Verifying if contacts exists in database to update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  message rejected 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Number already contains @g.us or @s.whatsapp.net or @lid 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [AuthRepository]  [string]  finding auth in store 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/entel1/59172811368@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: entel1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [Socket]  [string]  Getting Socket.io 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:33:15.442Z',
  sender: '59171146267@s.whatsapp.net'
} 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:33:15.442Z',
  sender: '59171146267@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:15     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Event received: creds.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:16     VERBOSE   [ChannelStartupService]  [string]  Listening event: creds.update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Event received: creds.update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:17     VERBOSE   [ChannelStartupService]  [string]  Listening event: creds.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert, messages.update, contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.upsert 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.update 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Listening event: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Event received: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Verifying if contacts exists in database to update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  message rejected 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Number already contains @g.us or @s.whatsapp.net or @lid 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [AuthRepository]  [string]  finding auth in store 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/entel1/59172811368@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: entel1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [Socket]  [string]  Getting Socket.io 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:33:26.230Z',
  sender: '59171146267@s.whatsapp.net'
} 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:33:26.230Z',
  sender: '59171146267@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:26     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert, messages.update, contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.upsert 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.update 
     
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Listening event: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Event received: contacts.update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Verifying if contacts exists in database to update 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  message rejected 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Number already contains @g.us or @s.whatsapp.net or @lid 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: 59172811368@s.whatsapp.net 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [AuthRepository]  [string]  finding auth in store 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/entel1/59172811368@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: entel1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [Socket]  [string]  Getting Socket.io 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:33:36.128Z',
  sender: '59171146267@s.whatsapp.net'
} 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'entel1',
      
[
    {
      id: '59172811368@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: 'https://pps.whatsapp.net/v/t61.24694-24/344538218_908830263711898_5510116081957250700_n.jpg?ccb=11-4&oh=01_Q5Aa2QFES0F0KMz-ed9rgl-Y09ELOV6JNVjnTMkw5awqPsMIyA&oe=68BCF6FC&_nc_sid=5e03e0&_nc_cat=110',
      owner: 'entel1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:33:36.128Z',
  sender: '59171146267@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
     
m[Evolution API]  [entel1]  v1.8.2  1   -  Thu Aug 28 2025 01:33:36     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Event received: chats.update, messages.upsert, contacts.update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Finding settings 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [SettingsRepository]  [string]  finding settings 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [SettingsRepository]  [string]  finding settings in store 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Settings url: false 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Settings msg_call:  
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Settings groups_ignore: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Settings always_online: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Settings read_messages: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Settings read_status: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Settings sync_full_history: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Listening event: messages.upsert 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Event received: messages.upsert 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Listening event: chats.update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Event received: chats.update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CHATS_UPDATE 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [AuthRepository]  [string]  finding auth in store 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Listening event: contacts.update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Event received: contacts.update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Verifying if contacts exists in database to update 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [Socket]  [string]  Getting Socket.io 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'chats.update',
  instance: 'tigo1',
  data: [ { id: 'status@broadcast', owner: '59169375664@s.whatsapp.net' } ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:35:49.033Z',
  sender: '59169375664@s.whatsapp.net'
} 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'chats.update',
  instance: 'tigo1',
  data: [ { id: 'status@broadcast', owner: '59169375664@s.whatsapp.net' } ],
  destination: undefined,
  date_time: '2025-08-28T01:35:49.033Z',
  sender: '59169375664@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: 59176908421@s.whatsapp.net 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Number already contains @g.us or @s.whatsapp.net or @lid 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: 59176908421@s.whatsapp.net 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     LOG   [ChannelStartupService]  [object]   
{
  key: {
    remoteJid: 'status@broadcast',
    fromMe: false,
    id: 'C4EFBC1AC12B90C7776D614845740472',
    participant: '59176908421@s.whatsapp.net'
  },
  pushName: 'Aggg',
      
  message: {
    senderKeyDistributionMessage: SenderKeyDistributionMessage {
      groupId: 'status@broadcast',
      axolotlSenderKeyDistributionMessage: [Uint8Array]
    },
    messageContextInfo: MessageContextInfo { messageSecret: [Uint8Array] },
    videoMessage: VideoMessage {
      interactiveAnnotations: [],
      annotations: [],
      url: 'https://mmg.whatsapp.net/v/t62.7161-24/539982285_1052586050048353_5328518140227953709_n.enc?ccb=11-4&oh=01_Q5Aa2QFpXcoQLVbNLXuMqiBzyLl-ZnJVTIMXZUd5BfPw63Io3A&oe=68D75D14&_nc_sid=5e03e0&mms3=true',
      mimetype: 'video/mp4',
      fileSha256: [Uint8Array],
      fileLength: [Long],
      seconds: 16,
      mediaKey: [Uint8Array],
      caption: 'Bueno empezamos con lo privado quien quien se apunta 😅👉👌🍻💫',
      height: 850,
      width: 474,
      fileEncSha256: [Uint8Array],
      directPath: '/v/t62.7161-24/539982285_1052586050048353_5328518140227953709_n.enc?ccb=11-4&oh=01_Q5Aa2QFpXcoQLVbNLXuMqiBzyLl-ZnJVTIMXZUd5BfPw63Io3A&oe=68D75D14&_nc_sid=5e03e0',
      mediaKeyTimestamp: [Long],
      jpegThumbnail: [Uint8Array],
      contextInfo: [ContextInfo],
      streamingSidecar: [Uint8Array],
      thumbnailDirectPath: '/v/t62.36147-24/540112875_1302629074686205_8350401696263552313_n.enc?ccb=11-4&oh=01_Q5Aa2QGaQ8wLXzlZYx9kHwljZHpsapuSSYBEVn9jdwRbmq3enw&oe=68D731EA&_nc_sid=5e03e0',
      thumbnailSha256: [Uint8Array],
      thumbnailEncSha256: [Uint8Array]
    }
  },
  contextInfo: ContextInfo { mentionedJid: [], groupMentions: [] },
  messageType: 'videoMessage',
  messageTimestamp: 1756355745,
  owner: 'tigo1',
  source: 'android'
} 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event MESSAGES_UPSERT 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [AuthRepository]  [string]  finding auth in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  event whatsapp to instance: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  get client to instance: tigo1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [Socket]  [string]  Getting Socket.io 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'messages.upsert',
  instance: 'tigo1',
      
{
    key: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'C4EFBC1AC12B90C7776D614845740472',
      participant: '59176908421@s.whatsapp.net'
    },
    pushName: 'Aggg',
    message: {
      senderKeyDistributionMessage: [SenderKeyDistributionMessage],
      messageContextInfo: [MessageContextInfo],
      videoMessage: [VideoMessage]
    },
    contextInfo: ContextInfo { mentionedJid: [], groupMentions: [] },
    messageType: 'videoMessage',
    messageTimestamp: 1756355745,
    owner: 'tigo1',
    source: 'android'
  },
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:35:49.038Z',
  sender: '59169375664@s.whatsapp.net'
} 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'messages.upsert',
  instance: 'tigo1',
      
{
    key: {
      remoteJid: 'status@broadcast',
      fromMe: false,
      id: 'C4EFBC1AC12B90C7776D614845740472',
      participant: '59176908421@s.whatsapp.net'
    },
    pushName: 'Aggg',
    message: {
      senderKeyDistributionMessage: [SenderKeyDistributionMessage],
      messageContextInfo: [MessageContextInfo],
      videoMessage: [VideoMessage]
    },
    contextInfo: ContextInfo { mentionedJid: [], groupMentions: [] },
    messageType: 'videoMessage',
    messageTimestamp: 1756355745,
    owner: 'tigo1',
    source: 'android'
  },
  destination: undefined,
  date_time: '2025-08-28T01:35:49.038Z',
  sender: '59169375664@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  get provider to instance: tigo1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Finding chatwoot 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootRepository]  [string]  finding chatwoot 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootRepository]  [string]  finding chatwoot in store 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot account id: 1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot token: yphoCJBPeWbjXjAQP16P64z5 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot url: https://crm.iptvbolivia.com 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot inbox name: tigo1 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot sign msg: false 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot sign delimiter: null 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot reopen conversation: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot conversation pending: false 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot merge brazilian contacts: undefined 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot import contacts: true 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot import messages: true 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Chatwoot days limit import messages: 0 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  provider found 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  provider found 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  create client to instance: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  client created 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  event messages.upsert 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChatwootService]  [string]  status broadcast found 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Inserting message in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [MessageRepository]  [string]  inserting messages 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [MessageRepository]  [string]  saving messages to store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [MessageRepository]  [string]  saving messages to store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [MessageRepository]  [string]  messages saved to store in path: /evolution/store/messages/tigo1/C4EFBC1AC12B90C7776D614845740472 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [MessageRepository]  [string]  messages saved to store: 1 messages 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Verifying contact from message 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  finding contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  finding contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  finding contacts in store by id 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Creating jid with number: status@broadcast 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Number already contains @broadcast 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture with jid: status@broadcast 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting profile picture url 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Profile picture not found 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook in event CONTACTS_UPDATE 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting instance name 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [AuthRepository]  [string]  finding auth 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [AuthRepository]  [string]  finding auth in store 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Updating contacts in database 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  updating contacts 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  updating contacts in store 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  contacts updated in store in path: /evolution/store/contacts/tigo1/59176908421@s.whatsapp.net 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ContactRepository]  [string]  contacts updated in store: 1 contacts 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to websocket on channel: tigo1 
[Evolution API]    v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [Socket]  [string]  Getting Socket.io 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendData-WebsocketGlobal',
  event: 'contacts.update',
  instance: 'tigo1',
      
[
    {
      id: '59176908421@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: null,
      owner: 'tigo1'
    }
  ],
  server_url: 'http://154.53.42.52:4001',
  apikey: 'Apikey not found',
  date_time: '2025-08-28T01:35:49.397Z',
  sender: '59169375664@s.whatsapp.net'
} 
     
m[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Sending data to webhook global 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     LOG   [ChannelStartupService]  [object]   
{
  local: 'ChannelStartupService.sendDataWebhook-global',
  url: 'http://154.53.42.52:4002/webhook',
  event: 'contacts.update',
  instance: 'tigo1',
      
[
    {
      id: '59176908421@s.whatsapp.net',
      pushName: undefined,
      profilePictureUrl: null,
      owner: 'tigo1'
    }
  ],
  destination: undefined,
  date_time: '2025-08-28T01:35:49.397Z',
  sender: '59169375664@s.whatsapp.net',
  server_url: 'http://154.53.42.52:4001',
  apikey: 'evolution2025'
} 
[Evolution API]  [tigo1]  v1.8.2  1   -  Thu Aug 28 2025 01:35:49     VERBOSE   [ChannelStartupService]  [string]  Getting remoteJid of instance 

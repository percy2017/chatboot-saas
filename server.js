import express from "express";
import expressLayouts from "express-ejs-layouts";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
// Cargar variables de entorno desde .env
import dotenv from 'dotenv';
dotenv.config();

import { initializeDatabase, getDatabase } from "./database/db.js";

// Importar rutas
import mainRoutes from "./routes/main.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import instancesRoutes from "./routes/instances.js";
import webhookRoutes from "./routes/webhook.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para parsear el body en formularios

// Configurar express-session
app.use(
  session({
    secret: "chatbotsaas_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Middleware para añadir 'user' a res.locals para todas las rutas
// Esto hace que 'user' esté disponible en todas las vistas sin tener que pasarlo explícitamente
app.use((req, res, next) => {
  res.locals.user = req.session.userId ? {
    id: req.session.userId,
    email: req.session.userEmail,
    name: req.session.userName,
    role: req.session.userRole,
  } : null;
  next();
});

// Configurar express-ejs-layouts
// DEBE ir después de configurar session y res.locals.user
app.use(expressLayouts);
// Establecer layout predeterminado para todas las rutas
app.set('layout', 'layouts/main'); 
// Permite extraer scripts del body al final del layout
app.set('layout extractScripts', true); 
// Permite extraer estilos del body al head del layout
app.set('layout extractStyles', true);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Establecer layout específico para rutas /admin
// DEBE ir después de app.use(expressLayouts) y app.set('layout', ...)
app.use("/admin", (req, res, next) => {
  // Establecer el layout para todas las vistas renderizadas bajo /admin
  res.locals.layout = 'layouts/admin'; 
  next();
});
app.use(
  session({
    secret: "chatbotsaas_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Inicializar la base de datos
let db;
initializeDatabase()
  .then(() => {
    db = getDatabase();
    console.log("Base de datos inicializada correctamente.");
  })
  .catch((err) => {
    console.error("Error al inicializar la base de datos:", err);
    process.exit(1);
  });

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Hacer io disponible globalmente
app.set('io', io);

io.on("connection", (socket) => {
  const clientId = socket.id;
  console.log("Un cliente se ha conectado:", clientId);
  
  // Manejar eventos del cliente
  socket.on('join_admin', () => {
    socket.join('admin');
    console.log(`Cliente ${clientId} se unió a la sala admin`);
  });

  socket.on('leave_admin', () => {
    socket.leave('admin');
    console.log(`Cliente ${clientId} salió de la sala admin`);
  });

  socket.on('disconnect', () => {
    console.log("Cliente desconectado:", clientId);
  });
});

// Usar las rutas
app.use("/", mainRoutes);
app.use("/", authRoutes);
app.use("/admin", usersRoutes);
app.use("/admin", instancesRoutes);
app.use("/", webhookRoutes);

const PORT = 4002;
httpServer.listen(PORT, () => {
  console.log(`Servidor Socket.IO escuchando en el puerto ${PORT}`);
});

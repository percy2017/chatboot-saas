import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  const clientId = socket.id;
  console.log("Un cliente se ha conectado:", clientId);
});

app.get("/", (req, res) => {
  // Renderiza la vista 'main.ejs' dentro del directorio 'pages'
  res.render("pages/main");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/register", (req, res) => {
  res.render("pages/register");
});

// Ruta para el panel de administración
app.get("/admin", (req, res) => {
  res.render("admin/main");
});

app.post("/webhook", (req, res) => {
  console.log("\n--- Headers: ---");
  console.log(req.headers);
  console.log("\n--- Body (Payload): ---");
  console.log(req.body);
  res.status(200).send('Webhook recibido correctamente.');
});

const PORT = 4002;
httpServer.listen(PORT, () => {
  console.log(`Servidor Socket.IO escuchando en el puerto ${PORT}`);
});
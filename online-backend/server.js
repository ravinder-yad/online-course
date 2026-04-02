const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5174", // Your React/Vite port
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5001;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Load Models & Controllers Logic (Refactored)
const liveRoutes = require("./routes/liveRoutes");
const authRoutes = require("./routes/authRoutes");

const projectRoutes = require("./routes/projectRoutes");
const chatSocket = require("./socket/chatSocket");
chatSocket(io);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/live", liveRoutes);
app.use("/api/projects", projectRoutes);

// Start Server
server.listen(PORT, () => {
  console.log(`Professional Backend Server running on http://localhost:${PORT}`);
  console.log(`Live Classroom Socket logic is active on port 5001`);
});

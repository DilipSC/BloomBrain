const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",  // Frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }
});
const port = 5000;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Frontend URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Serve static files (you can serve React build or static assets)
app.use(express.static("public"));

// Sample route to fetch a list of videos
app.get("/api/videos", (req, res) => {
  const videoDirectory = path.join(__dirname, "videos");

  fs.readdir(videoDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to load videos" });
    }

    const videoFiles = files.filter(file => file.endsWith(".mp4"));
    res.json({ videos: videoFiles });
  });
});

// Serve the video files (Optional - to stream them directly)
app.get("/video/:videoName", (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = path.join(__dirname, "videos", videoName);

  res.sendFile(videoPath, (err) => {
    if (err) {
      res.status(404).send("Video not found");
    }
  });
});

// WebRTC Signaling
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Handle offer from the broadcaster
  socket.on("offer", (offer) => {
    console.log("Received offer:", offer);
    // Broadcast the offer to all other clients (viewers)
    socket.broadcast.emit("offer", offer);
  });

  // Handle answer from the viewer
  socket.on("answer", (answer) => {
    console.log("Received answer:", answer);
    // Broadcast the answer back to the broadcaster
    socket.broadcast.emit("answer", answer);
  });

  // Handle ICE candidates from clients
  socket.on("candidate", (candidate) => {
    console.log("Received candidate:", candidate);
    // Broadcast the candidate to all other clients (viewers)
    socket.broadcast.emit("candidate", candidate);
  });

  // Handle disconnection of a client
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

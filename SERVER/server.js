const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Initialize Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Set up Socket.IO
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Replace with your frontend's URL if different
    methods: ['GET', 'POST'],
  },
});

// Enable CORS for REST APIs
app.use(cors());

// Placeholder for live class details
let liveClass = null;

// REST API to schedule a live class
app.post('/schedule', (req, res) => {
  liveClass = {
    id: new Date().getTime(),
    title: 'Live Class Example',
  };
  res.status(200).send(liveClass);
});

// REST API to fetch live class details
app.get('/live-class', (req, res) => {
  if (liveClass) {
    res.status(200).send(liveClass);
  } else {
    res.status(404).send({ message: 'No live class scheduled.' });
  }
});

// API to list available videos
app.get('/api/videos', (req, res) => {
  const videoDirectory = path.join(__dirname, 'videos'); // Assuming your videos are in the 'videos' folder

  fs.readdir(videoDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load videos' });
    }

    const videoFiles = files.filter(file => file.endsWith('.mp4'));
    res.json({ videos: videoFiles });
  });
});

// API to serve a specific video file
app.get('/video/:videoName', (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = path.join(__dirname, 'videos', videoName);

  res.sendFile(videoPath, (err) => {
    if (err) {
      res.status(404).send('Video not found');
    }
  });
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Chat message handling
  socket.on('chat', (message) => {
    console.log('Chat message:', message);
    io.emit('chat', message); // Broadcast chat messages to all connected clients
  });

  // WebRTC signaling: handle offer
  socket.on('offer', (offer) => {
    console.log('Received offer from:', socket.id);
    socket.broadcast.emit('offer', offer); // Broadcast offer to other clients
  });

  // WebRTC signaling: handle answer
  socket.on('answer', (answer) => {
    console.log('Received answer from:', socket.id);
    socket.broadcast.emit('answer', answer); // Broadcast answer to other clients
  });

  // WebRTC signaling: handle ICE candidates
  socket.on('candidate', (candidate) => {
    console.log('Received candidate:', candidate);
    socket.broadcast.emit('candidate', candidate); // Broadcast candidate to other clients
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
const PORT = 4000; // Define your preferred port
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

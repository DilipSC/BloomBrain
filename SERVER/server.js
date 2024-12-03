const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

// Enable CORS to allow frontend to make requests
app.use(cors());

// Sample route to fetch a list of videos
app.get("/api/videos", (req, res) => {
  // Define the directory where your videos are stored
  const videoDirectory = path.join(__dirname, "videos"); // Assuming your videos are in the 'videos' folder

  // Here, we list all video files in that folder
  const fs = require("fs");

  fs.readdir(videoDirectory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to load videos" });
    }
    
    // Filter only video files (you can extend the logic to check extensions like .mp4, .avi, etc.)
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

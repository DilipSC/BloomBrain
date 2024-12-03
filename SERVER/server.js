const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5000;

// Path to your video directory (e.g., 'videos' directory in the project)
const videoDirectory = path.join(__dirname, "videos");

// Endpoint to fetch video by name
app.get("/video/:videoName", (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = path.join(videoDirectory, videoName);

  // Check if the file exists
  if (!fs.existsSync(videoPath)) {
    return res.status(404).send("Video not found.");
  }

  // Get the file's stats (for proper handling)
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;

  // Set headers for proper video streaming
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Content-Length", fileSize);
  res.setHeader("Accept-Ranges", "bytes");

  // Create a read stream and pipe it to the response (efficient for large files)
  const readStream = fs.createReadStream(videoPath);
  readStream.pipe(res);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// src/components/VideoPlayer.jsx
import React, { useState, useEffect } from "react";

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch the list of videos from the API
  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  // Function to handle video click
  const handleVideoClick = (videoName) => {
    setSelectedVideo(`http://localhost:5000/api/video/${videoName}`);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Video List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl"
            onClick={() => handleVideoClick(video)}
          >
            <h3 className="text-white text-lg">{video}</h3>
          </div>
        ))}
      </div>

      {/* Video Player */}
      {selectedVideo && (
        <div className="mt-6">
          <video
            className="w-full h-auto"
            controls
            src={selectedVideo}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

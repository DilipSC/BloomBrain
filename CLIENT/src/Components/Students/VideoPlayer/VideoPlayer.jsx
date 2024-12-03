import { useState, useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch the list of videos from the server
  useEffect(() => {
    fetch("http://localhost:5000/api/videos") // Update with your backend route
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.videos); // Assuming your server sends a list of video filenames
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  // Handler to select and play a video
  const handleVideoClick = (videoName) => {
    setSelectedVideo(videoName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-200">
      <div className="container mx-auto py-10 px-6">
        {/* Header */}
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-100">
          🎥 Video Vault
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video List */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-600 lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200 border-b border-gray-600 pb-2">
              Available Videos
            </h2>
            <ul className="space-y-3">
              {videos.map((video, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 py-3 rounded-md bg-gray-700 text-gray-300 transition-transform transform hover:scale-105 hover:bg-gray-600 hover:text-white hover:shadow-md"
                  onClick={() => handleVideoClick(video)}
                >
                  {video}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Player */}
          {selectedVideo && (
            <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-600">
              <h2 className="text-2xl font-semibold mb-4 text-gray-200 border-b border-gray-600 pb-2">
                Now Playing:{" "}
                <span className="text-gray-400 italic">{selectedVideo}</span>
              </h2>
              <video
                controls
                className="w-full rounded-lg border-4 border-gray-700 shadow-lg"
              >
                <source
                  src={`http://localhost:5000/video/${selectedVideo}`} // Update with your backend route
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

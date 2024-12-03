import { useState, useEffect } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch the list of videos from the server
  useEffect(() => {
    fetch("http://localhost:5000/api/videos")  // Make sure the URL matches your backend route
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.videos);  // Assuming your server sends a list of video filenames
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  // Handler to select and play a video
  const handleVideoClick = (videoName) => {
    setSelectedVideo(videoName);
  };

  return (
    <div className="App">
      <div className="video-list">
        <h2 className="text-2xl font-bold">Available Videos</h2>
        <ul className="list-disc">
          {videos.map((video, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => handleVideoClick(video)}
            >
              {video}
            </li>
          ))}
        </ul>
      </div>

      {/* Display the video player if a video is selected */}
      {selectedVideo && (
        <div className="video-player mt-4">
          <video controls className="w-full h-auto">
            <source
              src={`http://localhost:5000/video/${selectedVideo}`}  // Ensure this URL matches your backend
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default App;

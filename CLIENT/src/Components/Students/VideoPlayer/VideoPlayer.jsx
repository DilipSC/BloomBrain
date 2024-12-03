import { useState, useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [doubts, setDoubts] = useState([]); // State for storing doubts
  const [doubtText, setDoubtText] = useState(""); // State for input doubt text
  const [replyText, setReplyText] = useState(""); // State for reply text
  const [selectedDoubtIndex, setSelectedDoubtIndex] = useState(null); // To track which doubt is being replied to

  // Fetch the list of videos from the server
  useEffect(() => {
    fetch("http://localhost:5000/api/videos")
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

  // Handle submitting a doubt
  const handleDoubtSubmit = (e) => {
    e.preventDefault();
    if (doubtText.trim()) {
      setDoubts([
        ...doubts,
        { text: doubtText, replies: [] } // Add the new doubt with an empty replies array
      ]);
      setDoubtText(""); // Clear input field
    }
  };

  // Handle submitting a reply
  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim() && selectedDoubtIndex !== null) {
      const updatedDoubts = [...doubts];
      updatedDoubts[selectedDoubtIndex].replies.push(replyText);
      setDoubts(updatedDoubts); // Update the doubts state with the new reply
      setReplyText(""); // Clear the reply input field
      setSelectedDoubtIndex(null); // Reset the selected doubt index
    }
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
                  src={`http://localhost:5000/video/${selectedVideo}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        {/* Doubts and Replies Section */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-600 mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200 border-b border-gray-600 pb-2">
            Ask a Question or Post a Doubt
          </h2>
          <form onSubmit={handleDoubtSubmit} className="space-y-4">
            <textarea
              value={doubtText}
              onChange={(e) => setDoubtText(e.target.value)}
              placeholder="Type your doubt here..."
              className="w-full p-4 bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg transition-colors"
            >
              Post Doubt
            </button>
          </form>

          {/* List of Doubts */}
          <div className="mt-6 space-y-6">
            {doubts.map((doubt, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <p className="text-gray-300">{doubt.text}</p>

                {/* Replies */}
                {doubt.replies.length > 0 && (
                  <div className="mt-4 space-y-2 pl-4">
                    {doubt.replies.map((reply, replyIndex) => (
                      <p key={replyIndex} className="text-gray-400 italic">
                        Tutor Reply: {reply}
                      </p>
                    ))}
                  </div>
                )}

                {/* Reply Form */}
                <button
                  onClick={() => setSelectedDoubtIndex(index)}
                  className="mt-2 text-blue-400 hover:text-blue-300"
                >
                  Reply
                </button>

                {selectedDoubtIndex === index && (
                  <form onSubmit={handleReplySubmit} className="mt-4 space-y-2">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write your reply..."
                      className="w-full p-2 bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      rows="2"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg transition-colors"
                    >
                      Submit Reply
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

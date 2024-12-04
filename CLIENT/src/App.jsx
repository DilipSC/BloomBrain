<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/LiveClass/Homepage";
import LiveStreaming from "./Components/LiveClass/LiveStreaming";
import StartStream from "./Components/LiveClass/StartStream";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar (Optional) */}
        <nav>
          <a href="/">Home</a> | <a href="/start-stream">Start Stream</a> |{" "}
          <a href="/live/1">Live Streaming</a>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start-stream" element={<StartStream />} />
          <Route path="/live/:id" element={<LiveStreaming />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

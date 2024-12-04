import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BroadcasterPage from './Components/LiveRTC/BroadcasterPage'; // Your Home Page component
import ViewerPage from './Components/LiveRTC/ViewerPage'; // Your Video Page component (for viewing videos)
 // Your Streaming Page component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route path="/streamer" element={<BroadcasterPage />} />
          <Route path="/viewer" element={<ViewerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import LandingPage from './Components/LandingPage/LandingPage';
import SignUpForm from './Components/SignUpForm';
import WorkInfo from './Components/preferences/WorkInfo';
import LearningGoals from './Components/preferences/LearningGoals';
import CoursePreferences from './Components/preferences/CoursePreferences';
import LanguageAccessibility from './Components/preferences/LanguageAccessibility';
import LearningStyle from './Components/preferences/LearningStyle';
import Communication from './Components/preferences/Communication';
import Payment from './Components/preferences/Payment';
import SocialEngagement from './Components/preferences/SocialEngagement';
import DevicePreferences from './Components/preferences/DevicePreferences';
import ThankYou from './Components/preferences/ThankYou';
import InstructorDashboard from './Components/Tutor/InstructorDashboard/InstructorDashboard';
import UserDashboard from './Components/Students/Dashboard/UserDash';
import Profile from './Components/Students/Dashboard/Settings';
import VideoPlayer from './Components/Students/VideoPlayer/VideoPlayer';
import Review from './Components/review';
import Dash from './Components/Students/Dashboard/UserDash';
import StartLiveClass from './Components/Tutor/InstructorDashboard/start-live-class';

function App() {
  return (
    <Router>
      <Routes>
        {/* Root path */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpForm />} />

        {/* Group routes under Layout */}
        <Route path="/preferences" element={<Layout />}>
          <Route path="work-info" element={<WorkInfo />} />
          <Route path="learning-goals" element={<LearningGoals />} />
          <Route path="course-preferences" element={<CoursePreferences />} />
          <Route path="language-accessibility" element={<LanguageAccessibility />} />
          <Route path="learning-style" element={<LearningStyle />} />
          <Route path="communication" element={<Communication />} />
          <Route path="payment" element={<Payment />} />
          <Route path="social-engagement" element={<SocialEngagement />} />
          <Route path="device-preferences" element={<DevicePreferences />} />
          <Route path="thank-you" element={<ThankYou />} />
        </Route>

        {/* Other routes */}
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/student-dashboard" element={<UserDashboard />} />
        <Route path="/student-profile" element={<Profile />} />
        <Route path="/student-video" element={<VideoPlayer />} />
        <Route path="/review" element={<Review />} />
        <Route path="/student-dashboard/dash" element={<Dash />} />
        <Route path="/start-live-class" element={<StartLiveClass />} />
      </Routes>
    </Router>
  );
}

export default App;

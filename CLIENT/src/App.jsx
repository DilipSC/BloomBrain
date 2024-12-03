import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import SignUpForm from './components/SignUpForm';
import WorkInfo from './components/preferences/WorkInfo';
import LearningGoals from './components/preferences/LearningGoals';
import CoursePreferences from './components/preferences/CoursePreferences';
import LanguageAccessibility from './components/preferences/LanguageAccessibility';
import LearningStyle from './components/preferences/LearningStyle';
import Communication from './components/preferences/Communication';
import Payment from './components/preferences/Payment';
import SocialEngagement from './components/preferences/SocialEngagement';
import DevicePreferences from './components/preferences/DevicePreferences';
import ThankYou from './components/preferences/ThankYou';
import InstructorDashboard from './Components/Tutor/InstructorDashboard/InstructorDashboard';
import UserDashboard from './components/Students/Dashboard/UserDash';
import Profile from './components/Students/Dashboard/Settings';
import VideoPlayer from './components/Students/VideoPlayer/VideoPlayer';
import Review from './components/review';
import Dash from './components/Students/Dashboard/UserDash';
import StartLiveClass from './components/Tutor/InstructorDashboard/start-live-class';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/preferences/work-info" element={<WorkInfo />} />
          <Route path="/preferences/learning-goals" element={<LearningGoals />} />
          <Route path="/preferences/course-preferences" element={<CoursePreferences />} />
          <Route path="/preferences/language-accessibility" element={<LanguageAccessibility />} />
          <Route path="/preferences/learning-style" element={<LearningStyle />} />
          <Route path="/preferences/communication" element={<Communication />} />
          <Route path="/preferences/payment" element={<Payment />} />
          <Route path="/preferences/social-engagement" element={<SocialEngagement />} />
          <Route path="/preferences/device-preferences" element={<DevicePreferences />} />
          <Route path="/preferences/thank-you" element={<ThankYou />} />
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="/student-dashboard" element={<UserDashboard />} />
          <Route path="/student-profile" element={<Profile />} />
          <Route path="/student-video" element={<VideoPlayer />} />
          <Route path="/review" element={<Review />} />
          <Route path="/student-dashboard/dash" element={<Dash />} />
          <Route path="/start-live-class" element={<StartLiveClass />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

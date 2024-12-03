import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PreferencesPage = () => {
  const [preferences, setPreferences] = useState({
    workType: '',
    role: '',
    companySize: '',
    learningGoal: '',
    whyHere: '',
    topicsOfInterest: [],
    skillLevel: '',
    courseFormat: [],
    preferredDuration: '',
    preferredLanguage: 'English',
    accessibilityOptions: [],
    learningPace: '',
    assessmentType: [],
    learningAids: [],
    notifications: [],
    newsletter: false,
    paymentMethod: '',
    subscriptionModel: '',
    interactionLevel: [],
    instructorFeedback: false,
    primaryDevice: '',
    offlineAccess: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? 
        (checked ? 
          [...prev[name], value] : 
          prev[name].filter(item => item !== value)
        ) : 
        value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Preferences submitted:', preferences);
    // Here you would typically send the data to your backend
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Preferences</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Work Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Work Information</h2>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="workType" className="block text-sm font-medium text-gray-700">
                    What kind of work do you do?
                  </label>
                  <input
                    type="text"
                    name="workType"
                    id="workType"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={preferences.workType}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    What is your role?
                  </label>
                  <input
                    type="text"
                    name="role"
                    id="role"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={preferences.role}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">
                    Size of company
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={preferences.companySize}
                    onChange={handleInputChange}
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="learningGoal" className="block text-sm font-medium text-gray-700">
                    What do you want to learn?
                  </label>
                  <input
                    type="text"
                    name="learningGoal"
                    id="learningGoal"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={preferences.learningGoal}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Goals</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you here?
                </label>
                <select
                  name="whyHere"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  value={preferences.whyHere}
                  onChange={handleInputChange}
                >
                  <option value="">Select a reason</option>
                  <option value="Career Advancement">Career Advancement</option>
                  <option value="Skill Development">Skill Development</option>
                  <option value="Hobby or Personal Growth">Hobby or Personal Growth</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Course Preferences */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Topics of Interest
                  </label>
                  <div className="space-y-2">
                    {['Technology', 'Business', 'Design', 'Personal Development', 'Other'].map((topic) => (
                      <div key={topic} className="flex items-center">
                        <input
                          id={`topic-${topic}`}
                          name="topicsOfInterest"
                          type="checkbox"
                          value={topic}
                          checked={preferences.topicsOfInterest.includes(topic)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`topic-${topic}`} className="ml-2 block text-sm text-gray-900">
                          {topic}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skill Level
                  </label>
                  <div className="space-y-2">
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <div key={level} className="flex items-center">
                        <input
                          id={`skill-${level}`}
                          name="skillLevel"
                          type="radio"
                          value={level}
                          checked={preferences.skillLevel === level}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`skill-${level}`} className="ml-2 block text-sm text-gray-900">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Format
                  </label>
                  <div className="space-y-2">
                    {['Video Lectures', 'Reading Materials', 'Hands-on Projects'].map((format) => (
                      <div key={format} className="flex items-center">
                        <input
                          id={`format-${format}`}
                          name="courseFormat"
                          type="checkbox"
                          value={format}
                          checked={preferences.courseFormat.includes(format)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`format-${format}`} className="ml-2 block text-sm text-gray-900">
                          {format}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Duration
                  </label>
                  <div className="space-y-2">
                    {['Short (Less than 2 hours)', 'Medium (2–10 hours)', 'Long (10+ hours)'].map((duration) => (
                      <div key={duration} className="flex items-center">
                        <input
                          id={`duration-${duration}`}
                          name="preferredDuration"
                          type="radio"
                          value={duration}
                          checked={preferences.preferredDuration === duration}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`duration-${duration}`} className="ml-2 block text-sm text-gray-900">
                          {duration}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Language and Accessibility */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Language and Accessibility</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700">
                    Preferred Language for Learning
                  </label>
                  <select
                    id="preferredLanguage"
                    name="preferredLanguage"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={preferences.preferredLanguage}
                    onChange={handleInputChange}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Chinese">Chinese</option>
                    {/* Add more language options as needed */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Accessibility Options
                  </label>
                  <div className="space-y-2">
                    {['Enable Subtitles/Closed Captions', 'High-Contrast Mode', 'Screen Reader Compatibility'].map((option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={`accessibility-${option}`}
                          name="accessibilityOptions"
                          type="checkbox"
                          value={option}
                          checked={preferences.accessibilityOptions.includes(option)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`accessibility-${option}`} className="ml-2 block text-sm text-gray-900">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Style */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Style</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Pace
                  </label>
                  <div className="space-y-2">
                    {['Self-Paced', 'Scheduled'].map((pace) => (
                      <div key={pace} className="flex items-center">
                        <input
                          id={`pace-${pace}`}
                          name="learningPace"
                          type="radio"
                          value={pace}
                          checked={preferences.learningPace === pace}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`pace-${pace}`} className="ml-2 block text-sm text-gray-900">
                          {pace}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assessment Type
                  </label>
                  <div className="space-y-2">
                    {['Quizzes', 'Projects', 'Interactive Exercises'].map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          id={`assessment-${type}`}
                          name="assessmentType"
                          type="checkbox"
                          value={type}
                          checked={preferences.assessmentType.includes(type)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`assessment-${type}`} className="ml-2 block text-sm text-gray-900">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Aids
                  </label>
                  <div className="space-y-2">
                    {['Summaries', 'Practice Exercises', 'Cheat Sheets'].map((aid) => (
                      <div key={aid} className="flex items-center">
                        <input
                          id={`aid-${aid}`}
                          name="learningAids"
                          type="checkbox"
                          value={aid}
                          checked={preferences.learningAids.includes(aid)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`aid-${aid}`} className="ml-2 block text-sm text-gray-900">
                          {aid}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Preferences */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Communication Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notifications
                  </label>
                  <div className="space-y-2">
                    {['Course Updates', 'Assignment Reminders', 'Promotional Offers'].map((notification) => (
                      <div key={notification} className="flex items-center">
                        <input
                          id={`notification-${notification}`}
                          name="notifications"
                          type="checkbox"
                          value={notification}
                          checked={preferences.notifications.includes(notification)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`notification-${notification}`} className="ml-2 block text-sm text-gray-900">
                          {notification}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Newsletter Subscription
                  </label>
                  <div className="flex items-center">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="checkbox"
                      checked={preferences.newsletter}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-900">
                      Yes, send me updates and tips
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Preferences */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Payment Method
                  </label>
                  <div className="space-y-2">
                    {['Credit/Debit Card', 'PayPal', 'Digital Wallet'].map((method) => (
                      <div key={method} className="flex items-center">
                        <input
                          id={`payment-${method}`}
                          name="paymentMethod"
                          type="radio"
                          value={method}
                          checked={preferences.paymentMethod === method}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`payment-${method}`} className="ml-2 block text-sm text-gray-900">
                          {method}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subscription Model
                  </label>
                  <div className="space-y-2">
                    {['Monthly Subscription', 'Annual Subscription', 'Pay-Per-Course'].map((model) => (
                      <div key={model} className="flex items-center">
                        <input
                          id={`subscription-${model}`}
                          name="subscriptionModel"
                          type="radio"
                          value={model}
                          checked={preferences.subscriptionModel === model}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`subscription-${model}`} className="ml-2 block text-sm text-gray-900">
                          {model}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social and Engagement */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Social and Engagement</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interaction Level
                  </label>
                  <div className="space-y-2">
                    {['Enable Discussion Forums', 'Participate in Peer Reviews', 'Join Group Projects'].map((interaction) => (
                      <div key={interaction} className="flex items-center">
                        <input
                          id={`interaction-${interaction}`}
                          name="interactionLevel"
                          type="checkbox"
                          value={interaction}
                          checked={preferences.interactionLevel.includes(interaction)}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`interaction-${interaction}`} className="ml-2 block text-sm text-gray-900">
                          {interaction}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instructor Feedback
                  </label>
                  <div className="flex items-center">
                    <input
                      id="instructorFeedback"
                      name="instructorFeedback"
                      type="checkbox"
                      checked={preferences.instructorFeedback}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="instructorFeedback" className="ml-2 block text-sm text-gray-900">
                      I want direct feedback from instructors
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Device Preferences */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Device Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Device for Learning
                  </label>
                  <div className="space-y-2">
                    {['Desktop', 'Tablet', 'Mobile'].map((device) => (
                      <div key={device} className="flex items-center">
                        <input
                          id={`device-${device}`}
                          name="primaryDevice"
                          type="radio"
                          value={device}
                          checked={preferences.primaryDevice === device}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <label htmlFor={`device-${device}`} className="ml-2 block text-sm text-gray-900">
                          {device}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offline Access
                  </label>
                  <div className="flex items-center">
                    <input
                      id="offlineAccess"
                      name="offlineAccess"
                      type="checkbox"
                      checked={preferences.offlineAccess}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="offlineAccess" className="ml-2 block text-sm text-gray-900">
                      Allow offline downloads for courses
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PreferencesPage;


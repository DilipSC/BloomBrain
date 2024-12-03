import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageAccessibility = () => {
  const [preferences, setPreferences] = useState({
    preferredLanguage: 'English',
    accessibilityOptions: [],
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setPreferences(prev => ({
        ...prev,
        [name]: e.target.checked
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
      }));
    } else {
      setPreferences(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Language and Accessibility Preferences submitted:', preferences);
    navigate('/preferences/learning-style');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Language and Accessibility</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="preferredLanguage" className="block text-white mb-2">Preferred Language for Learning</label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={preferences.preferredLanguage}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
        <div>
          <label className="block text-white mb-2">Accessibility Options</label>
          {['Enable Subtitles/Closed Captions', 'High-Contrast Mode', 'Screen Reader Compatibility'].map((option) => (
            <div key={option} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`accessibility-${option}`}
                name="accessibilityOptions"
                value={option}
                checked={preferences.accessibilityOptions.includes(option)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`accessibility-${option}`} className="text-white">{option}</label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default LanguageAccessibility;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SocialEngagement = () => {
  const [preferences, setPreferences] = useState({
    interactionLevel: [],
    instructorFeedback: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'instructorFeedback') {
        setPreferences(prev => ({ ...prev, [name]: checked }));
      } else {
        setPreferences(prev => ({
          ...prev,
          [name]: checked
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Social and Engagement Preferences submitted:', preferences);
    navigate('/preferences/device-preferences');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Social and Engagement</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Interaction Level</label>
          {['Enable Discussion Forums', 'Participate in Peer Reviews', 'Join Group Projects'].map((interaction) => (
            <div key={interaction} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`interaction-${interaction}`}
                name="interactionLevel"
                value={interaction}
                checked={preferences.interactionLevel.includes(interaction)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`interaction-${interaction}`} className="text-white">{interaction}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Instructor Feedback</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="instructorFeedback"
              name="instructorFeedback"
              checked={preferences.instructorFeedback}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="instructorFeedback" className="text-white">I want direct feedback from instructors</label>
          </div>
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

export default SocialEngagement;


'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LearningStyle() {
  const [preferences, setPreferences] = useState({
    learningPace: '',
    assessmentType: [],
    learningAids: [],
  });
  const router = useRouter();

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
    console.log('Learning Style Preferences submitted:', preferences);
    router.push('/preferences/communication');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Learning Style</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Learning Pace</label>
          {['Self-Paced', 'Scheduled'].map((pace) => (
            <div key={pace} className="flex items-center mb-2">
              <input
                type="radio"
                id={`pace-${pace}`}
                name="learningPace"
                value={pace}
                checked={preferences.learningPace === pace}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`pace-${pace}`} className="text-white">{pace}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Assessment Type</label>
          {['Quizzes', 'Projects', 'Interactive Exercises'].map((type) => (
            <div key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`assessment-${type}`}
                name="assessmentType"
                value={type}
                checked={preferences.assessmentType.includes(type)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`assessment-${type}`} className="text-white">{type}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Learning Aids</label>
          {['Summaries', 'Practice Exercises', 'Cheat Sheets'].map((aid) => (
            <div key={aid} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`aid-${aid}`}
                name="learningAids"
                value={aid}
                checked={preferences.learningAids.includes(aid)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`aid-${aid}`} className="text-white">{aid}</label>
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
}


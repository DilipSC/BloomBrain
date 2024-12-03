'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CoursePreferences() {
  const [preferences, setPreferences] = useState({
    topicsOfInterest: [],
    skillLevel: '',
    courseFormat: [],
    preferredDuration: '',
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
    console.log('Course Preferences submitted:', preferences);
    router.push('/preferences/language-accessibility');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Course Preferences</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Topics of Interest</label>
          {['Technology', 'Business', 'Design', 'Personal Development', 'Other'].map((topic) => (
            <div key={topic} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`topic-${topic}`}
                name="topicsOfInterest"
                value={topic}
                checked={preferences.topicsOfInterest.includes(topic)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`topic-${topic}`} className="text-white">{topic}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Skill Level</label>
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <div key={level} className="flex items-center mb-2">
              <input
                type="radio"
                id={`skill-${level}`}
                name="skillLevel"
                value={level}
                checked={preferences.skillLevel === level}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`skill-${level}`} className="text-white">{level}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Course Format</label>
          {['Video Lectures', 'Reading Materials', 'Hands-on Projects'].map((format) => (
            <div key={format} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`format-${format}`}
                name="courseFormat"
                value={format}
                checked={preferences.courseFormat.includes(format)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`format-${format}`} className="text-white">{format}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Preferred Duration</label>
          {['Short (Less than 2 hours)', 'Medium (2–10 hours)', 'Long (10+ hours)'].map((duration) => (
            <div key={duration} className="flex items-center mb-2">
              <input
                type="radio"
                id={`duration-${duration}`}
                name="preferredDuration"
                value={duration}
                checked={preferences.preferredDuration === duration}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`duration-${duration}`} className="text-white">{duration}</label>
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


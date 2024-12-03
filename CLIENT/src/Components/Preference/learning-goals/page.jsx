'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LearningGoals() {
  const [learningGoals, setLearningGoals] = useState({
    whyHere: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLearningGoals(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Learning Goals submitted:', learningGoals);
    router.push('/preferences/course-preferences');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Learning Goals</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="whyHere" className="block text-white mb-1">Why are you here?</label>
          <select
            id="whyHere"
            name="whyHere"
            value={learningGoals.whyHere}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a reason</option>
            <option value="Career Advancement">Career Advancement</option>
            <option value="Skill Development">Skill Development</option>
            <option value="Hobby or Personal Growth">Hobby or Personal Growth</option>
            <option value="Other">Other</option>
          </select>
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


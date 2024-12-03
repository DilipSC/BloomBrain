'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WorkInfo() {
  const [workInfo, setWorkInfo] = useState({
    workType: '',
    role: '',
    companySize: '',
    learningGoal: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Work Information submitted:', workInfo);
    router.push('/preferences/learning-goals');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Work Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="workType" className="block text-white mb-1">What kind of work do you do?</label>
          <input
            type="text"
            id="workType"
            name="workType"
            value={workInfo.workType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-white mb-1">What is your role?</label>
          <input
            type="text"
            id="role"
            name="role"
            value={workInfo.role}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="companySize" className="block text-white mb-1">Size of company</label>
          <select
            id="companySize"
            name="companySize"
            value={workInfo.companySize}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          <label htmlFor="learningGoal" className="block text-white mb-1">What do you want to learn?</label>
          <input
            type="text"
            id="learningGoal"
            name="learningGoal"
            value={workInfo.learningGoal}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
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


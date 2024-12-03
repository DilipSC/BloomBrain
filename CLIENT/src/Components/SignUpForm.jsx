import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: 'student', // default value
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    
    // Navigate based on user type
    if (formData.userType === 'student') {
      navigate('/student-dashboard'); // Use navigate() instead of history.push()
    } else {
      navigate('/tutor-dashboard'); // Use navigate() instead of history.push()
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-midnight p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-silver mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-silver rounded-lg bg-midnight-light text-silver placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-silver focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-silver mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-silver rounded-lg bg-midnight-light text-silver placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-silver focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-silver mb-2 text-sm font-medium">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-silver rounded-lg bg-midnight-light text-silver placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-silver focus:border-transparent"
          placeholder="Enter your password"
        />
      </div>

      {/* User Type Selection */}
      <div>
        <label htmlFor="userType" className="block text-silver mb-2 text-sm font-medium">I am a</label>
        <select
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-silver rounded-lg bg-midnight-light text-silver placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-silver focus:border-transparent"
        >
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-silver text-midnight font-bold rounded-lg hover:bg-silver-dark hover:text-white transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-silver focus:ring-opacity-50"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;

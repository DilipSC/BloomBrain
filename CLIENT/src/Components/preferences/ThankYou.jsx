import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-6">Thank You!</h1>
      <p className="text-white text-xl mb-8">Your preferences have been saved successfully.</p>
      <Link 
        to="/dashboard" 
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default ThankYou;


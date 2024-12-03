import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DevicePreferences = () => {
  const [preferences, setPreferences] = useState({
    primaryDevice: '',
    offlineAccess: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setPreferences(prev => ({ ...prev, [name]: checked }));
    } else {
      setPreferences(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Device Preferences submitted:', preferences);
    navigate('/preferences/thank-you');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Device Preferences</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Primary Device for Learning</label>
          {['Desktop', 'Tablet', 'Mobile'].map((device) => (
            <div key={device} className="flex items-center mb-2">
              <input
                type="radio"
                id={`device-${device}`}
                name="primaryDevice"
                value={device}
                checked={preferences.primaryDevice === device}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`device-${device}`} className="text-white">{device}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Offline Access</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="offlineAccess"
              name="offlineAccess"
              checked={preferences.offlineAccess}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="offlineAccess" className="text-white">Allow offline downloads for courses</label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Finish
        </button>
      </form>
    </div>
  );
};

export default DevicePreferences;


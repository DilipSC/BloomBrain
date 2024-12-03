'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Communication() {
  const [preferences, setPreferences] = useState({
    notifications: [],
    newsletter: false,
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'newsletter') {
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
    console.log('Communication Preferences submitted:', preferences);
    router.push('/preferences/payment');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Communication Preferences</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Notifications</label>
          {['Course Updates', 'Assignment Reminders', 'Promotional Offers'].map((notification) => (
            <div key={notification} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`notification-${notification}`}
                name="notifications"
                value={notification}
                checked={preferences.notifications.includes(notification)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`notification-${notification}`} className="text-white">{notification}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Newsletter Subscription</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={preferences.newsletter}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="newsletter" className="text-white">Yes, send me updates and tips</label>
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
}


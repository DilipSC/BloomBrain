'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Payment() {
  const [preferences, setPreferences] = useState({
    paymentMethod: '',
    subscriptionModel: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Preferences submitted:', preferences);
    router.push('/preferences/social-engagement');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Payment Preferences</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-white mb-2">Preferred Payment Method</label>
          {['Credit/Debit Card', 'PayPal', 'Digital Wallet'].map((method) => (
            <div key={method} className="flex items-center mb-2">
              <input
                type="radio"
                id={`payment-${method}`}
                name="paymentMethod"
                value={method}
                checked={preferences.paymentMethod === method}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`payment-${method}`} className="text-white">{method}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="block text-white mb-2">Subscription Model</label>
          {['Monthly Subscription', 'Annual Subscription', 'Pay-Per-Course'].map((model) => (
            <div key={model} className="flex items-center mb-2">
              <input
                type="radio"
                id={`subscription-${model}`}
                name="subscriptionModel"
                value={model}
                checked={preferences.subscriptionModel === model}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={`subscription-${model}`} className="text-white">{model}</label>
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


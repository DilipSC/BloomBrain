import React, { useState } from 'react';

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Oliva',
    lastName: 'Rhye',
    email: 'olivia@untitledui.com',
    role: 'Product Designer',
    country: 'United States',
    timezone: 'Pacific Standard Time (PST)',
    bio: "I'm a Product Designer based in Melbourne, Australia. I specialize in UX/UI design, brand strategy, and Webflow development."
  });

  const [activeTab, setActiveTab] = useState('my-details');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const navItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '📊', label: 'Dashboard' },
    { icon: '📁', label: 'Projects' },
    { icon: '✓', label: 'Tasks' },
    { icon: '📈', label: 'Reporting' },
    { icon: '👥', label: 'Users' },
    { icon: '💬', label: 'Support' },
    { icon: '⚙️', label: 'Settings' }
  ];

  const tabs = [
    'My details', 'Profile', 'Password', 'Team', 'Plan', 'Billing', 'Email', 'Notifications', 'Integrations', 'API'
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="font-semibold">Untitled UI</span>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full px-4 py-2 bg-gray-100 rounded-lg"
            />
          </div>
        </div>
        <nav className="space-y-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 ${
                item.label === 'Settings' ? 'bg-gray-100' : ''
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-4 border-t">
          <div className="flex items-center p-3">
            <img
              src="/placeholder.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-sm font-medium">Olivia Rhye</p>
              <p className="text-xs text-gray-500">olivia@untitledui.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold">Settings</h1>
          </header>

          {/* Tabs */}
          <div className="border-b mb-8">
            <div className="flex space-x-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`pb-4 px-1 ${
                    index === 0
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-1">Personal info</h2>
                <p className="text-gray-500 mb-6">
                  Update your photo and personal details here.
                </p>
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your photo
                </label>
                <div className="flex items-center space-x-4">
                  <img
                    src="/placeholder.svg"
                    alt="Profile"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <button
                      type="button"
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Click to upload
                    </button>
                    <p className="text-sm text-gray-500 mt-1">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </p>
                  </div>
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>

              {/* Timezone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Timezone
                </label>
                <select
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Pacific Standard Time (PST)">
                    Pacific Standard Time (PST)
                  </option>
                  <option value="Eastern Standard Time (EST)">
                    Eastern Standard Time (EST)
                  </option>
                  <option value="Central Standard Time (CST)">
                    Central Standard Time (CST)
                  </option>
                </select>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <div className="border border-gray-300 rounded-lg">
                  <div className="border-b px-3 py-2 flex space-x-4">
                    <button type="button" className="font-bold">B</button>
                    <button type="button" className="italic">I</button>
                    <button type="button" className="underline">U</button>
                  </div>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
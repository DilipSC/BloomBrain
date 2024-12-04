'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Book, User, LogOut, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const UserDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New course recommendation: 'Machine Learning Basics'" },
    { id: 2, message: "Don't forget to complete this week's assignment!" },
  ]);

  const [courses, setCourses] = useState([
    { id: 1, name: 'React for Beginners', progress: 60, lastAccessed: '2023-05-15' },
    { id: 2, name: 'Advanced JavaScript', progress: 30, lastAccessed: '2023-05-10' },
    { id: 3, name: 'Full-Stack Development', progress: 0, lastAccessed: null },
    { id: 4, name: 'Python for Data Science', progress: 80, lastAccessed: '2023-05-18' },
    { id: 5, name: 'UI/UX Design Fundamentals', progress: 45, lastAccessed: '2023-05-12' },
  ]);

  const navigate = useNavigate(); // Hook for navigation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    navigate('/signup'); // Redirect to sign-in page
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none lg:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="ml-4 text-xl font-bold text-white ">Course Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell size={24} className="text-white cursor-pointer" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    {notifications.length}
                  </span>
                )}
              </div>
              <img
                src="https://via.placeholder.com/40"
                alt="User Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sliding Menu */}
        <aside
          className={`bg-white shadow-lg fixed inset-y-0 left-0 z-20 w-64 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 overflow-y-auto`}
        >
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4 pl-5">Enrolled Courses</h2>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
            </div>
            <ul className="space-y-2">
              {filteredCourses.map((course) => (
                <li key={course.id} className="p-3 bg-gray-100 rounded-lg">
                  <h3 className="font-medium">{course.name}</h3>
                  <div className="mt-1 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Progress: {course.progress}%
                  </p>
                  {course.lastAccessed && (
                    <p className="text-xs text-gray-500">
                      Last accessed: {course.lastAccessed}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={handleLogout}
              className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center"
            >
              <LogOut size={18} className="mr-2" />
              Logout
            </button>
          </div>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 lg:ml-64">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Welcome, User!</h2>
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                <Book size={24} />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">Enrolled Courses</p>
                <p className="text-lg font-semibold text-gray-700">{courses.length}</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
              <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                <User size={24} />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-gray-600">Profile Completion</p>
                <p className="text-lg font-semibold text-gray-700">85%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xs p-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-2">
              {notifications.map((notif) => (
                <li
                  key={notif.id}
                  className="flex justify-between items-center p-2 bg-gray-100 rounded-lg"
                >
                  <span>{notif.message}</span>
                  <button
                    onClick={() => markNotificationAsRead(notif.id)}
                    className="text-sm text-blue-500 hover:text-blue-600"
                  >
                    Mark as read
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;

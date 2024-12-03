import React, { useState } from 'react';

const UserDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    'React for Beginners',
    'Advanced JavaScript',
    'Full-Stack Development',
    'Python for Data Science',
    'UI/UX Design Fundamentals',
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none lg:hidden"
              >
                ☰
              </button>
              <h1 className="ml-4 text-lg font-bold">Course Dashboard</h1>
            </div>
            <div>
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
          className={`bg-white shadow-lg transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 w-64 p-4 lg:block`}
        >
          <h2 className="text-lg font-semibold mb-4">Enrolled Courses</h2>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={index} className="p-2 bg-gray-100 rounded-lg">
                {course}
              </li>
            ))}
          </ul>
          <button
            onClick={handleLogout}
            className="mt-6 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </aside>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, User!</h2>
          <p>Here you can find an overview of your enrolled courses and progress.</p>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
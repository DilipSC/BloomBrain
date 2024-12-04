import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const preferenceSections = [
  { path: '/preferences/work-info', title: 'Work Information' },
  { path: '/preferences/learning-goals', title: 'Learning Goals' },
  { path: '/preferences/course-preferences', title: 'Course Preferences' },
  { path: '/preferences/language-accessibility', title: 'Language & Accessibility' },
  { path: '/preferences/learning-style', title: 'Learning Style' },
  { path: '/preferences/communication', title: 'Communication' },
  { path: '/preferences/payment', title: 'Payment' },
  { path: '/preferences/social-engagement', title: 'Social & Engagement' },
  { path: '/preferences/device-preferences', title: 'Device Preferences' },
];

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight-light via-midnight to-silver-dark flex flex-col">
      <header className="bg-midnight bg-opacity-80 p-4 shadow-md">
        <nav>
          <Link to="/" className="text-silver text-2xl font-bold hover:text-silver-dark transition duration-300">
            LearnHub
          </Link>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-midnight-light bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8">
          {/* Render navigation links if not on the root path */}
          {location.pathname.startsWith('/preferences') && (
            <nav className="mb-8">
              <ul className="flex flex-wrap justify-center gap-4">
                {preferenceSections.map((section) => (
                  <li key={section.path}>
                    <Link
                      to={section.path}
                      className="text-silver text-sm hover:text-silver-dark transition duration-300"
                    >
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {/* Outlet renders nested child routes */}
          <Outlet />
        </div>
      </main>
      <footer className="bg-midnight bg-opacity-80 p-4 text-center text-silver text-sm">
        © 2023 LearnHub. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

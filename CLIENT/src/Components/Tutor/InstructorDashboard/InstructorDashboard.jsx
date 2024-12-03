'use client'

import React, { useState } from 'react';
import { Bell, BookOpen, Plus, Star, TrendingUp, Users, DollarSign, BarChart2 } from 'lucide-react';

const InstructorDashboard = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your course 'React Fundamentals' has a new review!", isRead: false },
    { id: 2, message: "5 new students enrolled in 'Advanced JavaScript'.", isRead: false },
    { id: 3, message: "Your payout of $1,500 has been processed.", isRead: true },
  ]);

  const [publishedCourses, setPublishedCourses] = useState([
    { id: 1, title: "React Fundamentals", rating: 4.7, students: 1250, revenue: 25000 },
    { id: 2, title: "Advanced JavaScript", rating: 4.9, students: 980, revenue: 19600 },
    { id: 3, title: "Node.js for Beginners", rating: 4.5, students: 750, revenue: 15000 },
  ]);

  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [showStats, setShowStats] = useState(false);

  const totalStudents = publishedCourses.reduce((sum, course) => sum + course.students, 0);
  const totalRevenue = publishedCourses.reduce((sum, course) => sum + course.revenue, 0);
  const averageRating = (publishedCourses.reduce((sum, course) => sum + course.rating, 0) / publishedCourses.length).toFixed(1);

  const handleNotificationClick = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const handleNewCourseSubmit = (e) => {
    e.preventDefault();
    if (newCourse.title && newCourse.description) {
      setPublishedCourses([...publishedCourses, {
        id: publishedCourses.length + 1,
        title: newCourse.title,
        rating: 0,
        students: 0,
        revenue: 0
      }]);
      setNewCourse({ title: '', description: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, John Doe</h1>
        <p className="text-gray-600">Instructor Dashboard</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 mb-1">Total Students</p>
            <p className="text-2xl font-semibold">{totalStudents}</p>
          </div>
          <Users className="h-10 w-10 text-blue-500" />
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 mb-1">Total Revenue</p>
            <p className="text-2xl font-semibold">${totalRevenue.toLocaleString()}</p>
          </div>
          <DollarSign className="h-10 w-10 text-green-500" />
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500 mb-1">Average Rating</p>
            <p className="text-2xl font-semibold">{averageRating}</p>
          </div>
          <Star className="h-10 w-10 text-yellow-400" />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold flex items-center">
              <BookOpen className="mr-2 h-5 w-5" /> Published Courses
            </h2>
            <button
              onClick={() => setShowStats(!showStats)}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              {showStats ? 'Hide Stats' : 'Show Stats'}
            </button>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {publishedCourses.map((course) => (
                <li key={course.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-2 last:border-b-0 last:pb-0">
                  <span className="font-medium mb-2 sm:mb-0">{course.title}</span>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-1" />
                      {course.students}
                    </span>
                    {showStats && (
                      <span className="flex items-center">
                        <DollarSign className="w-4 h-4 text-green-500 mr-1" />
                        {course.revenue.toLocaleString()}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center">
              <Plus className="mr-2 h-5 w-5" /> Create New Course
            </h2>
          </div>
          <div className="p-4">
            <form onSubmit={handleNewCourseSubmit} className="space-y-4">
              <div>
                <label htmlFor="course-title" className="block mb-1 font-medium">Course Title</label>
                <input
                  id="course-title"
                  type="text"
                  placeholder="Enter course title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                  required
                />
              </div>
              <div>
                <label htmlFor="course-description" className="block mb-1 font-medium">Course Description</label>
                <textarea
                  id="course-description"
                  placeholder="Enter course description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Course
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden md:col-span-2">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center">
              <Bell className="mr-2 h-5 w-5" /> Notifications
            </h2>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              {notifications.map((notification) => (
                <li 
                  key={notification.id} 
                  className={`p-3 rounded-md cursor-pointer transition-colors duration-200 ${
                    notification.isRead ? 'bg-gray-50' : 'bg-blue-50 hover:bg-blue-100'
                  }`}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  {notification.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;


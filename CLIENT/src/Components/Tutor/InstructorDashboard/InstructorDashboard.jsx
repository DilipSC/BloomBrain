import React, { useState } from 'react';
import { Bell, BookOpen, Plus, Star } from 'lucide-react';

const InstructorDashboard = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your course 'React Fundamentals' has a new review!" },
    { id: 2, message: "5 new students enrolled in 'Advanced JavaScript'." },
  ]);

  const [publishedCourses, setPublishedCourses] = useState([
    { id: 1, title: "React Fundamentals", rating: 4.7, students: 1250 },
    { id: 2, title: "Advanced JavaScript", rating: 4.9, students: 980 },
    { id: 3, title: "Node.js for Beginners", rating: 4.5, students: 750 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome, John Doe</h1>
        <p className="text-gray-600">Instructor Dashboard</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center">
              <BookOpen className="mr-2 h-5 w-5" /> Published Courses
            </h2>
          </div>
          <div className="p-4">
            <ul className="space-y-4">
              {publishedCourses.map((course) => (
                <li key={course.id} className="flex items-center justify-between border-b border-gray-200 pb-2 last:border-b-0 last:pb-0">
                  <span className="font-medium">{course.title}</span>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {course.rating}
                    </span>
                    <span>{course.students} students</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold flex items-center">
              <Plus className="mr-2 h-5 w-5" /> Next
            </h2>
          </div>
          <div className="p-4">
            <form className="space-y-4">
              <div>
                <label htmlFor="course-title" className="block mb-1 font-medium">Course Title</label>
                <input
                  id="course-title"
                  type="text"
                  placeholder="Enter course title"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="course-description" className="block mb-1 font-medium">Course Description</label>
                <textarea
                  id="course-description"
                  placeholder="Enter course description"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
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
                <li key={notification.id} className="bg-gray-50 p-3 rounded-md">
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


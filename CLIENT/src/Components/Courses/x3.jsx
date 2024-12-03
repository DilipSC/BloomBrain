import React, { useState } from 'react';
import { Star, Clock, Award, Book, Video, Download, CheckCircle } from 'lucide-react';

const FullStackWebDevBootcamp = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Koursely</h1>
        </div>
      </header>

      {/* Course Hero Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-2/3 pr-8">
              <h1 className="text-4xl font-bold mb-4">Full-Stack Web Development Bootcamp</h1>
              <p className="text-xl mb-4">Become a proficient Full-Stack Developer by mastering both front-end and back-end development skills</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2">4.8 (2,100 ratings)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>40 total hours</span>
                </div>
              </div>
              <p className="mb-4">Created by Alex Johnson</p>
              <div className="flex items-center text-sm">
                <span className="mr-4"><Award className="w-4 h-4 inline mr-1" /> Bestseller</span>
                <span><Clock className="w-4 h-4 inline mr-1" /> Last updated 10/2024</span>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Course Thumbnail" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-3xl font-bold mb-4">$199.99</div>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
                    Enroll Now
                  </button>
                  <p className="text-center text-sm mt-4">30-Day Money-Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4">
              {/* What you'll learn */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Build responsive websites with HTML, CSS, and JavaScript",
                    "Master front-end frameworks like React and Angular",
                    "Develop back-end systems using Node.js, Express, and MongoDB",
                    "Create RESTful APIs and integrate with databases",
                    "Implement authentication, authorization, and security measures",
                    "Deploy web applications on cloud platforms like AWS",
                    "Integrate third-party APIs and services",
                    "Understand web performance optimization and best practices"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course content */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Course content</h2>
                <div className="space-y-4">
                  {[
                    { title: "Introduction to Full-Stack Web Development", lessons: 5, duration: "1 hr 15 min" },
                    { title: "HTML, CSS, and JavaScript Fundamentals", lessons: 10, duration: "2 hrs 30 min" },
                    { title: "Responsive Design and Front-End Frameworks", lessons: 8, duration: "2 hrs" },
                    { title: "Node.js and Express for Back-End Development", lessons: 7, duration: "1 hr 45 min" },
                    { title: "Database Integration with MongoDB", lessons: 6, duration: "1 hr 30 min" }
                  ].map((section, index) => (
                    <div key={index} className="border rounded-lg">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left"
                        onClick={() => toggleSection(index)}
                      >
                        <span className="font-semibold">{section.title}</span>
                        <div className="text-sm text-gray-500">
                          {section.lessons} lessons • {section.duration}
                        </div>
                      </button>
                      {expandedSection === index && (
                        <div className="p-4 bg-gray-50 border-t">
                          <ul className="space-y-2">
                            {[...Array(section.lessons)].map((_, i) => (
                              <li key={i} className="flex items-center">
                                <Video className="w-4 h-4 mr-2 text-gray-500" />
                                <span>Lesson {i + 1}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Basic understanding of programming concepts</li>
                  <li>Access to a computer with internet connection</li>
                  <li>Willingness to learn and build projects</li>
                </ul>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <div className="space-y-4">
                  <p>
                    Welcome to the Full-Stack Web Development Bootcamp! This course is designed to take you from beginner to advanced in full-stack web development. Whether you’re looking to start a career as a web developer or want to upgrade your skills, this bootcamp will give you the practical experience you need to build dynamic, responsive websites and applications.
                  </p>
                  <p>
                    In this bootcamp, you'll learn how to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Build front-end interfaces using HTML, CSS, and JavaScript</li>
                    <li>Work with React and Angular for dynamic, single-page applications</li>
                    <li>Set up and manage back-end development with Node.js and Express</li>
                    <li>Create secure APIs and work with databases like MongoDB</li>
                    <li>Understand deployment, DevOps, and cloud computing on platforms like AWS</li>
                  </ul>
                  <p>
                    By the end of the bootcamp, you will have the skills to become a confident full-stack developer ready to tackle real-world projects. Start building your web development career today!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4">
              {/* Instructor */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                <div className="flex items-center mb-4">
                  <img src="/placeholder.svg" alt="Alex Johnson" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Alex Johnson</h3>
                    <p className="text-gray-600">Full-Stack Web Developer & Instructor</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Alex has over 12 years of experience in full-stack web development. He has worked with startups and large companies to build scalable, high-performance web applications. Alex is passionate about teaching and helping aspiring developers achieve their goals.
                </p>
              </div>

              {/* Frequently Asked Questions */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { question: "Do I need any prior experience?", answer: "Yes, basic programming knowledge is recommended but not required." },
                    { question: "Will I get a certificate?", answer: "Yes, you will receive a certificate upon completing the course." },
                    { question: "How long will I have access to the course?", answer: "You will have lifetime access to the course materials." }
                  ].map((faq, index) => (
                    <div key={index} className="border-b py-4">
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullStackWebDevBootcamp;

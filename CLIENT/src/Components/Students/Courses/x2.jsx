import React, { useState } from 'react';
import { Star, Clock, Award, Book, Video, Download, CheckCircle } from 'lucide-react';

const AdvancedUIDesignPrinciples = () => {
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
              <h1 className="text-4xl font-bold mb-4">Advanced UI/UX Design Principles</h1>
              <p className="text-xl mb-4">Elevate your design skills and create user-centered, impactful digital experiences</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2">4.9 (1,230 ratings)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>25 total hours</span>
                </div>
              </div>
              <p className="mb-4">Created by Emily Carter</p>
              <div className="flex items-center text-sm">
                <span className="mr-4"><Award className="w-4 h-4 inline mr-1" /> Bestseller</span>
                <span><Clock className="w-4 h-4 inline mr-1" /> Last updated 5/2024</span>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Course Thumbnail" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-3xl font-bold mb-4">$129.99</div>
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
                    "Understand the key principles of UI/UX design",
                    "Create user-centered design solutions",
                    "Design for accessibility and inclusivity",
                    "Learn wireframing and prototyping techniques",
                    "Develop interactive user interfaces",
                    "Conduct user research and testing",
                    "Design with mobile-first principles",
                    "Master tools like Sketch, Figma, and Adobe XD"
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
                    { title: "Introduction to UI/UX Design", lessons: 6, duration: "1 hr 10 min" },
                    { title: "Wireframing & Prototyping", lessons: 8, duration: "1 hr 45 min" },
                    { title: "Design Systems & UI Kits", lessons: 7, duration: "1 hr 30 min" },
                    { title: "Conducting User Research", lessons: 5, duration: "1 hr 20 min" },
                    { title: "UI/UX Design for Mobile", lessons: 6, duration: "1 hr 50 min" }
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
                  <li>Basic understanding of design principles</li>
                  <li>Familiarity with design tools like Figma, Adobe XD, or Sketch</li>
                  <li>Desire to create user-focused digital experiences</li>
                </ul>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <div className="space-y-4">
                  <p>
                    Welcome to Advanced UI/UX Design Principles, a course designed to take your design skills to the next level. Whether you're a seasoned designer or someone looking to deepen their expertise, this course will teach you advanced techniques for creating user-centered, accessible, and highly engaging designs.
                  </p>
                  <p>
                    In this course, you'll learn:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>How to design seamless user interfaces</li>
                    <li>Best practices for mobile-first design</li>
                    <li>Conducting user research to inform design decisions</li>
                    <li>Creating interactive prototypes for user testing</li>
                    <li>Building scalable design systems</li>
                    <li>Applying accessibility standards to your designs</li>
                    <li>Understanding the role of visual hierarchy in user experience</li>
                  </ul>
                  <p>
                    By the end of this course, you'll be equipped with the tools and knowledge to create exceptional UI/UX designs that deliver an outstanding user experience. Join today and start building designs that are as functional as they are beautiful!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4">
              {/* Instructor */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                <div className="flex items-center mb-4">
                  <img src="/placeholder.svg" alt="Emily Carter" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Emily Carter</h3>
                    <p className="text-gray-600">UI/UX Designer & Design Consultant</p>
                  </div>
                </div>
                <p className="text-gray-700">Emily has over 10 years of experience in UI/UX design and has worked with top tech companies to create user-centric design solutions. She is passionate about teaching others how to craft beautiful and functional digital experiences.</p>
              </div>

              {/* Frequently Asked Questions */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { question: "Do I need prior experience in UI/UX design?", answer: "Yes, this course assumes you have some familiarity with basic design principles." },
                    { question: "Can I access the course on mobile?", answer: "Yes, the course is fully responsive and can be accessed on any device." },
                    { question: "Is there a certification for completing this course?", answer: "Yes, you'll receive a certification upon completing the course." }
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

export default AdvancedUIDesignPrinciples;

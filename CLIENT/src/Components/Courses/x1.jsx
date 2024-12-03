import React, { useState } from 'react';
import { Star, Clock, Award, Book, Video, Download, CheckCircle } from 'lucide-react';

const CopywritingMasterclass = () => {
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
              <h1 className="text-4xl font-bold mb-4">The Complete Copywriting Masterclass</h1>
              <p className="text-xl mb-4">Master the art of persuasive writing and boost your marketing skills</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-2">4.8 (2,945 ratings)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-1" />
                  <span>20 total hours</span>
                </div>
              </div>
              <p className="mb-4">Created by Albert Flores</p>
              <div className="flex items-center text-sm">
                <span className="mr-4"><Award className="w-4 h-4 inline mr-1" /> Bestseller</span>
                <span><Clock className="w-4 h-4 inline mr-1" /> Last updated 3/2024</span>
              </div>
            </div>
            <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/placeholder.svg" alt="Course Thumbnail" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-3xl font-bold mb-4">$99.99</div>
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
                    "Master the fundamentals of effective copywriting",
                    "Create compelling headlines that grab attention",
                    "Write persuasive sales copy that converts",
                    "Develop a unique brand voice and tone",
                    "Optimize copy for different marketing channels",
                    "Use psychological triggers to influence readers",
                    "Craft engaging email marketing campaigns",
                    "Improve your overall writing skills"
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
                    { title: "Introduction to Copywriting", lessons: 5, duration: "45 min" },
                    { title: "The Psychology of Persuasion", lessons: 8, duration: "1 hr 30 min" },
                    { title: "Crafting Compelling Headlines", lessons: 6, duration: "1 hr 15 min" },
                    { title: "Writing Effective Sales Copy", lessons: 10, duration: "2 hr 45 min" },
                    { title: "Email Marketing Mastery", lessons: 7, duration: "1 hr 50 min" }
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
                  <li>Basic writing skills and grammar knowledge</li>
                  <li>No prior copywriting experience required</li>
                  <li>Willingness to practice and apply learned techniques</li>
                </ul>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <div className="space-y-4">
                  <p>
                    Welcome to The Complete Copywriting Masterclass, your comprehensive guide to mastering the art of persuasive writing. Whether you're a marketing professional, entrepreneur, or aspiring copywriter, this course will equip you with the skills and techniques needed to create compelling copy that engages, persuades, and converts.
                  </p>
                  <p>
                    Throughout this course, you'll learn:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>The fundamental principles of effective copywriting</li>
                    <li>How to research and understand your target audience</li>
                    <li>Techniques for crafting attention-grabbing headlines</li>
                    <li>The art of storytelling in copywriting</li>
                    <li>How to write persuasive sales copy for various mediums</li>
                    <li>Email marketing strategies that drive results</li>
                    <li>SEO copywriting techniques for better online visibility</li>
                    <li>How to develop and maintain a consistent brand voice</li>
                  </ul>
                  <p>
                    By the end of this course, you'll have a robust toolkit of copywriting strategies and a portfolio of work to showcase your new skills. Join thousands of successful students and start your journey to becoming a master copywriter today!
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4">
              {/* Instructor */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                <div className="flex items-center mb-4">
                  <img src="/placeholder.svg" alt="Albert Flores" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">Albert Flores</h3>
                    <p className="text-sm text-gray-500">Professional Copywriter & Marketing Consultant</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center"><Star className="w-4 h-4 text-yellow-400 mr-1" /> 4.8 Instructor Rating</p>
                  <p className="flex items-center"><Award className="w-4 h-4 mr-1" /> 50,000+ Students</p>
                  <p className="flex items-center"><Video className="w-4 h-4 mr-1" /> 10 Courses</p>
                </div>
              </div>

              {/* Featured review */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Featured Review</h2>
                <div className="flex items-center mb-2">
                  <img src="/placeholder.svg" alt="Reviewer" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <div className="flex">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-sm">
                  "This course is a game-changer! Albert's teaching style is engaging and the content is incredibly valuable. I've already seen a significant improvement in my copywriting skills and it's made a real difference in my marketing campaigns. Highly recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CopywritingMasterclass;


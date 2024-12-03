import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star, Book, Users, Globe } from 'lucide-react';


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <motion.img
              src="/placeholder.svg"
              alt="Koursely Logo"
              width={32}
              height={32}
              className="rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <span className="text-xl font-bold">Koursely</span>
          </a>
          <nav className="hidden md:flex gap-4">
            {["Home", "About", "Courses", "Teacher", "Blog", "Contact"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm font-medium hover:text-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {isMenuOpen && (
          <motion.nav
            className="md:hidden flex flex-col gap-2 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {["Home", "About", "Courses", "Teacher", "Blog", "Contact"].map((item) => (
              <a key={item} href="#" className="text-sm font-medium hover:text-primary">
                {item}
              </a>
            ))}
          </motion.nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-16">
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                className="flex flex-col justify-center space-y-6 md:space-y-8"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-gray-800 transition-all duration-500 transform hover:scale-105 hover:text-blue-600">
                  Explore Live Creative Classes
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl font-medium tracking-wide opacity-90 transition-opacity duration-300 hover:opacity-100">
                  Choose from over 2,000+ courses on topics like user interface
                  design, graphic design, front-end development, and much
                  more...
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <motion.button
                    className="px-5 py-3 bg-blue-600 text-white rounded-md shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    className="px-5 py-3 bg-white text-blue-600 border border-blue-600 rounded-md shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 focus:outline-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="https://media.istockphoto.com/id/1370433251/photo/black-woman-sitting-at-desk-using-computer-writing-in-notebook.jpg?s=612x612&w=0&k=20&c=rHpy3cX4LVFtzLI4gyy0T-fNYdTeAcdNQgTmy9maAIA="
                  alt="Student learning"
                  className="rounded-lg object-cover w-full h-auto shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-background py-16">
          <div className="container">
            <motion.h2
              className="mb-12 text-center text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose Us
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Learn from anywhere",
                  description:
                    "Flexible online learning platform empowers you to learn new skills and accomplish real growth.",
                  icon: Globe,
                },
                {
                  title: "Courses taught by real experts",
                  description:
                    "Our teachers are experts excited to share their wisdom, experience, & trusted tools with you.",
                  icon: Users,
                },
                {
                  title: "Learn in-demand skills",
                  description:
                    "Explore demanded skills, deepen existing passions, and get lost in creativity.",
                  icon: Book,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <motion.h2
              className="mb-12 text-center text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What our students say about us
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: "John Doe",
                  role: "UX Designer at Google",
                  testimonial:
                    "Koursely has been an incredible resource for my professional development. The courses are well-structured, and the instructors are top-notch. I've gained valuable skills that have directly impacted my work at Google.",
                },
                {
                  name: "Jane Smith",
                  role: "Frontend Developer at Amazon",
                  testimonial:
                    "I can't recommend Koursely enough! The platform offers a perfect blend of theoretical knowledge and practical exercises. It's helped me stay up-to-date with the latest web technologies and advance my career at Amazon.",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4">
                      <img
                        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV80M19waG90b19vZl95b3VuZ19pbmRpYW5fbWFuX3dpdGhfc3R1ZGVudF9iYWNrcF83Y2I0ZDBlOS1kNDk3LTQ1M2YtYjBlOS05ZWRkNDkyMTQ2NTAucG5n.png"
                        alt="Student"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="mb-2 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 text-gray-500">"{testimonial.testimonial}"</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "100,000+", label: "Students worldwide" },
                { number: "200,000+", label: "Total course views" },
                { number: "5,000+", label: "Five-star course reviews" },
                { number: "5,000+", label: "Students community" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold">{stat.number}</h3>
                  <p className="text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="bg-background py-16">
          <div className="container">
            <motion.h2
              className="mb-4 text-center text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Course Categories
            </motion.h2>
            <motion.p
              className="mb-12 text-center text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Explore our wide range of courses and find the perfect fit for your learning journey
            </motion.p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Design", courses: 18, icon: "🎨" },
                { name: "Development", courses: 16, icon: "💻" },
                { name: "Marketing", courses: 14, icon: "📈" },
                { name: "Personal Development", courses: 15, icon: "🌱" },
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md text-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="mb-4 text-4xl">{category.icon}</div>
                    <h3 className="mb-2 font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-500">
                      {category.courses} Courses
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
<section className="bg-background py-16">
  <div className="container">
    <motion.h2
      className="mb-4 text-center text-3xl font-bold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Featured Courses
    </motion.h2>
    <motion.p
      className="mb-12 text-center text-gray-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      Discover our most popular and highly-rated courses
    </motion.p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "The Complete Copywriting Masterclass",
          price: "$99.00",
          description: "Master the art of persuasive writing and boost your marketing skills.",
          instructor: "Albert Flores",
          link: "./Courses/x1.jsx",
        },
        {
          title: "Advanced UI/UX Design Principles",
          price: "$129.00",
          description: "Learn cutting-edge design techniques to create stunning user interfaces.",
          instructor: "Emma Watson",
          link: "./Courses/x2.jsx",
        },
        {
          title: "Full-Stack Web Development Bootcamp",
          price: "$199.00",
          description: "Become a proficient full-stack developer with this comprehensive course.",
          instructor: "Michael Johnson",
          link: "./Courses/x.jsx",
        },
      ].map((course, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <a href={course.link} className="block">
            <img
              src="/placeholder.svg"
              alt="Course thumbnail"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="mb-4 text-sm font-semibold text-blue-600">
                {course.price}
              </div>
              <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
              <p className="mb-4 text-sm text-gray-500">
                {course.description}
              </p>
              <div className="flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Instructor"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-500">
                  by {course.instructor}
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Koursely. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;


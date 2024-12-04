import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

export default function LandingPage() {
  const navigate = useNavigate(); // Initialize the navigate function for redirection

  const redirectToSignup = () => {
    navigate('/signup'); // Redirects to the signup form page
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <a href="/" className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Koursely Logo" width={32} height={32} />
            <span className="text-xl font-bold">Koursely</span>
          </a>
          <nav className="ml-auto flex gap-4">
            <a href="#" className="text-sm font-medium">Home</a>
            {/* Removed About, Courses, Teacher, Blog, and Contact */}
            <button
              onClick={redirectToSignup}
              className="text-sm font-medium text-blue-500"
            >
              Login/Signup
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-16">
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Explore Live Creative Classes
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Choose from over 2,000+ courses on topics like user interface design, graphic design, front-end development, and much more...
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Get Started</button>
                  <button className="border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-lg">Learn More</button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Student learning"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-background py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Learn from anywhere",
                  description: "Flexible online learning platform empowers you to learn new skills and accomplish real growth."
                },
                {
                  title: "Courses taught by real experts",
                  description: "Our teachers are experts excited to share their wisdom, experience, & trusted tools with you."
                },
                {
                  title: "Learn in-demand skills",
                  description: "Explore demanded skills, deepen existing passions, and get lost in creativity."
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <div className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">What our students say about us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[1, 2].map((_, i) => (
                <div key={i} className="border rounded-lg p-6 text-center">
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      alt="Student"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div className="mb-2 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.3l6.3 3.3-1.7-7.2 5.7-5.6-7.3-.6L12 0 9.4 7.3l-7.3.6 5.7 5.6-1.7 7.2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-gray-500">
                    "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s."
                  </p>
                  <div>
                    <h4 className="font-semibold">Jhon Doe</h4>
                    <p className="text-sm text-gray-500">UX Designer at Google</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="bg-background py-16">
          <div className="container">
            <h2 className="mb-4 text-center text-3xl font-bold">Courses categories</h2>
            <p className="mb-12 text-center text-gray-500">
              Provide most popular courses that your want to join and lets start the course for the most simply way in here
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Design", courses: 18 },
                { name: "Development", courses: 16 },
                { name: "Marketing", courses: 14 },
                { name: "Personal Development", courses: 15 }
              ].map((category, index) => (
                <div key={index} className="text-center border p-6 rounded-lg">
                  <div className="mb-4">
                    <img
                      src="/placeholder.svg"
                      alt={category.name}
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                  <h3 className="mb-2 font-semibold">{category.name}</h3>
                  <p className="text-sm text-gray-500">Course: {category.courses}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="bg-background py-16">
          <div className="container">
            <h2 className="mb-4 text-center text-3xl font-bold">Featured Courses</h2>
            <p className="mb-12 text-center text-gray-500">
              Provide most popular courses that your want to join and lets start the course for the most simply way in here
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="border rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Course thumbnail"
                    width={400}
                    height={200}
                    className="aspect-video object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="mb-4 text-sm font-semibold text-primary">$99.00</div>
                    <h3 className="mb-2 text-xl font-bold">The Complete Copywriting</h3>
                    <p className="mb-4 text-sm text-gray-500">
                      Provide most popular courses that your want to join and lets start the course for the most
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg"
                        alt="Instructor"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm">Lorem Ipsum</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>


      

      {/* Footer */}
      <footer className="bg-background py-12">
        <div className="container text-center text-sm text-gray-500">
          <p>&copy; 2024 Koursely. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

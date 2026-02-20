import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Loona Hospital ",
    heading:
      "Production-Grade React Healthcare System with Payment Integration",
    description:
      "Architected and shipped a production healthcare platform with modular React components and Redux Toolkit for centralized state management. Integrated Razorpay payment gateway for secure appointment bookings and coordinated 15+ REST API endpoints with proper async handling, loading states, and error boundaries. Fully responsive using Tailwind CSS.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop",
    liveUrl: "https://loonahospital.com/",
    githubUrl: "https://github.com/nikhiilsingh/hospital_frontend",
    category: "Full Stack",
  },

  {
    title: "Note Master",
    heading: "JWT-Based Secure Note Management System",
    description:
      "A full-stack note management application built using the MERN stack. Features JWT-based authentication, protected API routes, and persistent MongoDB storage for secure CRUD operations. Implemented middleware-based route protection, frontend protected routes, and robust error handling for secure and scalable data workflows.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
  {
    title: "Budget Tracker Application",
    heading: "Interactive Financial Tracking Dashboard with Data Visualization",
    description:
      "A React-based financial tracking application that enables real-time expense categorization, dynamic balance calculation, and interactive data visualization using Chart.js. Built reusable UI components for transaction entry and filtering while maintaining responsive design across devices.",
    tech: ["React.js", "Chart.js", "JavaScript", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Frontend",
  },
  {
    title: "Authentication System ",
    heading: "Secure JWT Authentication with Protected Routes",
    description:
      "Implemented a secure authentication system with JWT tokens and bcrypt password hashing. Designed RESTful APIs for register, login, and logout workflows while enforcing protected route structures on both frontend and backend. Focused on modular architecture and clean code practices.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Full Stack",
  },
];

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);

  // Slice projects to show only visibleCount
  const displayedProjects = projects.slice(0, visibleCount);

  // Load 3 more projects on each click
  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const truncateText = (text, wordLimit = 30) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <section id="projects" className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I’ve built, combining clean design,
            optimized performance, and thoughtful attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group bg-[#1E293B] rounded-2xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1E293B] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-colors">
                    Read More
                  </button>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {truncateText(project.description, 15)}

                  {project.description.split(" ").length > 30 && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation(); // prevent card click conflict
                        setSelectedProject(project);
                      }}
                      className="text-indigo-400 ml-2 cursor-pointer hover:underline"
                    >
                      Read more
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Box */}
            <div
              className="bg-[#0F172A] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl animate-fadeIn relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>

              {/* Top Image */}
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.heading}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Link
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 border border-slate-500 hover:border-indigo-400 text-slate-300 hover:text-indigo-400 rounded-lg transition"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="inline-flex items-center px-6 py-3 border border-slate-500 text-slate-300 rounded-xl hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300"
            >
              Load More
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

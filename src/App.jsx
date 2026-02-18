import { useEffect, useRef, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";

const RESUME_URL = "/Nikhil_Singh_Full_Stack_Resume.pdf";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skillCategories = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python"],
    icon: "⌨️",
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST API Integration",
      "Responsive Design",
    ],
    icon: "⚛️",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    icon: "🔧",
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Razorpay", "Cloudinary", "Vercel"],
    icon: "🛠️",
  },
  {
    title: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "Modular Architecture"],
    icon: "📐",
  },
];

const experiences = [
  {
    role: "Freelance Frontend Developer",
    period: "Sep 2024 – Present",
    points: [
      "Built and shipped production-grade React applications",
      "Created modular component architecture",
      "Integrated Razorpay payment system",
      "Coordinated 15+ REST APIs",
      "Built responsive UI with Tailwind",
      "Used Git branching workflows",
    ],
  },
  {
    role: "MERN Stack Trainee – CETPA Infotech",
    period: "Aug 2024 – Mar 2025",
    points: [
      "Built full MERN stack apps",
      "Implemented JWT authentication",
      "Refactored components for modularity",
    ],
  },
];

const projects = [
  {
    name: "Note Master",
    tag: "Full Stack",
    tech: "React, Node, Express, MongoDB, JWT",
    description:
      "Secure full-stack note management app with protected routes and CRUD operations.",
    github: "https://github.com",
  },
  {
    name: "Budget Tracker App",
    tag: "Frontend",
    tech: "React, Chart.js",
    description:
      "Real-time expense tracking with data visualization and reusable components.",
    github: "https://github.com",
  },
];

function useScrollAnimation() {
  const refs = useRef(new Set());
  const [visible, setVisible] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(entry.target));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (el) => {
    if (el) {
      refs.current.add(el);
    }
  };
  const isVisible = (el) => visible.has(el);
  return { setRef, isVisible };
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState(null);
  const [contactLoading, setContactLoading] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setContactStatus({ type: "error", text: "Please fill all fields." });
      return;
    }
    setContactStatus(null);
    setContactLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setContactStatus({
          type: "success",
          text: "Message sent. I'll get back soon!",
        });
        form.reset();
      } else {
        setContactStatus({
          type: "error",
          text: data.error || "Something went wrong.",
        });
      }
    } catch {
      setContactStatus({ type: "error", text: "Network error. Try again." });
    } finally {
      setContactLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Nav */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold text-white">
            Nikhil Singh
          </a>
          <button
            type="button"
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <ul
            className={`absolute md:static top-full left-0 right-0 bg-dark-800 md:bg-transparent border-b md:border-0 border-white/5 md:flex gap-6 py-4 md:py-0 px-6 ${menuOpen ? "flex flex-col" : "hidden"}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}

        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-8">
            <img
              src="/PortBG.png"
              alt="Developer workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0F172A]/90 via-[#0F172A]/80 to-[#0F172A]" />
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/15 rounded-full blur-3x1 animate-pulse delay-1000" />

          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative z-10 animate-on-scroll">
            {/* <p className="text-accent-blue font-medium mb-2">Hi, I'm</p> */}
            <p className="text-accent-blue font-semibold text-lg mb-4 tracking-widest uppercase">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
              Nikhil Singh
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-4">
              Frontend-Focused Full Stack Developer
            </p>
            <p className="text-gray-400 max-w-xl mb-8">
              I build scalable, production-ready web applications using React,
              Node.js, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-linear-to-r from-accent-blue to-accent-purple text-white font-medium hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href={RESUME_URL}
                download
                className="px-6 py-3 rounded-xl glass-card border border-white/10 text-white font-medium hover:border-accent-blue/50 transition"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-white/20 text-gray-300 font-medium hover:border-accent-purple/50 hover:text-white transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 animate-on-scroll">
            About Me
          </h2>
          <div className="glass-card p-8 animate-on-scroll">
            <p className="text-gray-300 leading-relaxed">
              I'm a frontend-focused full stack developer with production
              experience building web applications from idea to deployment. I
              specialize in{" "}
              <strong className="text-white">React & Redux</strong>, with a
              strong emphasis on modular architecture, clean APIs, and
              maintainable code. I've integrated REST APIs, payment gateways
              (Razorpay), and auth flows in real projects. My goal is to join a
              high-growth tech company as a Software Development Engineer and
              ship impact at scale.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 animate-on-scroll">
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="glass-card p-6 animate-on-scroll"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-gray-400 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 animate-on-scroll">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={exp.role} className="glass-card p-8 animate-on-scroll">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-accent-blue text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-400">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-accent-purple shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 animate-on-scroll">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div
                key={proj.name}
                className="glass-card p-6 flex flex-col animate-on-scroll"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {proj.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent-purple/20 text-accent-violet">
                    {proj.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{proj.tech}</p>
                <p className="text-gray-400 text-sm flex-1 mb-4">
                  {proj.description}
                </p>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue text-sm font-medium hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 animate-on-scroll">
            Education
          </h2>
          <div className="glass-card p-8 animate-on-scroll">
            <h3 className="text-xl font-semibold text-white">
              B.Tech in Computer Science
            </h3>
            <p className="text-gray-400 mt-1">
              Chitkara University (2020 – 2024)
            </p>
            <p className="text-accent-blue font-medium mt-2">CGPA: 8.77 / 10</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 animate-on-scroll">
            Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="animate-on-scroll">
              <p className="text-gray-400 mb-4">Delhi, India</p>
              <a
                href="mailto:nikhilrajput4265@gmail.com"
                className="block text-accent-blue hover:underline mb-2"
              >
                nikhilrajput4265@gmail.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-blue transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-blue transition"
                >
                  GitHub
                </a>
              </div>
            </div>
            <form
              onSubmit={handleContactSubmit}
              className="glass-card p-6 animate-on-scroll space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent-blue outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent-blue outline-none transition"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-accent-blue outline-none transition resize-none"
              />
              {contactStatus && (
                <p
                  className={
                    contactStatus.type === "success"
                      ? "text-green-400 text-sm"
                      : "text-red-400 text-sm"
                  }
                >
                  {contactStatus.text}
                </p>
              )}
              <button
                type="submit"
                disabled={contactLoading}
                className="w-full py-3 rounded-xl bg-linear-to-r from-accent-blue to-accent-purple text-white font-medium hover:opacity-90 disabled:opacity-50 transition"
              >
                {contactLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        © 2026 Nikhil Singh
      </footer>
    </div>
  );
}

export default App;

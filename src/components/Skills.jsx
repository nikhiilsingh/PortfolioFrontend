import React from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    items: ["JavaScript (ES6+)", "TypeScript", "Java"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "RESTful API Integration",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API Design",
      "JWT Authentication",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    items: ["Git", "GitHub", "Postman", "Razorpay", "Cloudinary", "Vercel"],
  },
  {
    title: "Core CS",
    icon: "📚",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "Modular Architecture",
      "Version Control",
    ],
  },
  {
    title: "Also Familiar With",
    icon: "✨",
    items: [
      "Bootstrap",
      "jQuery",
      "Firebase",
      "Figma",
      "VS Code",
      "Postman",
      "npm",
      "Vercel",
      "Netlify",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto ">
      <div className="text-center mb-16">
        <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">
          What I Know
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.title}
            className="group p-6 rounded-2xl
                       bg-white/5 backdrop-blur-lg
                       border border-white/10
                       transition-all duration-300 ease-in-out
                       hover:scale-105
                       hover:-translate-y-2
                       hover:shadow-2xl
                       hover:shadow-cyan-500/20"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 text-sm rounded-full
                             border border-gray-600
                             text-gray-300
                             transition-all duration-300 ease-in-out
                             cursor-pointer
                             hover:scale-110
                             hover:border-cyan-400
                             hover:text-white
                             hover:shadow-lg
                             hover:shadow-cyan-500/40
                             hover:bg-cyan-500/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

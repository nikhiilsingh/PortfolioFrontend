import { Code2, GraduationCap, Briefcase, Rocket } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "CETPA Trained",
    description:
      "Completed professional training in web development technologies at CETPA Infotech",
  },
  {
    icon: Code2,
    title: "Full Stack Skills",
    description:
      "Proficient in HTML, CSS, JavaScript, React, Node.js, and modern frameworks",
  },
  {
    icon: Briefcase,
    title: "Freelance Experience",
    description:
      "Successfully delivered multiple freelance projects for diverse clients",
  },
  {
    icon: Rocket,
    title: "Quick Learner",
    description:
      "Passionate about learning new technologies and adapting to industry trends",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6  bg-[#1E293B]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Get To Know Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group w-full max-w-md mx-auto lg:max-w-lg">
            <div className="absolute -inset-1 bg-linera-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />

            <div className="relative overflow-hidden rounded-2xl aspect-5/5">
              <img
                src="/images/nikhil.jpeg"
                alt="Nikhil Singh"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              A Passionate Developer Ready to Make an Impact
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I am a full stack developer with hands-on experience in building
              production-ready web applications. After completing professional
              MERN stack training at CETPA Infotech, I strengthened my
              foundations in full stack development, programming concepts, and
              modern web technologies.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              After that, I worked on freelance and independent projects where I
              built production-ready web applications, integrated APIs,
              implemented authentication systems, and optimized performance.
              During this period, I focused on mastering React, backend
              architecture, and real-world problem solving while continuously
              improving my development practices.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-[#1E293B] rounded-xl border border-slate-700">
                <p className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  6+
                </p>
                <p className="text-slate-400 text-sm mt-1">Months Training</p>
              </div>
              <div className="text-center p-4 bg-[#1E293B] rounded-xl border border-slate-700">
                <p className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  4+
                </p>
                <p className="text-slate-400 text-sm mt-1">Projects Done</p>
              </div>
              <div className="text-center p-4 bg-[#1E293B] rounded-xl border border-slate-700">
                <p className="text-3xl font-bold bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  3+
                </p>
                <p className="text-slate-400 text-sm mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-[#1E293B] rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

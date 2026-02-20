import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Chitkara University",
    location: "Baddi, H.P, India",
    period: "2020 - 2024",
    grade: "CGPA: 8.77 / 10",
    description:
      "Completed undergraduate studies with a focus on computer science fundamentals, data structures, algorithms, and software engineering principles.",
    highlights: [
      "Specialized in Web Technologies and Software Development",
      "Completed capstone project on a full-stack web application",
      "Participated in multiple hackathons and coding competitions",
    ],
  },
  {
    degree: "Intermediate (12th)",
    field: "Science (PCM)",
    institution: "Shri Dashmesh Academy",
    location: "Anandpur Sahib, Punjab, India",
    period: "2018 - 2019",
    grade: "Percentage: 66.50%",
    description:
      "Completed senior secondary education with Physics, Chemistry, and Mathematics, building a strong analytical foundation.",
    highlights: [
      //   "Scored distinction in Mathematics and Computer Science",
      "Participated in Science Olympiad and Quiz competitions",
    ],
  },
  {
    degree: "High School (10th)",
    field: "General Studies",
    institution: "Shri Dashmesh Academy",
    location: "Anandpur Sahib, Punjab, India",
    period: "2016 - 2017",
    grade: "Percentage: 81.7%",
    description:
      "Completed secondary education with strong performance in Science and Mathematics.",
    highlights: [
      //   "Developed early interest in computers and programming",
      "Active in extracurricular activities and sports",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#1E293B]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500 via-violet-500 to-cyan-500" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 bg-linear-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>

                {/* Content Card */}
                <div className="lg:w-[calc(50%-3rem)] w-auto ml-20 lg:ml-0">
                  <div className="group bg-[#1E293B] rounded-2xl border border-slate-700 p-6 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                    {/* Period & Grade Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/15 text-indigo-400 text-xs font-semibold rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span className="px-3 py-1 bg-cyan-500/15 text-cyan-400 text-xs font-semibold rounded-full">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-violet-400 font-semibold text-sm mb-1">
                      {edu.field}
                    </p>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <BookOpen className="w-4 h-4 text-slate-500" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 shrink-0" />
                          <span className="text-slate-300 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="lg:w-[calc(50%-3rem)] hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

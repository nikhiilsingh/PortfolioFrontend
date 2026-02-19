import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

const CETPA_IMAGE =
  "https://mgx-backend-cdn.metadl.com/generate/images/406772/2026-02-15/847a993d-8330-45a2-bae3-6faa5a39f62a.png";
// const FREELANCE_IMAGE =
//   "https://mgx-backend-cdn.metadl.com/generate/images/406772/2026-02-15/815c58fc-e64f-4e7b-902f-a0341d6f0e09.png";

const timeline = [
  {
    period: "2025 - Present",
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    description:
      "Transitioned into freelancing, working with diverse clients to deliver custom web solutions, from landing pages to full web applications.",
    achievements: [
      "Delivered 10+ projects for clients across industries",
      "Built responsive websites and web applications",
      "Managed client communication and project timelines",
      "Maintained 5-star ratings on freelance platforms",
    ],
    icon: Briefcase,
    image: "/images/freelance.jpeg",
    type: "work",
  },
  {
    period: "2024 - 2025",
    title: "Professional Training Program",
    organization: "CETPA Infotech",
    description:
      "Completed an intensive training program covering full-stack web development, focusing on modern technologies and industry best practices.",
    achievements: [
      "Learned HTML5, CSS3, JavaScript, and React.js",
      "Built multiple projects during training",
      "Gained knowledge of Node.js and database management",
      "Received certification upon completion",
    ],
    icon: GraduationCap,
    image: "/images/Cetpa.jpg",
    type: "training",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#1E293B]/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Training
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500 via-violet-500 to-cyan-500 hidden lg:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-linear-to-r from-indigo-500 to-violet-500 rounded-full z-10 shadow-lg shadow-indigo-500/30 hidden lg:flex lg:items-center lg:justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content Card */}
                <div className="lg:w-[calc(50%-3rem)] w-full">
                  <div className="group bg-[#1E293B] rounded-2xl border border-slate-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 " />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold text-sm">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.type === "training"
                              ? "bg-indigo-500/20 text-indigo-400"
                              : "bg-violet-500/20 text-violet-400"
                          }`}
                        >
                          {item.type === "training" ? "Training" : "Work"}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mt-2">
                        {item.title}
                      </h3>

                      <p className="text-indigo-400 font-semibold text-sm mb-3">
                        {item.organization}
                      </p>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <Award className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                            <span className="text-slate-300 text-sm">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="lg:w-[calc(50%-3rem)] hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

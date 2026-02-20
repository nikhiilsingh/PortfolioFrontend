import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  //   Twitter,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "";

export default function Contact() {
  const [contactStatus, setContactStatus] = useState(null);
  const [contactLoading, setContactLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    // const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setContactStatus({ type: "error", text: "Please fill all fields." });
      setTimeout(() => setContactStatus(null), 4000);
      return;
    }

    setContactLoading(true);
    setContactStatus(null);

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
        setTimeout(() => setContactStatus(null), 4000);
      } else {
        setContactStatus({
          type: "error",
          text: data.error || "Something went wrong.",
        });
        setTimeout(() => setContactStatus(null), 4000);
      }
    } catch {
      setContactStatus({
        type: "error",
        text: "Network error. Try again.",
      });
      setTimeout(() => setContactStatus(null), 4000);
    } finally {
      setContactLoading(false);
    }
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/nikhiilsingh" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/nikhilsingh13/" },
    // { icon: Twitter, url: "https://twitter.com/yourusername" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#0B132B]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">
            LET'S CONNECT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            "Open to new challenges and opportunities feel free to get in touch!"
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-10">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "nikhilrajput4265@gmail.com",
                },
                { icon: Phone, title: "Phone", value: "+91 7006173821" },
                { icon: MapPin, title: "Location", value: "Delhi, India" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[#1C2541] border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            {/* <div className="p-6 bg-[#1C2541] rounded-xl border border-slate-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">
                  Available for Freelance
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                I'm currently open to work and full-time
                opportunities. Let's work together!
              </p>
            </div> */}
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-white font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full h-12 px-4 rounded-xl bg-[#1C2541] border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-white font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="xxxx@example.com"
                    className="w-full h-12 px-4 rounded-xl bg-[#1C2541] border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-white font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Message..."
                    className="w-full px-4 py-4 rounded-xl bg-[#1C2541] border border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {contactStatus && (
                <p
                  className={`text-sm ${
                    contactStatus.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {contactStatus.text}
                </p>
              )}

              <button
                type="submit"
                disabled={contactLoading}
                className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  {contactLoading ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

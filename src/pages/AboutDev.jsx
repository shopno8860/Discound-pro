import React from "react";
import {
  Github,
  Linkedin,
  Globe,
  Code,
  Cpu,
  Layers,
  Rocket,
} from "lucide-react";

const AboutDev = () => {
  return (
    <div className="pb-16 max-w-4xl mx-auto px-4">
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-5xl font-black mb-4">About the Developer</h1>
        <p className="text-xl opacity-70">
          Passionate Full Stack Developer creating digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info Card */}
        <div
          className="bg-base-100 rounded-3xl p-8 shadow-xl border border-base-200"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code className="text-primary" /> Who Am I?
          </h2>
          <p className="opacity-80 leading-relaxed mb-6">
            Hi! I'm a specialized React developer who loves building performant
            and beautiful web applications. I focus on user experience and
            clean, maintainable code.
          </p>
          <div className="flex gap-4">
            <a href="#" className="btn btn-circle btn-outline btn-primary">
              <Github size={20} />
            </a>
            <a href="#" className="btn btn-circle btn-outline btn-primary">
              <Linkedin size={20} />
            </a>
            <a href="#" className="btn btn-circle btn-outline btn-primary">
              <Globe size={20} />
            </a>
          </div>
        </div>

        {/* Skills Card */}
        <div
          className="bg-base-100 rounded-3xl p-8 shadow-xl border border-base-200"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="text-secondary" /> My Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "Firebase",
              "Tailwind CSS",
              "MongoDB",
              "Express",
              "DaisyUI",
              "Framer Motion",
            ].map((skill) => (
              <div
                key={skill}
                className="badge badge-lg badge-secondary badge-outline px-4 py-3 font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg border border-base-200 hover:border-primary transition-all"
            >
              <div className="h-40 bg-base-300 relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${i + 10}/400/300`}
                  alt="Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Cool Project {i}</h3>
                <p className="text-xs opacity-60">
                  A brief description of this amazing project and its impact.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDev;

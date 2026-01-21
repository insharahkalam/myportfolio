import project1 from '../src/assets/profile.jpg'
import passGen from '../src/assets/pass.Webp'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    desc: "Weather app built using JavaScript API with clean UI.",
    img: project1,
    tech: "JavaScript",
    repoLink: "https://github.com/insharahkalam/weather-app-fetch",
    live: "https://insharahkalam.github.io/weather-app-fetch/",
  },
  {
    title: "Password Generator",
    desc: "A fast and customizable tool for generating high-entropy passwords. Supports symbols, numbers, uppercase, and lowercase characters to ensure maximum security against brute-force attacks.",
    img: passGen,
    tech: "JavaScript",
    repoLink: "https://github.com/insharah-dev/password-generator",
    live: "https://insharah-dev.github.io/password-generator/",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React & Tailwind CSS.",
    img: "https://via.placeholder.com/400x250",
    tech: "React",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black border-gray-900 shadow-2xl shadow-white border-t">
      {/* Heading */}
      <h2 className="text-5xl uppercase font-extrabold text-center">
        <span className="text-white">My</span>{" "}
        <span className="text-red-700">Projects</span>
      </h2>

      <div className="my-10 flex flex-wrap font-bold tracking-wide gap-3 justify-center">
        {["All", "JavaScript", "Supabase", "React"].map((item) => (
          <button
            key={item}
            className="px-6 py-3 border border-red-700 rounded-full text-sm text-white hover:bg-red-700  transition duration-500"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
        group bg-[#0b0b0b]
        border border-red-700
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-red-700
        hover:-translate-y-2
        transition-all duration-500
      "
          >
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[230px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Gradient Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />   */}


              <span className="absolute top-4 left-4 text-xs bg-red-700 text-white px-4 py-1.5 rounded-full font-bold tracking-wide">
                {project.tech}
              </span>
            </div>


            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="flex gap-4 items-center mt-6">
                <a target='blank'
                  href={project.live}
                  className="flex items-center gap-2 text-sm font-semibold text-white transition"
                >
                  <FaExternalLinkAlt size={15} /> Live Demo
                </a>

                <a target='blank'
                  href={project.repoLink}
                  className="flex items-center gap-2 text-sm font-semibold text-white transition"
                >
                  <FaGithub size={18} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;

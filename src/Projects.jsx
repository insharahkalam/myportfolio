// const Projects = () => {
//   return (
//     <section className="py-12 px-8 bg-black w-full border-gray-900 shadow-2xl shadow-white border-t">
//       <h2 className="text-5xl uppercase font-extrabold text-red-700  text-center">
//         My  Projects
//       </h2>

//       <div className=" my-7 flex gap-3 justify-center items-center">
//         <button className="px-7 py-4 border border-red-700 bg-transparent hover:bg-red-800 text-white text-sm font-bold tracking-wide transition duration-500 rounded-full">All Projects</button>
//         <button className="px-7 py-4 border border-red-700 bg-transparent hover:bg-red-800 text-white text-sm font-bold tracking-wide transition duration-500 rounded-full">Javascript Projects</button>
//         <button className="px-7 py-4 border border-red-700 bg-transparent hover:bg-red-800 text-white text-sm font-bold tracking-wide transition duration-500 rounded-full">Supabase Projects</button>
//         <button className="px-7 py-4 border border-red-700 bg-transparent hover:bg-red-800 text-white text-sm font-bold tracking-wide transition duration-500 rounded-full">React Projects</button>
//       </div>


//       <div className="grid md:grid-cols-3 gap-6">
//         {[1, 2, 3].map((item) => (
//           <div
//             key={item}
//             className="bg-gray-900 p-5 rounded hover:scale-105 transition"
//           >
//             <h3 className="text-xl font-semibold mb-2">
//               Project {item}
//             </h3>
//             <p className="text-gray-400 text-sm mb-4">
//               Short project description goes here.
//             </p>
//             <div className="flex gap-3">
//               <button className="text-red-500">Live</button>
//               <button className="text-red-500">GitHub</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;



import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    desc: "Weather app built using JavaScript API with clean UI.",
    img: "https://via.placeholder.com/400x250",
    tech: "JavaScript",
  },
  {
    title: "Auth App",
    desc: "Authentication system using Supabase with React.",
    img: "https://via.placeholder.com/400x250",
    tech: "Supabase",
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
    <section className="py-24 px-6 bg-black border-t border-gray-900">
      {/* Heading */}
      <h2 className="text-5xl uppercase font-extrabold text-red-600 text-center">
        My Projects
      </h2>

      {/* Filter Buttons */}
      <div className="my-10 flex flex-wrap font-bold tracking-wide gap-4 justify-center">
        {["All", "JavaScript", "Supabase", "React"].map((item) => (
          <button
            key={item}
            className="px-6 py-3 border border-red-600/60 rounded-full text-sm text-white hover:bg-red-700  transition duration-500"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              bg-gradient-to-b from-gray-900 to-black
              border border-red-500/20
              rounded-2xl
              overflow-hidden
              shadow-xl
              hover:-translate-y-3
              hover:shadow-red-500/20
              transition
              duration-300
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <span className="text-xs uppercase tracking-wider text-red-500">
                {project.tech}
              </span>

              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-white hover:text-red-500 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-white hover:text-red-500 transition"
                >
                  <FaGithub /> GitHub
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

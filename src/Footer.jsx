import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-gray-900 shadow-2xl shadow-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* NAME + TAGLINE */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white tracking-wide">
              Insharah <span className="text-red-700">Kalam</span>
            </h3>
            <p className="text-gray-500 font-semibold text-sm mt-2 max-w-sm">
              Frontend Developer crafting modern, responsive & user-focused
              web experiences.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 text-xl">
            <a
              href="https://github.com/insharahkalam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border border-gray-800 hover:border-red-700 p-2 rounded-full transition duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/insharah-kalam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border border-gray-800 hover:border-red-700 p-2 rounded-full transition duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:insharahkalam19@gmail.com"
              className="text-white border border-gray-800 hover:border-red-700 p-2 rounded-full transition duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white font-medium">
          <p>
            © {new Date().getFullYear()} Insharah Kalam. All rights reserved.
          </p>
          <p className="font-medium">
            Built with <span className="text-red-600">React</span> &{" "}
            <span className="text-red-600">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

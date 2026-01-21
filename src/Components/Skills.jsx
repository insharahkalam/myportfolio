import Marquee from "react-fast-marquee";

// Frontend
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiMui, SiAntdesign } from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-12 bg-black  border-gray-900 shadow-2xl shadow-white border-t">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold">
          <span className="text-white">My</span>{" "}
          <span className="text-red-700">Tech Stack</span>
        </h2>

        <p className="mt-4 text-sm tracking-wide">
          <span className="text-white">Technologies & Tools I use</span>
        </p>
      </div>

      <Marquee
        speed={55}
        pauseOnHover
        gradient
        gradientColor={[17, 24, 39]}
      >
        <SkillIcon icon={<FaHtml5 />} />
        <SkillIcon icon={<FaCss3Alt />} />
        <SkillIcon icon={<FaBootstrap />} />
        <SkillIcon icon={<SiTailwindcss />} />
        <SkillIcon icon={<SiJavascript />} />
        <SkillIcon icon={<SiTypescript />} />
        <SkillIcon icon={<FaReact />} />
        <SkillIcon icon={<SiNextdotjs />} />
        <SkillIcon icon={<SiMui />} />
        <SkillIcon icon={<FaGithub />} />
        <SkillIcon icon={<SiAntdesign />} />
      </Marquee>
    </section>
  );
};

const SkillIcon = ({ icon }) => {
  return (
    <div className="mx-6 flex items-center justify-center w-20 h-20 border border-red-700 rounded-full text-3xl text-white hover:bg-red-800  duration-500 transition">
      {icon}
    </div>
  );
};

export default Skills;

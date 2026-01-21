import 'animate.css';
import profile from "../assets/profile.jpg";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const borderRef = useRef(null);
  useEffect(() => {
    gsap.to(borderRef.current, {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: "linear",
    });
  }, [])

  return (
    <section id='home' className="min-h-screen bg-black flex items-center px-4 sm:px-6 md:px-12 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">

          <h1 className=" animate__animated animate__fadeInLeft pt-10  text-3xl mb-10 sm:text-4xl md:text-6xl font-extrabold leading-snug text-white">
            Hi, I’m{" "}
            <span className="text-red-700">Insharah</span>
          </h1>

          <p className="animate__animated animate__fadeInRight  text-white tracking-widest text-lg sm:text-xl md:text-2xl font-bold uppercase">
            Frontend Developer
          </p>
          <div className="w-[170px] sm:w-64 h-[0.5px] ms-[24px] bg-red-700 margin"></div>

          <p className="text-gray-400 max-w-lg text-sm sm:text-base md:text-md">
            I design and build modern, responsive and user-friendly web
            interfaces using React and Tailwind CSS.
          </p>



          <div className="flex gap-4 pt-4">
            <button onClick={() => {
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }} className="border border-red-700 hover:border-gray-800 font-bold tracking-wide text-white px-6 py-3 rounded-full transition">
              Contact Me
            </button>
            <button onClick={() => {
              document.getElementById("projects").scrollIntoView({
                behavior: "smooth",
              });
            }} className="border border-red-700 hover:border-gray-800 font-bold tracking-wide text-white px-6 py-3 rounded-full transition">
              My Projects
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative mt-10 md:mt-0">
          {/* Glow */}
          <div className="absolute w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-[450px] bg-red-500/20 blur-3xl rounded-full -z-10"></div>

          {/* Main Image */}
          <img
            src={profile}
            alt="Insharah"
            className="
              relative
              w-[300px] md:w-96
              h-[300px] md:h-[450px]
              object-cover
              rounded-3xl
              border border-red-500/40
              shadow-2xl
              transform scale-x-[-1]
            "
          />

          {/* Rotating Border */}
          <div
            ref={borderRef}
            className="
              absolute -bottom-3.5 md:-bottom-3 right-15 md:right-12
              w-[300px] sm:w-[310px] md:w-[400px]
              h-[300px] sm:h-[310px] md:h-full
              border sm:border md:border
              border-red-700
              rounded-tr-[60px] rounded-bl-[60px]
              transform scale-x-[-1]
            "
          ></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

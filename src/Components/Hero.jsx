import profile from "../assets/prof.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <span className="text-red-500 tracking-widest text-2xl font-bold ">
            FRONTEND DEVELOPER
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hi, I’m{" "}
            <span className="text-red-500">Insharah</span>
          </h1>

          <p className="text-gray-400 max-w-lg text-base">
            I design and build modern, responsive and user-friendly web
            interfaces using React and Tailwind CSS.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-3 rounded-full font-medium transition">
           Hire Me
            </button>

            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-black px-6 py-3 rounded-full transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">
          {/* Glow */}
          <div className="absolute w-80 h-80 bg-red-500/20 blur-3xl rounded-full"></div>

          <img
            src={profile}
            alt="Insharah"
            className="
              relative
              w-72 h-72 md:w-96 md:h-96
              object-cover
              rounded-full
              border border-red-500/40
              shadow-2xl
              transform scale-x-[1]
              
            "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

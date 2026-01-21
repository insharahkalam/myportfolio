// import profile from "../assets/profile.jpg";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";

// const Hero = () => {
//   const borderRef = useRef(null);

//   useEffect(() => {

//     gsap.to(borderRef.current, {
//       rotation: 360,
//       duration: 15,
//       repeat: -1,
//       ease: "linear",
//     });
//   }, []);

//   return (
//     <section className="min-h-screen bg-black flex items-center px-6 py-24">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div className="space-y-6">
//           <span className="text-red-700 tracking-widest text-2xl font-bold ">
//             FRONTEND DEVELOPER
//           </span>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
//             Hi, I’m{" "}
//             <span className="text-red-700">Insharah</span>
//           </h1>

//           <p className="text-gray-400 max-w-lg text-base">
//             I design and build modern, responsive and user-friendly web
//             interfaces using React and Tailwind CSS.
//           </p>

//           <div className="flex gap-4 pt-4">


//             <button className="border border-red-700 hover:border-gray-800 font-bold tracking-wide text-white px-6 py-3 rounded-full transition">
//               Contact Me
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex justify-center relative">
//           {/* Glow */}
//           <div className="absolute w-80 h-80 bg-red-500/20 blur-3xl rounded-full"></div>

//           <img
//             src={profile}
//             alt="Insharah"
//             className="
//               relative
//               w-64 h-64  md:w-96 md:h-[450px]
//               object-cover
//              rounded-3xl
//               border border-red-500/40
//               shadow-2xl
//               transform scale-x-[-1]

//             "
//           />
//           <div ref={borderRef} className="absolute -bottom-3 right-12 md:w-[390px] w-[300px] h-[200px] md:h-full border border-red-700  rounded-tr-[60px]
//               rounded-bl-[60px]  transform scale-x-[-1]"></div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




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
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center px-4 sm:px-6 md:px-12 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <span className="text-red-700 tracking-widest text-lg sm:text-xl md:text-2xl font-bold uppercase">
            Frontend Developer
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug text-white">
            Hi, I’m{" "}
            <span className="text-red-700">Insharah</span>
          </h1>

          <p className="text-gray-400 max-w-lg text-sm sm:text-base md:text-lg">
            I design and build modern, responsive and user-friendly web
            interfaces using React and Tailwind CSS.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="border border-red-700 hover:border-gray-800 font-bold tracking-wide text-white px-6 py-3 rounded-full transition">
              Contact Me
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
              w-56 sm:w-64 md:w-96
              h-56 sm:h-64 md:h-[450px]
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
              absolute -bottom-3.5 md:-bottom-6 right-10 md:right-12
              w-[250px] sm:w-[320px] md:w-[390px]
              h-[250px] sm:h-[200px] md:h-full
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

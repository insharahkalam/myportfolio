import profile from "../assets/pro.jfif";

const About = () => {
    return (
        <section className="py-24 bg-black px-6  border-gray-900 shadow-2xl shadow-white border-t">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="flex justify-center relative">
                    <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>

                    <img
                        src={profile}
                        alt="About Insharah"
                        className="
              relative
              w-80 h-80 md:w-100 md:h-100
              object-cover
              rounded-full
              border border-red-500/40
              shadow-xl
            "
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="space-y-6">
                    <div className="flex flex-col items-start gap-0">
                        {/* <div className="w-[70px] ms-1.5 h-[.5px] mb-2 bg-red-500"></div> */}
                        <span className="text-red-500 tracking-widest font-bold text-sm">
                            ABOUT ME
                        </span>
                        <div className="w-[70px] ms-1.5 h-[1px] mt-2 bg-red-500"></div>
                    </div>




                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Frontend Developer with a Passion for Clean UI
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                        I’m a passionate Frontend Developer with a strong foundation in
                        HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
                        I enjoy building clean, responsive, and user-friendly web
                        interfaces using Tailwind CSS and Bootstrap.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        I also have experience working with Supabase for authentication and
                        backend features. I love turning ideas into real-world projects and
                        continuously improving my skills by learning new technologies and
                        building practical applications.
                    </p>

                    <div className="pt-4">
                        <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-black px-8 py-3 rounded-full transition duration-300">
                            View CV
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;

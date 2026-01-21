import profile from "../assets/pro.jfif";
import cv from '../../public/frontend-cv.pdf'

import { useRef, useEffect } from "react";
import gsap from "gsap";

const About = () => {
    const borderRef = useRef(null);

    useEffect(() => {

        gsap.to(borderRef.current, {
            rotation: 360,
            duration: 15,
            repeat: -1, //
            ease: "linear",
        });
    }, []);

    return (
        <section id="about" className="border-gray-900 shadow-2xl shadow-white border-t">
            <div className="py-20 px-6 bg-black overflow-hidden ">

                {/* SECTION TITLE */}
                <div className="relative z-10 flex flex-col items-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center">
                        <span className="text-white">About</span>{" "}
                        <span className="text-red-700"> Me</span>
                    </h2>
                    <div className="w-32 h-[0.5px] bg-red-700 mt-5"></div>
                </div>

                <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-700/30 to-transparent blur-3xl rounded-full"></div>

                        <div className="relative">
                            <img
                                src={profile}
                                alt="Insharah Kalam"
                                className="
                                    w-80 h-80 md:w-[420px] md:h-[520px]
                                    object-cover rounded-3xl
                                    border border-red-700/40
                                    shadow-2xl
                                "
                            />
                            {/* Rotating border div */}
                            <div
                                ref={borderRef}
                                className="absolute -bottom-6 -right-6 w-full h-full border border-red-700 rounded-3xl"
                            ></div>
                        </div>
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-bold tracking-widest uppercase">
                                <span className="text-white">Who</span>{" "}
                                <span className="text-red-700">I Am</span>
                            </p>
                            <div className="w-20 h-[0.5px]  bg-red-700 mt-2"></div>
                        </div>

                        <h2 className="text-5xl font-extrabold text-white leading-tight">
                            I Build <span className="text-red-700">Modern</span><br />
                            Web Interfaces
                        </h2>

                        <p className="text-gray-500 text-md leading-relaxed max-w-xl">
                            I'm <span className="text-red-700 font-semibold italic">Insharah Kalam</span>,
                            a frontend developer focused on building fast, responsive,
                            and visually polished web applications using
                            <span className="text-white font-medium italic"> React, Next.js </span>
                            and modern UI systems.
                        </p>

                        <p className="text-gray-500 text-md leading-relaxed max-w-xl">
                            My skill set includes
                            <span className="text-white font-medium italic"> HTML, CSS, JavaScript, Tailwind CSS,
                                Bootstrap </span>
                            and backend integrations with
                            <span className="text-white font-medium italic"> Supabase</span>.
                            I enjoy turning complex ideas into clean, user-friendly experiences.
                        </p>

                        {/* STATS */}
                        <div className="flex gap-10 pt-6">
                            <div>
                                <h3 className="text-3xl font-extrabold text-white">15+</h3>
                                <p className="text-md text-gray-400 font-semibold">Projects Built</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-white">1+</h3>
                                <p className="text-md text-gray-400 font-semibold">Year Learning</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-white">100%</h3>
                                <p className="text-md text-gray-400 font-semibold">Passion</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <a
                                href={cv}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-block
                                    px-10 py-4 rounded-full border border-gray-800
                                    hover:border-red-700 font-bold uppercase tracking-wide
                                    text-white transition duration-300
                                "
                            >
                                View CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

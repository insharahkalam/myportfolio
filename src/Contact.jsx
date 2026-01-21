import '../src/App.css'

import { FaEnvelope, FaUser, FaPaperPlane, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="py-24 px-6 bg-black border-gray-900 shadow-2xl shadow-white border-t">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          GET IN <span className="text-red-700">TOUCH</span>
        </h1>
        <div className="w-[150px] h-[0.5px] bg-red-700 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <span className="text-white font-extrabold tracking-widest text-sm">
            CONTACT ME
          </span>
          <div className="w-[70px] h-[1px] bg-red-700 margin ms-4 rounded-full"></div>
          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Let’s Work <span className="text-red-700">Together</span>
          </h2>

          <p className="text-white text-lg  max-w-md">
            Have a project in mind or want to collaborate?
            Feel free to reach out — I’m always open to discussing new ideas
            and opportunities.
          </p>

          {/* HOW TO REACH ME */}
          <div className="space-y-6">

            <h3 className="text-xl font-bold text-white tracking-wide">
              HOW TO <span className="text-red-700">REACH ME</span>
            </h3>

            <div className="space-y-4">

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 hover:border-red-700 transition">
                <FaEnvelope className="text-white text-xl" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Email
                  </p>
                  <a
                    href="mailto:insharahkalam19@gmail.com"
                    className="text-white hover:text-red-700 transition"
                  >
                    insharahkalam19@gmail.com
                  </a>

                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 hover:border-red-700 transition">
                <FaPhoneAlt className="text-white text-xl" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Contact
                  </p>
                  <p className="text-white hover:text-red-700 transition">
                    +92 3413906305
                  </p>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 hover:border-red-700 transition">
                <BsGithub className="text-white text-xl" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/insharahkalam"
                    target="_blank"
                    className="text-white hover:text-red-700 transition"
                  >
                    github.com/insharahkalam
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-800 hover:border-red-700 transition">
                <FaLinkedin className="text-white text-xl" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    LinkedIn
                  </p>
                  <a
                    href="https://www.linkedin.com/in/insharah-kalam/"
                    target="_blank"
                    className="text-white hover:text-red-700 transition"
                  >
                    linkedin.com/in/insharah-kalam
                  </a>

                </div>
              </div>

            </div>
          </div>



        </div>

        {/* RIGHT FORM */}
        <form className="relative bg-gradient-to-br from-gray-900/90 to-black
border border-gray-800 hover:border-red-700 rounded-3xl p-10 space-y-8 ">

          {/* FORM HEADER */}
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-white tracking-wide">
              Send Me a <span className="text-red-700">Message</span>
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Let’s build something amazing together 🚀
            </p>
          </div>

          {/* NAME */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Your Name
            </label>
            <div className="flex items-center gap-4 border hover:border-red-700 border-gray-800 rounded-2xl px-5 py-4">

              <input
                type="text"
                placeholder="John"
                className="bg-transparent w-full outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Email Address
            </label>
            <div className="flex items-center gap-4 border hover:border-red-700 border-gray-800 rounded-2xl px-5 py-4">

              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent w-full outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full bg-transparent border hover:border-red-700 border-gray-800 rounded-2xl px-5 py-4
      text-white placeholder-gray-500 outline-none
     resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl font-bold tracking-widest
border border-gray-800 hover:border-red-700 text-white
    flex items-center justify-center gap-3
    transition duration-300 hover:scale-[1.02]"
          >
            <FaPaperPlane />
            SEND MESSAGE
          </button>
        </form>


      </div>
    </section>
  );
};

export default Contact;

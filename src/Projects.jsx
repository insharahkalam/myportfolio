import weatherApp from './assets/weather.jpg'
import colorPick from './assets/color.jpg'
import todoApp from './assets/todo.png'
import foodApp from './assets/food.png'
import postApp from './assets/post.png'
import covidServey from './assets/covid.png'
import green from './assets/greenBee.png' 
import passGen from './assets/password.jpg'
import cardGen from './assets/card.Webp'
import hijabi from './assets/hijab.avif'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from 'react'

const projects = [
  {
    title: "Hijab Application",
    desc: "Hijab App integrated with Supabase for auth, database, and storage. Features user login, profile management, and full CRUD functionality.",
    img: hijabi,
    tech: "Supabase",
    category: "Supabase",
    repoLink: "https://github.com/insharahkalam/hijab-application",
    live: "https://insharahkalam.github.io/hijab-application/",
  },
  {
    title: "GreenBee",
    desc: "React-based Green Bee website with modern, responsive UI and smooth user interactions across devices.",
    img: green,
    tech: "React",
    category: "React",
    repoLink: "https://github.com/insharahkalam/green-bee",
    live: "https://greeb-bee.vercel.app/",
  },
  {
    title: "Todo App",
    desc: "Keep track of your daily tasks effortlessly. Mark completed, edit, or remove items in a few clicks.",
    img: todoApp,
    tech: "JavaScript",
    category: "JavaScript",
    repoLink: "https://github.com/insharahkalam/todo-app",
    live: "https://insharahkalam.github.io/todo-app/",
  },
  {
    title: "Password Generator",
    desc: "A fast, customizable tool for generating high-entropy passwords. Supports symbols, numbers, and letters for stronger security.",
    img: passGen,
    tech: "JavaScript",
    category: "JavaScript",
    repoLink: "https://github.com/insharah-dev/password-generator",
    live: "https://insharah-dev.github.io/password-generator/",
  },
  {
    title: "Covid Survey",
    desc: "A COVID survey application built with JavaScript and Supabase. Includes a user-facing survey form and an admin panel to manage and analyze responses.",
    img: covidServey,
    tech: "Supabase",
    category: "Supabase",
    repoLink: "https://github.com/insharahkalam/supabaseCrudTest",
    live: "https://insharahkalam.github.io/supabaseCrudTest/",
  },
  {
    title: "Color Picker",
    desc: "Pick and preview custom colors instantly. Fully interactive and easy to use for design tasks.",
    img: colorPick,
    tech: "JavaScript",
    category: "JavaScript",
    repoLink: "https://github.com/insharahkalam/Custom-Color-picker",
    live: "https://insharahkalam.github.io/Custom-Color-picker/",
  },
  {
    title: "Post Application",
    desc: "A full-featured Post Application built with JS and Supabase. Users can create, edit, and delete posts with secure authentication and responsive design.",
    img: postApp,
    tech: "Supabase",
    category: "Supabase",
    repoLink: "https://github.com/insharahkalam/mini-frontend-hackathon",
    live: "https://insharahkalam.github.io/mini-frontend-hackathon/",
  },
  {
    title: "Weather App",
    desc: "A lightweight weather app that lets you instantly check temperature, humidity, wind speed, and conditions for any city in the world.",
    img: weatherApp,
    tech: "JavaScript",
    category: "JavaScript",
    repoLink: "https://github.com/insharahkalam/weather-app-fetch",
    live: "https://insharahkalam.github.io/weather-app-fetch/",
  },
  {
    title: "Food App",
    desc: "A responsive React Food App with full menu, cart, and order functionality. Smooth UX across all devices.",
    img: foodApp,
    tech: "React",
    category: "React",
    repoLink: "https://github.com/insharahkalam/react-Food-app",
    live: "https://react-food-app-hazel.vercel.app/",
  },
  {
    title: "ID-card Generator",
    desc: "Create personalized ID cards in seconds with name, image, and details. Easy to use and perfect for students, employees, and events.",
    img: cardGen,
    tech: "JavaScript",
    category: "JavaScript",
    repoLink: "https://github.com/insharahkalam/idCard-generator",
    live: "https://insharahkalam.github.io/idCard-generator/",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All")

  const filteredProjects = projects.filter(
    project => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 px-6 bg-black border-gray-900 shadow-2xl shadow-white border-t">
      {/* Heading */}
      <h2 className="text-5xl uppercase font-extrabold text-center">
        <span className="text-white">My</span>{" "}
        <span className="text-red-700">Projects</span>
      </h2>

      {/* Filter Buttons */}
      <div className="my-10 flex flex-wrap font-bold tracking-wide gap-3 justify-center">
        {["All", "JavaScript", "Supabase", "React"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-6 py-3 border rounded-full text-sm text-white hover:bg-red-700 transition duration-500 ${filter === item ? "bg-red-700" : "border-red-700"}`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#0b0b0b] border border-red-700 rounded-3xl overflow-hidden
               hover:-translate-y-2 transition-all duration-500">

            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[230px] object-cover group-hover:scale-105 transition duration-700"
              />

              <span className="absolute top-4 left-4 text-xs bg-red-700 text-white px-4 py-1.5 rounded-full font-bold tracking-wide">
                {project.tech}
              </span>
            </div>

            <div className="p-6 flex flex-col h-[200px]">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="flex gap-4 items-center mt-6">
                <a target='_blank'
                  href={project.live}
                  className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-red-500"
                >
                  <FaExternalLinkAlt size={15} /> Live Demo
                </a>

                <a target='_blank'
                  href={project.repoLink}
                  className="flex items-center gap-2 text-sm font-semibold text-white transition hover:text-red-500"
                >
                  <FaGithub size={18} /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;

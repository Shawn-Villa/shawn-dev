'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const techColorMap: Record<string, string> = {
  "React": "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  "HTML": "bg-orange-500/10 text-orange-300 border-orange-500/30",
  "CSS": "bg-blue-500/10 text-blue-300 border-blue-500/30",
  "JavaScript": "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  "Bootstrap": "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  "Tailwind CSS": "bg-teal-500/10 text-teal-300 border-teal-500/30",
  "C#": "bg-violet-500/10 text-violet-300 border-violet-500/30",
  "Java": "bg-red-500/10 text-red-300 border-red-500/30",
  "PHP": "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
  "ASP.NET": "bg-purple-500/10 text-purple-300 border-purple-500/30",
  "ASP.NET MVC": "bg-purple-600/10 text-purple-300 border-purple-600/30",
  "ASP.NET Core API": "bg-purple-700/10 text-purple-300 border-purple-700/30",
  "Java Swing": "bg-rose-500/10 text-rose-300 border-rose-500/30",
  "MS SQL": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  "MySQL": "bg-sky-500/10 text-sky-300 border-sky-500/30",
  "MySQL / MariaDB": "bg-sky-600/10 text-sky-300 border-sky-600/30",
  "Entity Framework": "bg-lime-500/10 text-lime-300 border-lime-500/30",
  "WordPress": "bg-blue-600/10 text-blue-300 border-blue-600/30",
  "Python": "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "AI / ML": "bg-pink-500/10 text-pink-300 border-pink-500/30",
};

type Project = {
  id: number;
  title: string;
  description: string;
  img: string | StaticImageData;
  stack: string[];
  category: "Personal" | "School" | "Work" | "Thesis";
};

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const projects: Project[] = [
    { id: 1, title: "VTA HOAMS", description: "Homeowners Association Management System...", img: "/Sinematics.png", stack: ["C#", "JavaScript", "Tailwind CSS", "ASP.NET Core API", "Entity Framework", "MS SQL"], category: "Personal" },
    { id: 2, title: "Sinematics", description: "Cinema ticket booking kiosk system...", img: "/Sinematics.png", stack: ["Java", "Java Swing", "MySQL / MariaDB"], category: "School" },
    { id: 3, title: "East City Hotel", description: "Hotel reservation and management system...", img: "/EastCityHotel.png", stack: ["Java", "Java Swing", "MySQL / MariaDB"], category: "School" },
    { id: 4, title: "SignScope", description: "Thesis project focused on interactive sign language learning...", img: "/Signscope.png", stack: ["Java", "Python", "AI / ML"], category: "Thesis" },
    { id: 5, title: "MT Online Forms", description: "Paperless system for processing purchase requisitions...", img: "/MTFormsLogo.png", stack: ["C#", "JavaScript", "Bootstrap", "ASP.NET MVC", "MS SQL"], category: "Work" },
    { id: 6, title: "CDV Management System", description: "Centralized system connected to MT Online Forms...", img: "/CDV.png", stack: ["C#", "JavaScript", "Bootstrap", "ASP.NET MVC", "MS SQL"], category: "Work" },
    { id: 7, title: "Lifestyle Travel Website", description: "Advertising website showcasing travel packages...", img: "/LifeStyleTravel.png", stack: ["WordPress", "HTML", "CSS"], category: "Work" },
  ];

  /* =====================
     RESPONSIVENESS
  ===================== */
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const totalSlides = projects.length - itemsPerSlide + 1;
  const prevSlide = () => setCurrent(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  const nextSlide = () => setCurrent(prev => (prev === totalSlides - 1 ? 0 : prev + 1));

  useEffect(() => {
    if (current >= totalSlides) setCurrent(0);
  }, [itemsPerSlide, totalSlides]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="bg-black py-20 px-4 md:px-10 overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        My <span className="text-zinc-300">Projects</span>
      </motion.h2>

      <motion.div
        className="relative max-w-6xl mx-auto flex justify-center items-center"
      >
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] md:left-0 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white p-2 md:p-3 rounded-full z-30 hover:bg-white hover:text-black transition shadow-lg"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-20px] md:right-0 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white p-2 md:p-3 rounded-full z-30 hover:bg-white hover:text-black transition shadow-lg"
        >
          <FaChevronRight />
        </button>

        {/* Cards Wrapper with drag-in effect */}
        <motion.div
          key={current} // triggers animation every slide
          className="flex gap-6 md:gap-8 justify-center"
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
          }}
        >
          {projects.slice(current, current + itemsPerSlide).map(project => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[320px] h-[460px] bg-zinc-900 rounded-3xl border border-zinc-800 text-white shadow-xl hover:border-zinc-600 transition flex flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/70 backdrop-blur border border-zinc-700">
                  {project.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow gap-3">
                <h3 className="font-semibold text-lg md:text-xl">{project.title}</h3>
                <p className="text-zinc-400 text-sm md:text-base line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs md:text-sm px-2.5 py-1 rounded-md border ${
                        techColorMap[tech] ?? "bg-zinc-800 text-zinc-300 border-zinc-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-auto w-full text-sm md:text-base py-2 rounded-xl border border-zinc-600 hover:bg-white hover:text-black transition font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

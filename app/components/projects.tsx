'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectModal, { ProjectModalData } from "./ProjectModalData";

const techColorMap: Record<string, string> = {
  React: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  HTML: "bg-orange-500/10 text-orange-300 border-orange-500/30",
  CSS: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  JavaScript: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
  Bootstrap: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  "Tailwind CSS": "bg-teal-500/10 text-teal-300 border-teal-500/30",
  "C#": "bg-violet-500/10 text-violet-300 border-violet-500/30",
  Java: "bg-red-500/10 text-red-300 border-red-500/30",
  PHP: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
  "ASP.NET": "bg-purple-500/10 text-purple-300 border-purple-500/30",
  "ASP.NET MVC": "bg-purple-600/10 text-purple-300 border-purple-600/30",
  "ASP.NET Core API": "bg-purple-700/10 text-purple-300 border-purple-700/30",
  "Java Swing": "bg-rose-500/10 text-rose-300 border-rose-500/30",
  "MS SQL": "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  MySQL: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  "MySQL / MariaDB": "bg-sky-600/10 text-sky-300 border-sky-600/30",
  "Entity Framework": "bg-lime-500/10 text-lime-300 border-lime-500/30",
  WordPress: "bg-blue-600/10 text-blue-300 border-blue-600/30",
  Python: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  "AI / ML": "bg-pink-500/10 text-pink-300 border-pink-500/30",
};

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  stack: string[];
  category: "Personal" | "School" | "Work" | "Thesis";
};

export function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "VTA HOAMS",
      description: `VTA HOAMS is a management system for the Villa Teresita Homeowners Association. It helps track monthly dues, manage announcements, store member details, and organize property lots.`,
      images: ["/VTAHAOMSLOGO.png"],
      stack: ["C#", "JavaScript", "Tailwind CSS", "ASP.NET Core API", "Entity Framework", "MS SQL"],
      category: "Personal"
    },
    {
      id: 2,
      title: "Sinematics",
      description: `"Sinematics is a self-service kiosk-based cinema ticket booking system. It allows users to select and purchase movie tickets directly from the kiosk, eliminating the need to stand in line at a counter. The system supports quick payments using company-issued prepaid cards, similar to a beep card, which can be loaded directly at the counter. This streamlines transactions and minimizes the need for cashier assistance.`,
      images: ["/Sinematics.png","/sm1.png","/sm2.png","/sm3.png"],
      stack: ["Java", "Java Swing", "MySQL / MariaDB"],
      category: "School"
    },
    {
      id: 3,
      title: "East City Hotel",
      description: `East City Hotel is a hotel reservation system enabling users to book rooms and administrators to manage bookings, payments, and room availability.`,
      images: ["/EastCityHotel.png"],
      stack: ["Java", "Java Swing", "MySQL / MariaDB"],
      category: "School"
    },
    {
      id: 4,
      title: "SignScope",
      description: `SignScope is a thesis project that combines an interactive educational system for deaf, mute, and hearing users, built in Java and featuring quizzes, learning modules, and hands-on activities, with AI-powered features developed in Python. It focuses on inclusive, interactive learning and AI-assisted insights.`,
      images: ["/Signscope.png","/sign1.png","/sign2.png","/sign3.png","/sign4.png","/sign5.png","/sign6.png"],
      stack: ["Java", "Python", "AI / ML"],
      category: "Thesis"
    },
    {
      id: 5,
      title: "MT Online Forms",
      description: `MT Online Forms is a digital system that automates the processing of purchase requisitions, purchase orders, and canvass sheets, reducing paper usage and streamlining internal workflows.`,
      images: ["/MTFormsLogo.png","/mtf1.png","/mtf2.png","/mtf3.png","/mtf4.png","/mtf5.png"],
      stack: ["C#", "JavaScript", "Bootstrap", "ASP.NET MVC", "MS SQL"],
      category: "Work"
    },
    {
      id: 6,
      title: "CDV Management System",
      description: `The CDV Management System (Check Disbursement Voucher) processes requests from branches and departments integrated with MT Online Forms. It serves as the final stage of processing, handling voucher payables, check vouchers, and check releases.`,
      images: ["/CDV.png","/cdv1.png","/cdv2.png","/cdv3.png","/cdv4.png","/cdv6.png"],
      stack: ["C#", "JavaScript", "Bootstrap", "ASP.NET MVC", "MS SQL"],
      category: "Work"
    },
    {
      id: 7,
      title: "Lifestyle Travel Website",
      description: `Lifestyle Travel is a WordPress-based advertising website that showcases travel packages, itineraries, and pricing, serving as a promotional platform for the travel agency.`,
      images: ["/LifeStyleTravel.png"],
      stack: ["WordPress", "HTML", "CSS"],
      category: "Work"
    }
  ];

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalSlides = projects.length - itemsPerSlide + 1;
  const next = () => setCurrent((p) => (p === totalSlides - 1 ? 0 : p + 1));
  const prev = () => setCurrent((p) => (p === 0 ? totalSlides - 1 : p - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const openModal = (project: Project) => {
    setSelectedProject({
      title: project.title,
      description: project.description,
      images: project.images,
      stack: project.stack,
    });
    setModalOpen(true);
  };

  return (
    <section id="projects" className="bg-black py-20 px-4 overflow-hidden">
      <motion.h2
        className="text-4xl font-extrabold text-center text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My <span className="text-zinc-300">Projects</span>
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        <button
          onClick={prev}
          className="absolute left-[-20px] md:left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-zinc-800/70 rounded-full hover:bg-white hover:text-black transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-[-20px] md:right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-zinc-800/70 rounded-full hover:bg-white hover:text-black transition"
        >
          <FaChevronRight />
        </button>

        <motion.div
          key={current}
          className="flex gap-6 md:gap-8 justify-center"
          initial={{ x: 40 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          {projects.slice(current, current + itemsPerSlide).map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[320px] h-[460px] bg-zinc-900 rounded-3xl border border-zinc-800 text-white shadow-xl hover:border-zinc-600 transition flex flex-col overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={project.images[0]}
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

                <button
                  onClick={() => openModal(project)}
                  className="mt-auto w-full text-sm md:text-base py-2 rounded-xl border border-zinc-600 hover:bg-white hover:text-black transition font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <ProjectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}

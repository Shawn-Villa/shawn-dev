'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ TypeScript type for projects
type Project = {
  id: number;
  title: string;
  description: string;
  img: string | StaticImageData;
  type?: string;
  media?: string;
};

export function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [current, setCurrent] = useState(0);

  // Images from public folder
  const Sinematics = "/Sinematics.png";
  const Signscope = "/Signscope.png";
  const EastCityHotel = "/EastCityHotel.png";
  const MTFormsLogo = "/MTFormsLogo.png";
  const LifeStyleTravel = "/LifeStyleTravel.png";
  const CDV = "/CDV.png";

  const projects: Project[] = [
    {
      id: 1,
      title: "VTA HOAMS",
      description: "Homeowners Association Management System for Villa Teresita Alisasis. Manages member records, monthly dues, and HOA operations efficiently.",
      img: Sinematics,
    },
    { id: 2, title: "Sinematics", description: "Kiosk ticket booking system built in Java with MySQL.", img: Sinematics },
    { id: 3, title: "East City Hotel", description: "Hotel management system including booking and billing.", img: EastCityHotel },
    { id: 4, title: "SignScope", description: "Education system for learning sign language interactively.", img: Signscope },
    { id: 5, title: "MT Online Forms", description: "Digitizes purchase orders and payment requests for Manila Teachers.", img: MTFormsLogo },
    { id: 6, title: "CDV Management System", description: "Streamlines voucher approvals and payments.", img: CDV },
    { id: 7, title: "LifeStyle Travel Website", description: "Advertising website showcasing travel deals.", img: LifeStyleTravel },
  ];

  const itemsPerSlide = 3;

  const getVisibleProjects = () => {
    const start = current * itemsPerSlide;
    return projects.slice(start, start + itemsPerSlide);
  };

  const prevSlide = () => {
    setCurrent(prev => prev === 0 ? Math.floor(projects.length / itemsPerSlide) - 1 : prev - 1);
  };

  const nextSlide = () => {
    setCurrent(prev => prev === Math.floor(projects.length / itemsPerSlide) - 1 ? 0 : prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <motion.section
      id="projects"
      className="relative py-20 bg-black px-6 md:px-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* --- Animated Background --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute w-72 h-72 rounded-full bg-white/20 blur-3xl"
          animate={{ x: [0, 100, -80, 0], y: [0, -50, 60, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
          animate={{ x: [0, -120, 80, 0], y: [0, 40, -60, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-yellow-400/20 blur-3xl"
          animate={{ x: [0, 70, -50, 0], y: [0, -60, 40, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      {/* --- Section Title --- */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-white">Projects</span>
      </motion.h2>

      {/* --- Carousel --- */}
      <div className="relative flex items-center justify-center">
        <button onClick={prevSlide} className="absolute left-0 bg-black/40 text-white p-3 rounded-full z-30 transition-colors duration-300 hover:bg-[#CEAE7B] hover:text-black">
          <FaChevronLeft />
        </button>

        <div className="overflow-hidden w-full">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center gap-6"
          >
            {getVisibleProjects().map(project => (
              <div key={project.id} className="w-[350px] bg-zinc-900 rounded-lg text-zinc-50 shadow-lg flex flex-col">
                <div className="w-full h-48 rounded-t-lg overflow-hidden">
                  <Image src={project.img} alt={project.title} layout="responsive" width={500} height={300} className="object-cover w-full h-full" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-zinc-400 text-sm break-words text-justify">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto relative overflow-hidden border border-white text-white font-semibold py-1 px-3 rounded group"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Explore</span>
                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button onClick={nextSlide} className="absolute right-0 bg-black/40 text-white p-3 rounded-full z-30 transition-colors duration-300 hover:bg-white hover:text-black">
          <FaChevronRight />
        </button>
      </div>

      {/* --- Dots --- */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(projects.length / itemsPerSlide) }).map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-zinc-600"} transition`} />
        ))}
      </div>

      {/* --- Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-zinc-900/20 backdrop-blur-md rounded-[100px] max-w-3xl w-full overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.type === "video" ? (
                <video src={selectedProject.media} controls autoPlay className="w-full h-auto" />
              ) : (
                <img src={selectedProject.media || (selectedProject.img as string)} alt={selectedProject.title} className="w-full h-auto" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

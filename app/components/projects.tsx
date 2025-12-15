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

  useEffect(() => {
  const updateItemsPerSlide = () => {
    if (window.innerWidth < 640) {
      setItemsPerSlide(1); // mobile
    } else if (window.innerWidth < 1024) {
      setItemsPerSlide(2); // tablet
    } else {
      setItemsPerSlide(3); // desktop
    }
  };

  updateItemsPerSlide();
  window.addEventListener("resize", updateItemsPerSlide);

  return () => window.removeEventListener("resize", updateItemsPerSlide);
}, []);


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

  const [itemsPerSlide, setItemsPerSlide] = useState(3);


  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

const getVisibleProjects = () => {
  const start = current * itemsPerSlide;
  return projects.slice(start, start + itemsPerSlide);
};


 const prevSlide = () => {
  setCurrent(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
};

const nextSlide = () => {
  setCurrent(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
};
useEffect(() => {
  if (current >= totalSlides) {
    setCurrent(0);
  }
}, [itemsPerSlide, totalSlides]);



  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
   <motion.section
    className="bg-black py-20 px-4 md:px-10"
    initial={{ opacity: 1 }}
    whileInView={{ opacity: 1 }}
  >
    {/* --- Section Title --- */}
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      My <span className="text-zinc-300">Projects</span>
    </motion.h2>

    {/* --- Carousel Wrapper --- */}
    <div className="relative max-w-6xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white p-3 rounded-full z-30 hover:bg-white hover:text-black transition"
      >
        <FaChevronLeft />
      </button>

      {/* Slides */}
      <div className="overflow-hidden">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.35 }}
          className="flex justify-center gap-4"
        >
          {getVisibleProjects().map(project => (
            <div
              key={project.id}
              className="w-full max-w-[320px] h-[420px] bg-zinc-900 rounded-xl text-white shadow-md flex flex-col overflow-hidden"
            >

              <div className="h-44 w-full overflow-hidden shrink-0">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg mb-1">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Full-width button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto w-full border border-zinc-500 text-white text-sm py-2 rounded-lg
                            hover:bg-white hover:text-black transition"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-zinc-800/70 text-white p-3 rounded-full z-30 hover:bg-white hover:text-black transition"
      >
        <FaChevronRight />
      </button>
    </div>

  {/* --- Dots --- */}
  <div className="flex justify-center mt-6 gap-2">
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`w-2.5 h-2.5 rounded-full transition ${
          index === current ? "bg-white" : "bg-zinc-600"
        }`}
      />
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

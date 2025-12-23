'use client';

import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import Image from 'next/image';
import UELogo from "@/public/UELogo.png";
import lifeStyle from "@/public/lifestyle-travel-logo.png";
import MTLogo from "@/public/Manila_Teachers_Partylist.png";

export function Timeline() {
  const milestones = [
    {
      year: "2018–2020",
      title: "Information Communication Technology",
      subtitle: "Senior High School",
      description: "University of the East",
      icon: <FaGraduationCap />,
      color: "from-blue-700 to-blue-500",
      image: UELogo,
    },
    {
      year: "2020–2024",
      title: "BS in Computer Science",
      subtitle: "Bachelor’s Degree (Magna Cum Laude)",
      description: "University of the East",
      icon: <FaGraduationCap />,
      color: "from-purple-700 to-purple-500",
      image: UELogo,
    },
    {
      year: "2024 (Internship)",
      title: "Web Developer Intern",
      subtitle: "LifeStyle Travel Corp.",
      description: "",
      icon: <FaLaptopCode />,
      color: "from-yellow-600 to-yellow-400",
      image: lifeStyle,
    },
    {
      year: "2024–Present",
      title: "Full Stack Developer",
      subtitle: "Manila Teachers’ Mutual Aid System",
      description: "",
      icon: <FaLaptopCode />,
      color: "from-green-700 to-green-500",
      image: MTLogo,
    },
  ];

  return (
    <section
      id="timeline"
      className="py-16 bg-black/90 px-6 md:px-16 relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-white mb-14 tracking-tight z-20 relative"
      >
        My Journey
      </motion.h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Gradient Line */}
        <motion.div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full rounded-full z-0 md:block hidden"
          style={{
            background:
              "linear-gradient(to bottom, #3b82f6, #8b5cf6, #facc15, #22c55e, #3b82f6)",
            backgroundSize: "400% 400%",
            opacity: 0.5, // reduce brightness
          }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 50%",
              "0% 100%",
              "100% 50%",
              "0% 0%",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>

        <div className="space-y-14 relative z-10">
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Icon */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20 md:block hidden"
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      "drop-shadow(0 0 3px rgba(255,255,255,0.2))",
                      "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                      "drop-shadow(0 0 3px rgba(255,255,255,0.2))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`bg-gradient-to-r ${item.color} p-3 rounded-full text-white text-2xl shadow-md`}
                  >
                    {item.icon}
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`relative md:w-1/2 ${
                    isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                  }`}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.img
                    src={typeof item.image === 'string' ? item.image : item.image.src}
                    alt={item.title}
                    className={`absolute top-1/2 -translate-y-1/2 w-64 h-40 object-contain rounded-2xl transition-all z-50 ${
                      isLeft ? "right-full mr-6" : "left-full ml-6"
                    }`}
                    style={{ filter: "blur(0px)", backgroundColor: "transparent", opacity: 0.7 }}
                    variants={{
                      rest: {
                        opacity: 0,
                        scale: 0.9,
                        x: isLeft ? 40 : -40,
                        filter: "blur(8px)",
                      },
                      hover: {
                        opacity: 1,
                        scale: 1,
                        x: isLeft ? -10 : 10,
                        filter: "blur(0px)",
                        transition: { duration: 0.4, ease: "easeOut" },
                      },
                    }}
                  />

                  <div className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-gray-400/20 transition-all duration-300 relative z-10">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 font-medium mt-1">
                      {item.subtitle}
                    </p>
                    {item.description && (
                      <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    <p className="mt-4 text-sm text-gray-400 font-semibold tracking-wide uppercase">
                      {item.year}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Line */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-t from-blue-700 to-green-700 opacity-50"
          style={{ backgroundSize: "400% 400%" }}
          animate={{
            backgroundPosition: [
              "0% 0%",
              "100% 50%",
              "0% 100%",
              "100% 50%",
              "0% 0%",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        ></motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from "framer-motion";
import { FaGraduationCap, FaGlobeAsia, FaLaptopCode } from "react-icons/fa";
import Image from 'next/image';
import UELogo from "@/public/UELogo.png";
import MTLogo from "@/public/Manila_Teachers_Partylist.png";

export function RoadmapSection() {
  const milestones = [
    {
      year: "2018–2020",
      title: "Information Communication Technology",
      subtitle: "Senior High School",
      description: "University of the East",
      icon: <FaGraduationCap />,
      color: "from-blue-500 to-cyan-400",
      glow: "0 0 25px rgba(59,130,246,0.4)",
      image: UELogo,
    },
    {
      year: "2020–2024",
      title: "BS in Computer Science",
      subtitle: "Bachelor’s Degree (Magna Cum Laude)",
      description: "University of the East",
      icon: <FaGraduationCap />,
      color: "from-purple-500 to-pink-400",
      glow: "0 0 25px rgba(168,85,247,0.4)",
      image: UELogo,
    },
    {
      year: "2024 (Internship)",
      title: "Web Developer Intern",
      subtitle: "LifeStyle Travel Corp.",
      description: "",
      icon: <FaLaptopCode />,
      color: "from-amber-400 to-yellow-300",
      glow: "0 0 25px rgba(251,191,36,0.4)",
      image: "/images/Image-Placeholder.png",
    },
    {
      year: "2024–Present",
      title: "Full Stack Developer",
      subtitle: "Manila Teachers’ Mutual Aid System",
      description: "",
      icon: <FaLaptopCode />,
      color: "from-green-500 to-emerald-400",
      glow: "0 0 25px rgba(34,197,94,0.4)",
      image: MTLogo,
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-16 bg-black px-6 md:px-16 relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-extrabold text-center text-white mb-14 relative z-20"
      >
        My <span className="text-blue-500">Journey</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Animated vertical line */}
        <motion.div
          className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full rounded-full z-0 md:block hidden"
          style={{
            background:
              "linear-gradient(to bottom, #3b82f6, #a855f7, #facc15, #22c55e, #3b82f6)",
            backgroundSize: "400% 400%",
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
                    scale: [1, 1.1, 1],
                    filter: [
                      "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
                      "drop-shadow(0 0 15px rgba(59,130,246,0.5))",
                      "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className={`bg-gradient-to-r ${item.color} p-3 rounded-full text-white text-2xl shadow-lg`}
                  >
                    {item.icon}
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`relative md:w-1/2 ${
                    isLeft ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                  } group sm:hover:transform-none sm:hover:scale-100`} // Disabling hover on small screens
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  {/* Hover image */}
                  <motion.img
                     src={typeof item.image === 'string' ? item.image : item.image.src}
                    alt={item.title}
                    className={`absolute top-1/2 -translate-y-1/2 w-64 h-40 object-contain rounded-2xl transition-all z-50 ${
                      isLeft ? "right-full mr-6" : "left-full ml-6"
                    }`}
                    style={{
                      filter: "blur(0px)",
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "none", // removes all glow/shadow
                    }}
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

                  {/* Info */}
                  <div className="bg-black/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-md hover:-translate-y-1 hover:shadow-blue-400/30 transition-all duration-300 relative z-10">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mt-1">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="mt-4 text-sm text-blue-500 font-semibold tracking-wide uppercase">
                      {item.year}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile View - Line behind Boxes */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-t from-blue-500 to-green-500"
          style={{
            backgroundSize: "400% 400%",
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
      </div>
    </section>
  );
}

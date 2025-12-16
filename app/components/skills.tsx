"use client";

import { FaCode, FaLayerGroup, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <>
      <style>{`
        .spinning-3d {
          transform-style: preserve-3d;
          animation: spinY 4s linear infinite;
          will-change: transform;
          backface-visibility: visible;
        }

        @keyframes spinY {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>

      <section
  id="skills"
  className="w-full bg-black/90 py-20 px-6 overflow-x-hidden"
>
  <motion.h2
      className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    SKILLS
  </motion.h2>

  <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-stretch gap-6 text-center">
    
    {/* Programming & Technologies */}
    <motion.div
      className="relative group p-6 overflow-hidden rounded-xl cursor-pointer
                 w-full sm:w-1/3 h-[380px]
                 flex flex-col items-center text-center
                 bg-zinc-900 border border-zinc-700"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-white scale-x-0 origin-left
                      transition-transform duration-500
                      group-hover:scale-x-100 z-0" />

      <div className="relative z-10 flex flex-col items-center
                      text-white group-hover:text-black
                      transition-colors duration-500">
        <FaCode className="text-5xl spinning-3d mb-4" />
        <h3 className="font-bold mb-3 text-xl">
          Programming & Technologies
        </h3>

        <ul className="list-disc list-inside text-left text-base leading-relaxed space-y-2">
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Web Development:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              HTML, CSS, Tailwind, Bootstrap
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              JavaScript Ecosystem:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              React (Vite/Next), React Native, Node, API
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Microsoft Stack:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              C#, ASP.NET, SQL (MSSQL)
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Other Languages:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              Java, MySQL
            </div>
          </li>
        </ul>
      </div>
    </motion.div>

    {/* Dev Tools & Environments */}
    <motion.div
      className="relative group p-6 overflow-hidden rounded-xl cursor-pointer
                 w-full sm:w-1/3 h-[380px]
                 flex flex-col items-center text-center
                 bg-zinc-900 border border-zinc-700"
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      <div className="absolute inset-0 bg-white scale-x-0 origin-left
                      transition-transform duration-500
                      group-hover:scale-x-100 z-0" />

      <div className="relative z-10 flex flex-col items-center
                      text-white group-hover:text-black
                      transition-colors duration-500">
        <FaLayerGroup className="text-5xl spinning-3d mb-4" />
        <h3 className="font-bold mb-3 text-xl">
          Dev Tools & Environments
        </h3>

        <ul className="list-disc list-inside text-left text-base leading-relaxed space-y-2">
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Editors / IDEs:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              Visual Studio, VS Code, Android Studio
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Database & API Tools:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              SSMS, Postman
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Version Control:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              GitHub, Azure DevOps
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Cloud:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              AWS
            </div>
          </li>
        </ul>
      </div>
    </motion.div>

    {/* Design, Reporting, & Support */}
    <motion.div
      className="relative group p-6 overflow-hidden rounded-xl cursor-pointer
                 w-full sm:w-1/3 h-[380px]
                 flex flex-col items-center text-center
                 bg-zinc-900 border border-zinc-700"
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-white scale-x-0 origin-left
                      transition-transform duration-500
                      group-hover:scale-x-100 z-0" />

      <div className="relative z-10 flex flex-col items-center
                      text-white group-hover:text-black
                      transition-colors duration-500">
        <FaTools className="text-5xl spinning-3d mb-4" />
        <h3 className="font-bold mb-3 text-xl"> 
          Design, Reporting, & Support
        </h3>

        <ul className="list-disc list-inside text-left text-base leading-relaxed space-y-2">
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Design Tools:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              Figma, Photoshop, Canva
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              Reporting:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              Crystal Report, Microsoft 365
            </div>
          </li>
          <li>
            <span className="text-zinc-300 group-hover:text-black group-hover:underline transition">
              User Support:
            </span>
            <div className="text-center text-zinc-400 group-hover:text-black transition">
              UltraViewer, NetSupport
            </div>
          </li>
        </ul>
      </div>
    </motion.div>

  </div>
</section>

    </>
  );
}
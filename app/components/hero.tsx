'use client';

import ProfileCard from "@/src/component/ProfileCard";
import LightRays from "@/src/component/LightRays";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to Contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Light Rays - background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays raysColor="#ffffff" />
      </div>

      {/* Background giant text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-[5]">
        <h1 className="text-[18rem] font-extrabold leading-none bg-gradient-to-b from-white to-white/40 text-transparent bg-clip-text tracking-tight">
          SHAWN
        </h1>
        <h1 className="text-[18rem] font-extrabold leading-none bg-gradient-to-b from-white to-white/40 text-transparent bg-clip-text -mt-32 tracking-tight">
          VILLA
        </h1>
      </div>

      {/* Profile Card (foreground) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <ProfileCard
          avatarUrl="/shawn-avatar2.jpg"
          miniAvatarUrl="/me-icon.jpg"
          behindGradient="radial-gradient(circle, rgba(255,255,255,0.25), rgba(0,0,0,0.05))"
          innerGradient="linear-gradient(to bottom right, rgba(0,0,0,0.55), rgba(0,0,0,0.95))"
          onContactClick={scrollToContact} 
          name="Shawn Villa"
          title="Full-Stack Developer"
          handle="shawnyyqt"
          status="Available"
        />
      </motion.div>

      {/* Rectangular Card with Arrow Down */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-20 cursor-pointer"
           onClick={scrollToAbout} // <-- scroll handler for About section
      >
        <div className="bg-white p-6 px-12 rounded-t-md flex justify-center items-center">
          <FaArrowDown className="text-black text-4xl animate-bounce" />
        </div>
      </div>

    </section>
  );
}

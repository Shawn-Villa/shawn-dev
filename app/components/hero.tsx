"use client";

import ProfileCard from "@/src/component/ProfileCard";
import LightRays from "@/src/component/LightRays";
import { motion } from "framer-motion";

export default function Hero() {
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
          onContactClick={() => alert('Contact clicked!')}
          name="Shawn Villa"
          title="Full-Stack Developer"
          handle="shawnyyqt"
          status="Available"
        />
      </motion.div>
    </section>
  );
}

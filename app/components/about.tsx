"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePic from "@/public/me-icon.jpg";

export function AboutSection() {
  return (
   <section
    id="about"
    className="min-h-[50vh] py-24 px-6 md:px-20 bg-white"
    >

      {/* White Card Wrapper */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-t-2xl p-10 pb-10 border border-gray-200">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-black mb-14 tracking-tight"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-14">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Image
              src={ProfilePic}
              alt="Profile"
              width={300}
              height={300}
              className="rounded-2xl object-cover shadow-md"
            />
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 max-w-xl"
          >
            <p className="text-black leading-relaxed text-lg text-justify">
              Hi, I’m <span className="font-semibold">Shawn Villa</span>, a
              Full-Stack Developer who focuses on building reliable, clean, and
              practical digital solutions. I enjoy working across both frontend
              and backend, turning ideas into functional and efficient applications.
            </p>

            <p className="text-black leading-relaxed text-lg text-justify">
              My goal is to continuously improve my craft, learn modern
              technologies, and build software that creates real value for users
              and businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

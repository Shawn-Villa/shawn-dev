"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePic from "@/public/me-icon.jpg";

export function AboutSection() {
  return (
    <section
      id="about"
       className="min-h-[50vh] py-24 px-6 md:px-20
             bg-[#F8F8F8]/75 rounded-t-2xl
             flex items-center justify-center
             overflow-x-hidden"
    >
      <div className="text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center text-black mb-14 tracking-tight"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-14 justify-center">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
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
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 max-w-xl"
          >
            <p className="text-black leading-loose text-xl text-justify">
              Hi, I’m <span className="font-semibold">Shawn Villa</span>, a
              Full-Stack Developer who focuses on building reliable, clean, and
              practical digital solutions. I enjoy working across both frontend
              and backend, turning ideas into functional and efficient applications.
            </p>

            <p className="text-black leading-loose text-xl text-justify">
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

'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export function ContactSection() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ShawnRovicVilla@gmail.com",
      href: "mailto:ShawnRovicVilla@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/ShawnVilla",
      href: "https://github.com/ShawnVilla",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/shawnvilla",
      href: "https://linkedin.com/in/shawnvilla",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-6 text-white overflow-hidden"
      style={{
        backgroundColor: "#000000",
      }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-zinc-400 max-w-xl mx-auto mb-12 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Let’s collaborate, build something awesome, or just say hi! I’m always open to connect.
      </motion.p>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group border border-zinc-600 rounded-2xl p-6 flex flex-col items-center text-center
                       bg-zinc-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
                       transition-transform duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span
              className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-30
                         bg-white/10 blur-xl transition-all duration-500"
            ></span>

            <div className="text-4xl mb-3 text-white">{c.icon}</div>
            <h3 className="font-semibold text-lg text-white">{c.title}</h3>
            <p className="text-sm text-zinc-300 break-all mt-1">{c.value}</p>
          </motion.a>
        ))}
      </div>

      {/* Download CV Button */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="/ShawnVilla_CV.pdf" // <-- replace with your CV file path
          download
          className="flex items-center gap-3 px-8 py-4 bg-black border border-zinc-500
                     rounded-3xl font-semibold text-white hover:bg-zinc-900 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
                     transition-transform duration-300"
        >
          <FaDownload /> Download CV
        </a>
      </motion.div>
    </section>
  );
}

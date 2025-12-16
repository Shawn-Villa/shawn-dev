'use client';

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ShawnRovicVilla@gmail.com",
      href: "mailto:ShawnRovicVilla@gmail.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/ShawnVilla",
      href: "https://github.com/ShawnVilla",
      gradient: "from-gray-700 to-gray-400",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/shawnvilla",
      href: "https://linkedin.com/in/shawnvilla",
      gradient: "from-blue-600 to-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-6 text-white overflow-hidden" // Reduced py-24 to py-16 for smaller section
      style={{ backgroundColor: "#000000" }} // Reverted to black background
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 tracking-tight" // Adjusted margin for a tighter feel
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-zinc-400 max-w-xl mx-auto mb-12 text-lg" // Reduced margin for subtitle
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
            className={`relative border border-zinc-700 rounded-2xl p-6 flex flex-col items-center text-center
                        bg-zinc-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                        transition-transform duration-300 overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* Gradient Glow */}
            <span
              className={`absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-50
                          bg-gradient-to-r ${c.gradient} blur-xl transition-all duration-500`}
            ></span>

            <div className="text-4xl mb-3 text-white">{c.icon}</div>
            <h3 className="font-semibold text-lg">{c.title}</h3>
            <p className="text-sm text-zinc-400 break-all mt-1">{c.value}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white text-black"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-black mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-600 max-w-xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Feel free to reach out if you want to collaborate or just say hi.
      </motion.p>

      {/* Contact Links */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <ContactCard
          icon={<FaEnvelope />}
          title="Email"
          value="ShawnRovicVilla@gmail.com"
          href="mailto:ShawnRovicVilla@gmail.com"
        />

        <ContactCard
          icon={<FaGithub />}
          title="GitHub"
          value="github.com/ShawnVilla"
          href="https://github.com/ShawnVilla"
        />

        <ContactCard
          icon={<FaLinkedin />}
          title="LinkedIn"
          value="linkedin.com/in/shawnvilla"
          href="https://linkedin.com/in/shawnvilla"
        />
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-black/10 rounded-xl p-6 flex flex-col items-center text-center
                 hover:border-black/30 transition bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-3xl mb-3 text-black">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 break-all">{value}</p>
    </motion.a>
  );
}

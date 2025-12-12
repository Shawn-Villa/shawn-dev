"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactSection() {
  const contactLinks = [
    {
      icon: <FaEnvelope className="text-red-500 text-4xl" />,
      title: "Email",
      text: "ShawnRovicVilla@gmail.com",
      href: "mailto:ShawnRovicVilla@gmail.com",
    },
    {
      icon: <FaGithub className="text-gray-800 dark:text-white text-4xl" />,
      title: "GitHub",
      text: "github.com/ShawnVilla",
      href: "https://github.com/ShawnVilla",
    },
    {
      icon: <FaLinkedin className="text-blue-600 text-4xl" />,
      title: "LinkedIn",
      text: "linkedin.com/in/shawnvilla",
      href: "https://linkedin.com/in/shawnvilla",
    },
  ];

  const socialIcons = [
    {
      icon: <FaEnvelope />,
      href: "mailto:ShawnRovicVilla@gmail.com",
      hoverColor: "hover:bg-blue-500 hover:text-white",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/ShawnVilla",
      hoverColor: "hover:bg-gray-900 hover:text-white",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/shawnvilla",
      hoverColor: "hover:bg-blue-600 hover:text-white",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating Gradient Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 bg-blue-400/20 rounded-full mix-blend-screen blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-400/20 rounded-full mix-blend-screen blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "15%" }}
        />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        className="text-gray-600 dark:text-gray-300 text-center max-w-xl mx-auto mb-16 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Feel free to reach out if you’d like to collaborate, have questions, or just want to say hi.
      </motion.p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
        {contactLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/80 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-md p-8 flex flex-col items-center justify-center transition-all hover:shadow-2xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
              {link.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              {link.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center break-all">
              {link.text}
            </p>
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="text-center mt-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="mailto:ShawnRovicVilla@gmail.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
        >
          Let’s Work Together
        </a>
      </motion.div>

      {/* Animated Floating Social Icons */}
      <div className="mt-10 flex justify-center gap-6 relative z-10">
        {socialIcons.map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-md ${social.hoverColor} transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer Note */}
      <motion.p
        className="text-center text-gray-500 dark:text-gray-400 text-sm mt-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        © {new Date().getFullYear()} Shawn Villa — Built with ❤️ using React & Tailwind CSS
      </motion.p>

      {/* Gradient Divider / Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600/30 to-transparent dark:from-blue-500/10 blur-2xl" />
    </motion.section>
  );
}

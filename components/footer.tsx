"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  ExternalLink,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black mt-10 text-gray-200 pt-16 pb-10 shadow-lg">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link
              href="#home"
              className="inline-block text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 tracking-widest"
            >
              Aryan Patel
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Passionate Full Stack Developer crafting seamless and innovative
              digital solutions with modern web technologies.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-5 w-5 text-purple-400" />
              <span>Ahmedabad, India</span>
            </div>
          </motion.div>

          {/* Professional Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-300">
              Professional
            </h3>
            <ul className="space-y-4 text-gray-400">
              {[
                { icon: Code, text: "Full Stack Development" },
                { icon: GraduationCap, text: "B.Tech IT Student" },
                { icon: Award, text: "Multiple Certifications" },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <item.icon className="h-5 w-5 text-slate-200 mt-1" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-300">Navigation</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Home", "About", "Skills", "Projects", "Contact", "Blog"].map(
                (item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="transform transition-all duration-200"
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-purple-400 flex items-center space-x-2 group"
                    >
                      <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform duration-200" />
                      <span>{item}</span>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-200">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-400">
              <a
                href="mailto:aryanpatel8044@gmail.com"
                className="hover:text-purple-400 flex items-center space-x-2 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 text-slate-200" />
                <span>aryanpatel8044@gmail.com</span>
              </a>
              <a
                href="tel:+911234567890"
                className="hover:text-purple-400 flex items-center space-x-2 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 text-slate-200" />
                <span>+91 9723738044</span>
              </a>
              <p className="text-gray-500 mt-4 text-sm">
                Available for freelance work and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Aryanpatel2001",
                  label: "GitHub",
                },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                {
                  icon: Mail,
                  href: "mailto:aryanpatel8044@gmail.com",
                  label: "Email",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transform transition-all duration-200 hover:scale-110"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="sr-only">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              variants={itemVariants}
              className="text-center md:text-right space-y-2"
            >
              <p className="flex items-center justify-center md:justify-end gap-1 text-gray-400">
                © {currentYear} Crafted with{" "}
                <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by
                Aryan Patel
              </p>
              <p className="text-sm text-gray-500">
                Full Stack Developer | Tech Enthusiast | Problem Solver
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:40px_40px] -z-10"></div>

      <div className="luxury-container py-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-serif">
            <span className="text-[#34495e]">Hello, I'm </span>
            <span className="luxury-text-gradient">Aryan Patel</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#5d6d7e] mb-6">
            Full Stack Developer | B.Tech IT Student
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="max-w-2xl text-[#5d6d7e] mb-8 text-base md:text-lg">
            I'm a passionate developer specializing in building modern web
            applications with React, Next.js, and Node.js. Currently seeking
            internship opportunities.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="rounded-full luxury-gradient text-white hover:opacity-90 transition-opacity"
            >
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-[#d4af37] text-[#b38728] hover:bg-orange-300  hover:border-[#b38728]"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full bg-[#f8f4e3] text-[#b38728] hover:bg-[#f0e9d2]"
            >
              <a href="/resume.pdf" download="Aryan_Patel_Resume.pdf">
                <FileDown className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            {
              icon: <Github className="h-6 w-6" />,
              href: "https://github.com/Aryanpatel2001",
              label: "GitHub",
            },
            {
              icon: <Mail className="h-6 w-6" />,
              href: "mailto:aryanpatel8044@gmail.com",
              label: "Email",
            },
            {
              icon: <Linkedin className="h-6 w-6" />,
              href: "#",
              label: "LinkedIn",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -3, color: "#d4af37" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-[#5d6d7e] hover:text-[#d4af37] transition-colors"
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

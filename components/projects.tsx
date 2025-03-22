"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A full-featured LMS platform enabling seamless course management and user engagement.",
    features: [
      "Dynamic email templates using Node.js and EJS",
      "Real-time notification system using WebSocket/Socket.io",
      "OTP-based email authentication",
      "Admin dashboard with analytics and charts",
      "Integrated payment processing",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Next.js 13",
      "RTK Query",
      "Socket.io",
      "EJS",
    ],
    githubUrl: "https://github.com/Aryanpatel2001",
    liveUrl: "https://lernify1.vercel.app/",
  },
  {
    title: "AI Presentation Builder",
    description:
      "An AI-powered presentation builder enabling users to create stunning presentations effortlessly.",
    features: [
      "LemonSqueezy Payments & Connect integration",
      "Drag & Drop Presentation Editor",
      "AI-powered creative slide generation",
      "Real-time slide streaming via Vercel & WebSockets",
      "Theme selection (Light & Dark Mode)",
      "Shareable presentation links",
      "Trash functionality for deleted projects",
    ],
    technologies: [
      "AI",
      "TypeScript",
      "Node.js",
      "Next.js",
      "LemonSqueezy",
      "Vercel",
    ],
    githubUrl: "https://github.com/Aryanpatel2001",
    liveUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="luxury-section bg-[#fcfcfc] mt-10">
      <div className="luxury-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="luxury-heading font-serif text-3xl font-bold">
            Projects
          </h2>
          <div className="luxury-divider"></div>
          <p className="mt-4 text-[#5d6d7e] max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Check out my
            <Link
              href="https://github.com/Aryanpatel2001"
              className="text-blue-700 hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>{" "}
            for more.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="luxury-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl luxury-text-gradient font-serif">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-[#5d6d7e] ">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <h4 className="font-medium mb-2 text-[#34495e]">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 mb-4 text-sm text-[#5d6d7e]">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#f8f4e3] text-[#b38728] hover:bg-[#f0e9d2] border border-[#e6d7a7]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-black text-black hover:bg-slate-100 hover:text-black"
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="luxury-gradient hover:opacity-90 transition-opacity"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div> */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex h-full w-full"
              >
                <Card className="luxury-card flex flex-col h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl luxury-text-gradient font-serif">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-[#5d6d7e] ">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2">
                    <h4 className="font-medium mb-2 text-[#34495e]">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 mb-4 text-sm text-[#5d6d7e]">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#f8f4e3] text-[#b38728] hover:bg-[#f0e9d2] border border-[#e6d7a7]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-black text-black hover:bg-slate-100 hover:text-black"
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="luxury-gradient hover:opacity-90 transition-opacity"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

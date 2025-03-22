"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="luxury-section bg-[#fcfcfc] ml-10 mb-16">
      <div className="luxury-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="luxury-heading font-serif text-3xl font-bold">
            About Me
          </h2>
          <div className="luxury-divider"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="luxury-subheading flex items-center font-serif text-2xl font-semibold mb-3">
              <User className="mr-2 h-5 w-5 text-[#d4af37] " />
              Introduction
            </h3>
            <p className="text-[#5d6d7e] mb-6 text-xl">
              I'm in my 3rd year (6th semester) of B.Tech in Information
              Technology with a top academic record of 8.99 CGPA. I love
              building websites and apps from front to back.
            </p>
            <p className="text-[#5d6d7e] mb-6 text-xl">
              I'm looking for an internship opportunity where I can apply my
              full stack development skills, learn from industry professionals,
              and gain valuable work experience before graduating.
            </p>
            <p className="text-[#5d6d7e] text-xl">
              I'm passionate about creating efficient, user-friendly
              applications and continuously expanding my knowledge in the
              ever-evolving tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="luxury-subheading flex items-center font-serif text-2xl font-semibold">
              <GraduationCap className="mr-2 h-5 w-5 text-[#d4af37] " />
              Education
            </h3>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="luxury-card shimmer-effect">
                <CardContent className="p-6 relative">
                  <h4 className="text-xl font-medium mb-2 font-serif">
                    B.Tech in Information Technology
                  </h4>
                  <p className="text-[#5d6d7e] mb-1">
                    Gandhinagar University, Ahmedabad, Gujarat
                  </p>
                  <p className="text-[#5d6d7e] mb-2">
                    Expected Graduation: 2026
                  </p>
                  <p className="luxury-text-gradient font-medium">CGPA: 8.99</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

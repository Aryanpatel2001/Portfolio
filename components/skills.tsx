// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Code,
//   Database,
//   Globe,
//   Server,
//   Wrench,
//   Cpu,
//   Zap,
//   Brain,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const technicalSkills = [
//   {
//     category: "Programming Languages",
//     skills: ["JavaScript", "TypeScript", "Python", "C++"],
//     icon: <Code className="h-12 w-12" />,
//     color: "from-gray-800 to-gray-900",
//     textColor: "text-gray-300",
//   },
//   {
//     category: "Frontend Development",
//     skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
//     icon: <Globe className="h-12 w-12" />,
//     color: "from-blue-800 to-indigo-900",
//     textColor: "text-blue-200",
//   },
//   {
//     category: "Backend Development",
//     skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
//     icon: <Server className="h-12 w-12" />,
//     color: "from-green-800 to-teal-900",
//     textColor: "text-green-200",
//   },
//   {
//     category: "Databases & Cloud",
//     skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS"],
//     icon: <Database className="h-12 w-12" />,
//     color: "from-yellow-700 to-amber-900",
//     textColor: "text-yellow-200",
//   },
// ];

// const softSkills = [
//   { name: "Problem-Solving", icon: <Brain className="h-5 w-5" /> },
//   { name: "Teamwork", icon: <Zap className="h-5 w-5" /> },
//   { name: "Leadership", icon: <Zap className="h-5 w-5" /> },
//   { name: "Communication", icon: <Zap className="h-5 w-5" /> },
//   { name: "Adaptability", icon: <Zap className="h-5 w-5" /> },
//   { name: "Critical Thinking", icon: <Brain className="h-5 w-5" /> },
//   { name: "Attention to Detail", icon: <Cpu className="h-5 w-5" /> },
//   { name: "Time Management", icon: <Wrench className="h-5 w-5" /> },
// ];

// export default function Skills() {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   };

//   const softSkillVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const softSkillItem = {
//     hidden: { scale: 0.8, opacity: 0 },
//     show: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//       },
//     },
//   };

//   return (
//     <section
//       id="skills"
//       className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:from-primary dark:to-indigo-400">
//               Skills & Expertise
//             </span>
//           </h2>
//           <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
//             A well-rounded skill set blending technical proficiency and
//             strategic problem-solving to create impactful software solutions.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {technicalSkills.map((skillGroup, index) => (
//             <motion.div key={skillGroup.category} variants={item}>
//               <motion.div
//                 whileHover={{
//                   y: -10,
//                   transition: { type: "spring", stiffness: 300 },
//                 }}
//               >
//                 <Card className="h-full overflow-hidden border-0 shadow-lg rounded-xl">
//                   <div
//                     className={`bg-gradient-to-br ${skillGroup.color} p-6 flex justify-center`}
//                   >
//                     <div className={`${skillGroup.textColor}`}>
//                       {skillGroup.icon}
//                     </div>
//                   </div>
//                   <CardContent className="p-6 bg-white dark:bg-slate-800">
//                     <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
//                       {skillGroup.category}
//                     </h4>
//                     <ul className="space-y-2">
//                       {skillGroup.skills.map((skill) => (
//                         <li
//                           key={skill}
//                           className="flex items-center text-slate-700 dark:text-slate-300"
//                         >
//                           <span className="mr-2">•</span>
//                           <span>{skill}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
//             Soft Skills
//           </h3>
//           <motion.div
//             className="flex flex-wrap justify-center gap-3 md:gap-4"
//             variants={softSkillVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-50px" }}
//           >
//             {softSkills.map((skill) => (
//               <motion.div
//                 key={skill.name}
//                 variants={softSkillItem}
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { type: "spring", stiffness: 400 },
//                 }}
//               >
//                 <div className="px-5 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-full text-sm md:text-base font-medium shadow-md border border-slate-200 dark:border-slate-700 flex items-center gap-2">
//                   {skill.icon}
//                   {skill.name}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Server,
  Wrench,
  Cpu,
  Zap,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
    icon: <Code className="h-12 w-12" />,
    color: "bg-[#f8f4e3]",
    iconColor: "text-[#d4af37]",
  },
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
    icon: <Globe className="h-12 w-12" />,
    color: "bg-[#e8f4f8]",
    iconColor: "text-[#34495e]",
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
    icon: <Server className="h-12 w-12" />,
    color: "bg-[#f0f8f1]",
    iconColor: "text-[#2e8b57]",
  },
  {
    category: "Databases & Cloud",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS"],
    icon: <Database className="h-12 w-12" />,
    color: "bg-[#fff8e1]",
    iconColor: "text-[#ffa000]",
  },
];

const softSkills = [
  { name: "Problem-Solving", icon: <Brain className="h-5 w-5" /> },
  { name: "Teamwork", icon: <Zap className="h-5 w-5" /> },
  { name: "Leadership", icon: <Zap className="h-5 w-5" /> },
  { name: "Communication", icon: <Zap className="h-5 w-5" /> },
  { name: "Adaptability", icon: <Zap className="h-5 w-5" /> },
  { name: "Critical Thinking", icon: <Brain className="h-5 w-5" /> },
  { name: "Attention to Detail", icon: <Cpu className="h-5 w-5" /> },
  { name: "Time Management", icon: <Wrench className="h-5 w-5" /> },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const softSkillVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const softSkillItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section id="skills" className="luxury-section bg-[#fafafa] ">
      <div className="luxury-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="luxury-heading font-serif text-3xl font-bold mb-3">
            Skills & Expertise
          </h2>
          <div className="luxury-divider"></div>
          <p className="text-lg text-[#5d6d7e] max-w-2xl mx-auto">
            A well-rounded skill set blending technical proficiency and
            strategic problem-solving to create impactful software solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technicalSkills.map((skillGroup) => (
            <motion.div key={skillGroup.category} variants={item}>
              <motion.div
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Card className="luxury-card h-full">
                  <div
                    className={`${skillGroup.color} p-6 flex justify-center`}
                  >
                    <div className={`${skillGroup.iconColor}`}>
                      {skillGroup.icon}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-[#34495e] mb-4 font-serif">
                      {skillGroup.category}
                    </h4>
                    <ul className="space-y-2">
                      {skillGroup.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-[#5d6d7e]"
                        >
                          <span className="mr-2 text-[#d4af37]">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#34495e] mb-8 font-serif">
            Soft Skills
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            variants={softSkillVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {softSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={softSkillItem}
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                <div className="px-5 py-3 bg-white text-[#34495e] rounded-full text-sm md:text-base font-medium shadow-md border border-[#e6d7a7] flex items-center gap-2">
                  <span className="text-[#d4af37]">{skill.icon}</span>
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

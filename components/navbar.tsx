// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ThemeToggle } from "./theme-toggle";
// import { Menu, X, FileDown } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);

//       const sections = navLinks.map((link) => link.href.substring(1));
//       const currentPosition = window.scrollY + 300;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = document.getElementById(sections[i]);
//         if (section && section.offsetTop <= currentPosition) {
//           setActiveSection(sections[i]);
//           break;
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-blue-300"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//         <Link
//           href="#home"
//           className="text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors"
//         >
//           Aryan<span className="text-blue-700"> Patel</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`relative font-medium transition-all ${
//                 activeSection === link.href.substring(1)
//                   ? "text-blue-600"
//                   : "text-gray-700 hover:text-blue-500"
//               }`}
//             >
//               {link.name}
//               {activeSection === link.href.substring(1) && (
//                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//               )}
//             </Link>
//           ))}

//           <Button
//             asChild
//             variant="outline"
//             size="sm"
//             className="rounded-full border-blue-400 hover:border-blue-600"
//           >
//             <a href="/resume.pdf" download="Aryan_Patel_Resume.pdf">
//               <FileDown className="mr-2 h-4 w-4" />
//               Resume
//             </a>
//           </Button>

//           <ThemeToggle />
//         </nav>

//         {/* Mobile Navigation Toggle */}
//         <div className="flex items-center md:hidden">
//           <Button
//             asChild
//             variant="outline"
//             size="sm"
//             className="mr-2 rounded-full border-blue-400 hover:border-blue-600"
//           >
//             <a href="/resume.pdf" download="Aryan_Patel_Resume.pdf">
//               <FileDown className="h-4 w-4" />
//               <span className="sr-only">Download Resume</span>
//             </a>
//           </Button>

//           <ThemeToggle />
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsOpen(!isOpen)}
//             className="ml-2"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-blue-300">
//           <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className={`py-2 text-lg font-medium transition-all ${
//                   activeSection === link.href.substring(1)
//                     ? "text-blue-600"
//                     : "text-gray-700 hover:text-blue-500"
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) => link.href.substring(1));
      const currentPosition = window.scrollY + 300;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md border-b border-[#e6d7a7]"
          : "bg-transparent"
      }`}
    >
      <div className="luxury-container py-4 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold  font-serif ml-10">
          Aryan<span className="text-[#34495e]"> Patel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={link.href}
                className={`relative font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? "luxury-nav-link-active"
                    : "luxury-nav-link"
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#d4af37] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border-[#d4af37] text-[#b38728] hover:bg-[#fcf9ed] hover:border-[#b38728]"
            >
              <a href="/aaryan_resume.pdf" download="Aryan_Patel_Resume.pdf">
                <FileDown className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="mr-2 rounded-full border-[#d4af37] text-[#b38728] hover:bg-[#fcf9ed] hover:border-[#b38728]"
            >
              <a href="/resume.pdf" download="Aryan_Patel_Resume.pdf">
                <FileDown className="h-4 w-4" />
                <span className="sr-only">Download Resume</span>
              </a>
            </Button>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 text-[#34495e]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-[#e6d7a7]"
        >
          <div className="luxury-container py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`py-2 text-lg font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? "luxury-nav-link-active"
                      : "luxury-nav-link"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

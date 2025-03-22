// import Hero from "@/components/hero"
// import About from "@/components/about"
// import Skills from "@/components/skills"
// import Projects from "@/components/projects"
// import Contact from "@/components/contact"
// import ScrollToTop from "@/components/scroll-to-top"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-background">
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <ScrollToTop />
//     </main>
//   )
// }

import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

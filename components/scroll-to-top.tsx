// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { ArrowUp } from "lucide-react"

// export default function ScrollToTop() {
//   const [isVisible, setIsVisible] = useState(false)

//   const toggleVisibility = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true)
//     } else {
//       setIsVisible(false)
//     }
//   }

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     })
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", toggleVisibility)
//     return () => window.removeEventListener("scroll", toggleVisibility)
//   }, [])

//   return (
//     <div className="fixed bottom-8 right-8 z-50">
//       {isVisible && (
//         <Button
//           onClick={scrollToTop}
//           size="icon"
//           className="rounded-full shadow-lg luxury-gradient hover:opacity-90 transition-opacity"
//           aria-label="Scroll to top"
//         >
//           <ArrowUp className="h-5 w-5" />
//         </Button>
//       )}
//     </div>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={scrollToTop}
                size="icon"
                className="rounded-full shadow-lg luxury-gradient hover:opacity-90 transition-opacity"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

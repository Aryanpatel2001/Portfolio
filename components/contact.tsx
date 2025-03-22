// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
// import { toast } from "sonner";

// export default function Contact() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Message Sent!", {
//           description: "Your message has been sent successfully.",
//         });

//         // Reset form
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       } else {
//         toast.error("Error", {
//           description:
//             data.error || "Failed to send message. Please try again.",
//         });
//       }
//     } catch (error) {
//       toast.error("Error", {
//         description: "Something went wrong. Please try again later.",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 purple-teal-gradient mx-auto rounded-full"></div>
//           <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
//             Feel free to reach out if you're looking for a developer, have a
//             question, or just want to connect.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-semibold mb-6 purple-teal-text-gradient">
//               Contact Information
//             </h3>
//             <div className="space-y-6">
//               <Card className="border-none shadow-md hover-lift overflow-hidden">
//                 <CardContent className="p-6 flex items-start relative shimmer">
//                   <Mail className="h-5 w-5 text-primary mr-4 mt-0.5" />
//                   <div>
//                     <h4 className="font-medium mb-1">Email</h4>
//                     <a
//                       href="mailto:aryanpatel8044@gmail.com"
//                       className="text-foreground/80 hover:text-primary transition-colors"
//                     >
//                       aryanpatel8044@gmail.com
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="border-none shadow-md hover-lift overflow-hidden">
//                 <CardContent className="p-6 flex items-start relative shimmer">
//                   <Phone className="h-5 w-5 text-primary mr-4 mt-0.5" />
//                   <div>
//                     <h4 className="font-medium mb-1">Phone</h4>
//                     <a
//                       href="tel:+919723738044"
//                       className="text-foreground/80 hover:text-primary transition-colors"
//                     >
//                       +91 9723738044
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="border-none shadow-md hover-lift overflow-hidden">
//                 <CardContent className="p-6 flex items-start relative shimmer">
//                   <MapPin className="h-5 w-5 text-primary mr-4 mt-0.5" />
//                   <div>
//                     <h4 className="font-medium mb-1">Location</h4>
//                     <p className="text-foreground/80">
//                       Ahmedabad, Gujarat, India
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold mb-6 purple-teal-text-gradient">
//               Send Me a Message
//             </h3>
//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     placeholder="Your name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="border-primary/20 focus:border-primary"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Your email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="border-primary/20 focus:border-primary"
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="subject" className="text-sm font-medium">
//                   Subject
//                 </label>
//                 <Input
//                   id="subject"
//                   placeholder="Subject"
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="border-primary/20 focus:border-primary"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-medium">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   placeholder="Your message"
//                   rows={5}
//                   required
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="border-primary/20 focus:border-primary"
//                 />
//               </div>
//               <Button
//                 type="submit"
//                 className="w-full purple-teal-gradient hover:opacity-90 transition-opacity"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   <>
//                     <Send className="mr-2 h-4 w-4" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message Sent!", {
          description: "Your message has been sent successfully.",
        });

        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error", {
          description:
            data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="luxury-section bg-[#fafafa] mt-10">
      <div className="luxury-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="luxury-heading font-serif text-3xl font-bold">
            Get In Touch
          </h2>
          <div className="luxury-divider"></div>
          <p className="mt-4 text-[#5d6d7e] max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="luxury-subheading mb-6 font-serif text-2xl font-semibold">
              Contact Information
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-5 w-5 text-[#d4af37] mr-4 mt-0.5" />,
                  title: "Email",
                  content: (
                    <a
                      href="mailto:aryanpatel8044@gmail.com"
                      className="text-[#5d6d7e] hover:text-[#d4af37] transition-colors"
                    >
                      aryanpatel8044@gmail.com
                    </a>
                  ),
                },
                {
                  icon: (
                    <Phone className="h-5 w-5 text-[#d4af37] mr-4 mt-0.5" />
                  ),
                  title: "Phone",
                  content: (
                    <a
                      href="tel:+919723738044"
                      className="text-[#5d6d7e] hover:text-[#d4af37] transition-colors"
                    >
                      +91 9723738044
                    </a>
                  ),
                },
                {
                  icon: (
                    <MapPin className="h-5 w-5 text-[#d4af37] mr-4 mt-0.5" />
                  ),
                  title: "Location",
                  content: (
                    <p className="text-[#5d6d7e]">Ahmedabad, Gujarat, India</p>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="luxury-card shimmer-effect">
                    <CardContent className="p-6 flex items-start">
                      {item.icon}
                      <div>
                        <h4 className="font-medium mb-1 text-[#34495e]">
                          {item.title}
                        </h4>
                        {item.content}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="luxury-subheading mb-6 font-serif text-2xl font-semibold">
              Send Me a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-[#34495e]"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="luxury-input"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[#34495e]"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="luxury-input"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-[#34495e]"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="luxury-input"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#34495e]"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="luxury-input"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full luxury-gradient hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

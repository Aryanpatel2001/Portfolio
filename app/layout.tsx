// import type React from "react";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { Toaster } from "sonner";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Aryan Patel - Full Stack Developer",
//   description:
//     "Portfolio website of Aryan Patel, a Full Stack Developer and B.Tech IT Student",
//   generator: "v0.dev",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="light"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <Navbar />
//           {children}
//           <Toaster />
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// import "./globals.css";

import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Patel | Full Stack Developer",
  description:
    "Portfolio of Aryan Patel, a Full Stack Developer and B.Tech IT Student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        <Navbar />
        <main className="max-w-[1280px]  mx-auto">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

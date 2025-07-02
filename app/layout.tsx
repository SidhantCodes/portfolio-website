import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingIcon } from "@/components/index";

const outfit = Outfit({ subsets: ["latin"] });

const seoKeywords = [
  "Next.js Developer",
  "Next.js Web Developer",
  "Frontend Developer",
  "Full Stack Developer",
  "React and Next.js Expert",
  "JavaScript Developer",
  "TypeScript Developer",
  "Tailwind CSS Developer",
  "Web App Developer",
  "SSR and SSG Expert",
  "API Integration Specialist",
  "UI/UX Focused Developer",
  "Responsive Web Design",
  "Software Engineer Portfolio",
  "Freelance Web Developer",
  "Modern Web Development",
  "Progressive Web Apps (PWA)",
  "Cloud-Based Web Apps",
  "Scalable Web Applications",
  "JAMstack Developer",
  "SEO Optimized Websites Developer",
  "Passionate Web Developer",
  "VIT Web Developer",
  "AI/ML Enthusiast Developer",
  "Cloud Computing Developer",
  "Problem Solver in Tech",
  "Collaborative Software Engineer",
  "Technology Innovator",
  "VIT Vellore Developer",
  "Indian Software Developer",
  "Tech Student Developer India",
  "Student Developer Portfolio",
  "Next.js",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Git & GitHub",
  "REST API",
  "Vercel",
  "Node.js"
];


export const metadata: Metadata = {
  title: "Sidhant Mishra | NextJs Developer | Python Developer",
  description: "Sidhant Mishra is a final year B.Tech student at VIT, specializing in Frontend Web Development, AI/ML, and Cloud Computing. Passionate about tech-driven impact, he enjoys solving complex problems and collaborating on innovative projects. Always eager to learn and contribute, he is driven to build meaningful solutions with like-minded professionals.",
  keywords:  [
    "Sidhant",
    "Mishra",
    "Next.js Developer",
    "Next.js Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React and Next.js Expert",
    "JavaScript Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "Web App Developer",
    "SSR and SSG Expert",
    "API Integration Specialist",
    "UI/UX Focused Developer",
    "Responsive Web Design",
    "Software Engineer Portfolio",
    "Freelance Web Developer",
    "Modern Web Development",
    "Progressive Web Apps (PWA)",
    "Cloud-Based Web Apps",
    "Scalable Web Applications",
    "JAMstack Developer",
    "SEO Optimized Websites Developer",
    "Passionate Web Developer",
    "VIT Web Developer",
    "AI/ML Enthusiast Developer",
    "Cloud Computing Developer",
    "Problem Solver in Tech",
    "Collaborative Software Engineer",
    "Technology Innovator",
    "VIT Vellore Developer",
    "Indian Software Developer",
    "Tech Student Developer India",
    "Student Developer Portfolio",
    "Next.js",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Git & GitHub",
    "REST API",
    "Vercel",
    "Node.js"
  ],
  creator: "Sidhant Mishra",
  publisher: "Sidhant Mishra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.sidhantmishra.tech/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sidhant Mishra | NextJs Developer | Python Developer",
    description: "Sidhant Mishra is a final year B.Tech student at VIT, specializing in Frontend Web Development, AI/ML, and Cloud Computing. Passionate about tech-driven impact, he enjoys solving complex problems and collaborating on innovative projects. Always eager to learn and contribute, he is driven to build meaningful solutions with like-minded professionals.",
    url: "https://www.sidhantmishra.tech/",
    siteName: "Sidhant Mishra",
    images: [
      {
        url: "/images/s.png",
        width: 1024,
        height: 1024,
        alt: "Sidhant Mishra"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    "google": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <TooltipProvider delayDuration={100}>
          <Navbar />
          {children}
          <Footer />
          <FloatingIcon />
        </TooltipProvider>
      </body>
    </html>
  );
}

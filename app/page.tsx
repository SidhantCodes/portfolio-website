
"use client"
import { Hero, Projects, Paragraph } from "@/components"
import { aboutme } from "@/constants"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconHome, IconMessage, IconCode } from "@tabler/icons-react";
const Home = () => {
  const navItems = [
    {
      name: "About Me",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blogs",
      link: "https://medium.com/@mishrasidhant01",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    
  ];
  return (
    <div className="overflow-hidden relative w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <div id="aboutme" className="flex items-center justify-center mx-20 my-20">
        <Paragraph para={aboutme} />
      </div>
      <Projects />
    </div>
  )
}

export default Home

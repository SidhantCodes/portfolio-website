
"use client"
import { Hero, Projects, Paragraph } from "@/components"
import { aboutme } from "@/constants"
import { IconHome, IconMessage, IconCode } from "@tabler/icons-react";
const Home = () => {
    return (
    <div className="overflow-hidden relative w-full">
      <Hero />
      <div id="about" className="flex items-center justify-center mx-20 my-20">
        <Paragraph para={aboutme} />
      </div>
      <Projects />
    </div>
  )
}

export default Home


"use client"
import { Hero, Paragraph, ProjectGrid, WorkExp } from "@/components"
import { aboutme } from "@/constants"
const Home = () => {
    return (
    <div className="overflow-hidden relative w-full">
      <Hero />
      <div id="about" className="flex items-center justify-center mx-20 my-20">
        <Paragraph para={aboutme} />
      </div>
      <WorkExp />
      <ProjectGrid />
    </div>
  )
}

export default Home

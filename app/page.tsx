"use client"
import { Hero } from "@/components"

const Home = () => {
  return (
    <div className="overflow-hidden">
        <Hero />
        <ul className="px-6 list-disc pt-5 sm:p-10 space-y-4 text-neutral-600 dark:text-neutral-200 text-md sm:text-base ">
        <li>Pre-Final Year, pursuing B.Tech in Information Technology at Vellore Institute of Technology</li>
        <li>NextJs Enthusiast & Full Stack Developer</li>
        <li>Web3 & Crypto Enthusiast</li>
        <li>English, हिन्दी, Français, Español</li>
        <li>Currently learning ML and Data Science</li>
        <li>Continuously enhancing my skills in cloud computing, an area where I currently have limited expertise but am committed to learning and advancing.</li>
      </ul>
    </div>
  )
}

export default Home
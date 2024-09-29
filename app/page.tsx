
"use client"
import { Hero } from "@/components"
import { FaCode, FaCloud, FaLanguage, FaLaptopCode, FaBrain, FaRobot} from 'react-icons/fa'

const Home = () => {
  const items = [
    {
      icon: <FaLaptopCode />,
      text: "Pre-Final Year, pursuing B.Tech in Information Technology at Vellore Institute of Technology"
    },
    {
      icon: <FaCode />,
      text: "NextJs Enthusiast & Full Stack Developer"
    },
    {
      icon: <FaBrain />,
      text: "Data Science Aficionado"
    },
    {
      icon: <FaRobot />,
      text: "Currently learning about Generative AI and Computer Vision"
    },
    {
      icon: <FaCloud />,
      text: "Proactively learning cloud computing."
    },
    {
      icon: <FaLanguage />,
      text: "English, हिन्दी, Français, Español"
    }
  ]

  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="px-6 pt-5 sm:p-10 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 p-1 rounded-md shadow-md">
            {item.icon}
            <span className="text-neutral-600 dark:text-neutral-200 text-md sm:text-base">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

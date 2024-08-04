// "use client"
// import { Hero } from "@/components"

// const Home = () => {
//   return (
//     <div className="overflow-hidden">
//         <Hero />
//         <ul className="px-6 list-disc pt-5 sm:p-10 space-y-4 text-neutral-600 dark:text-neutral-200 text-md sm:text-base ">
//         <li>Pre-Final Year, pursuing B.Tech in Information Technology at Vellore Institute of Technology</li>
//         <li>NextJs Enthusiast & Full Stack Developer</li>
//         <li>Data Science Aficionado</li>
//         <li>Currently learning about Generative AI and working with Large Language Models</li>
//         <li>Proactively learning cloud computing.</li>
//         <li>English, हिन्दी, Français, Español</li>
//       </ul>
//     </div>
//   )
// }

// export default Home

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
      text: "Currently learning about Generative AI and working with Large Language Models"
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

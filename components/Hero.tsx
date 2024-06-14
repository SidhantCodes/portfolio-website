import Image from "next/image";
import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect"

const Hero = () => {
  const words = [
    {
      text: "Hi",
      className: "text-[44px] sm:text-[65px]",
    },
    {
      text: "I'm",
      className: "text-[44px] sm:text-[65px]",
    },
    {
      text: "Sidhant",
      className: "text-[44px] sm:text-[65px]",
    },
    {
      text: "Mishra",
      className: "text-blue-500 dark:text-blue-500 text-[44px] sm:text-[65px]",
    },
  ];
  return (

    <div className="flex flex-col items-center justify-center h-[40rem] -m-16">
      <TypewriterEffect words={words} />
      {/* <p className=" ">
        Full Stack Developer. Currently learning Data Science.
      </p> */}

      <ul className="px-4 mt-12 pt-5 space-y-4 text-neutral-600 dark:text-neutral-200 text-md sm:text-base ">
        <li>- Junior, pursuing B.Tech in Information Technology at Vellore Institute of Technology</li>
        <li>- NextJs Enthusiast & Full Stack Developer</li>
        <li>- Web3 & Crypto Enthusiast</li>
        <li>- English, हिन्दी, Français, Español</li>
        <li>- Currently learning ML and Data Science</li>
        <li>- Continuously enhancing my skills in cloud computing, an area where I currently have limited expertise but am committed to learning and advancing.</li>
      </ul>
    </div>

  )
}

export default Hero
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

      className: "text-blue-700 dark:text-blue-700 text-[44px] sm:text-[65px]",
    },
  ];
  return (

    <div className="flex flex-col items-center justify-center h-80 -m-20">
      <TypewriterEffect words={words} />
    </div>

  )
}

export default Hero
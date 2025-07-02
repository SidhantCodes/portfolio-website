"use client"
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const fadeStart = heroHeight * 0.05;
      const fadeEnd = heroHeight * 0.4;
      
      let opacity = 1;
      if (scrollY > fadeStart) {
        opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }
      
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div 
      id="home" 
      className="flex flex-col items-center justify-center h-screen"
      style={{ opacity: scrollOpacity }}
    >
      <div className="fixed top-0 left-0 w-full h-[200vh] z-[-1] pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b" />
      </div>
      <BackgroundGradientAnimation>
      <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent text-6xl lg:text-9xl drop-shadow-2xl text-white">
          Sidhant Mishra
        </p>
      </div>
      <p className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center w-screen text-gray-400 sm:bottom-10 sm:left-10 sm:translate-x-0 sm:text-left">
        Explore below
      </p>

      </BackgroundGradientAnimation>
    </div>

  )
}

export default Hero
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/utils/cn"
import { navlinks, socials } from "@/constants";
import Hamburger from "./Hamburger";
import { renderIcon, scrollToSection } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all",
        scrolled ? "backdrop-blur-lg shadow-sm border-b border-white/20" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between h-16">
          <nav className="flex items-center">
            <ul className="flex space-x-4 sm:space-x-6">
              {navlinks.map(item => (
                <li key={item.url} className="relative group">
                  <p
                    onClick={() => scrollToSection(item.url)}
                    className="cursor-pointer text-white font-medium transition-colors"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </p>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            {socials.map(item => (
              <Link key={item.key} href={item.url} className="transition-colors">
                {renderIcon(item.name,
                  `text-white h-7 w-7 
                  p-1 rounded-lg 
                  transition-all duration-300 ease-in-out 
                  hover:bg-purple-500 hover:shadow-md
                  cursor-pointer
                  `)}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden justify-between items-center h-16">
          <Hamburger />
        </div>
      </div>
    </header>
  )
}

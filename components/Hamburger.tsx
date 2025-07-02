'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navlinks, socials } from '@/constants'
import { renderIcon, scrollToSection } from '@/lib/utilities'

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (url: string) => {
    setIsOpen(false)
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.open(url, '_blank')
    } else {
      scrollToSection(url)
    }
  }

  const handleSocialClick = (url: string) => {
    setIsOpen(false)
    window.open(url, '_blank')
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 z-[100] cursor-pointer"
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        title="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between" aria-hidden="true">
          <span
            className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span
            className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="nav-menu"
            role="navigation"
            aria-label="Main navigation"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(25px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-screen h-screen z-[90] flex flex-col justify-between"
            style={{
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(15px) saturate(180%)',
              WebkitBackdropFilter: 'blur(15px) saturate(180%)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex-grow flex items-center justify-center">
              <nav className="text-white text-2xl space-y-8 text-center w-full px-6">
                {navlinks.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.url)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="block hover:text-pink-500 transition-colors text-center w-full"
                    role="menuitem"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Social Icons Row */}
            <div className="flex justify-center space-x-6 pb-8">
              {socials.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleSocialClick(item.url)}
                  aria-label={item.name}
                  className="text-white hover:text-pink-500 transition-colors"
                >
                  {renderIcon(item.key, 'h-7 w-7')}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

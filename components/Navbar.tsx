'use client'
import { navlinks } from "@/constants"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className={`flex gap-5 my-16 mx-16 text-lg items-center justify-center transition-colors`}>
      {navlinks.map((link) => (
        <Link key={link.url} href={link.url} className={`${pathname===link.url ? 'white' : 'text-gray-400'}`}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
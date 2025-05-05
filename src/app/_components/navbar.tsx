"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/writings", label: "Writing" },
    { href: "/reading", label: "Reading" },
  ];

  return (
    <div className='w-full flex justify-center md:px-32 py-5 md:justify-start sticky top-0 text-sm z-50'>
      <div className='border border-neutral-800/50 rounded-lg p-1 relative backdrop-blur-md bg-neutral-900/60 shadow-lg space-x-1'> 
        {navLinks.map((link) => (
          <button 
            key={link.href}
            className={`py-1 px-2 tracking-tight font-sans rounded-lg transition-colors ${
              pathname === link.href 
                ? 'text-white bg-neutral-800/95' 
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar
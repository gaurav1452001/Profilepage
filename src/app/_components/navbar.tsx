"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-center md:px-24 py-5 md:justify-start text-white sticky top-1 text-sm z-50'>
      <div className='border-neutral-200 rounded-lg p-1 relative backdrop-blur-md bg-[#e1e0e0] shadow-md border'>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">About</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Projects</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Experience</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Writing</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Reading</Link></button>
      </div>

    </div>
  )
}

export default Navbar
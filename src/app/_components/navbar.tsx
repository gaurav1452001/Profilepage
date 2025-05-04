"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full flex justify-between items-center text-white sticky top-4 text-sm'>
      <div className='border-neutral-200 rounded-lg p-1 relative backdrop-blur-md bg-[#e1e0e0] shadow-md border'>
        <div></div>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">About</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Projects</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Experience</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Writing</Link></button>
        <button className='text-neutral-600  hover:text-neutral-900 py-1 px-2 tracking-tight font-sans hover:bg-neutral-300 rounded-lg'><Link href="/">Reading</Link></button>
      </div>
      <div className='hidden md:flex gap-4 text-neutral-200'>
        <Link href="https://github.com/gaurav1452001" target="_blank" >Github</Link>
        <Link href="https://x.com/Gdotkumar145" target="_blank" >Twitter</Link>
        <Link href="/" target="_blank">Resume</Link>
      </div>

    </div>
  )
}

export default Navbar
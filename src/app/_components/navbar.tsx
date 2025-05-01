"use client"
import Link from 'next/link'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full flex justify-between items-center  text-white sticky top-20 text-sm'>
        
        <div className='border-neutral-200 rounded-lg p-1 relative backdrop-blur-md bg-white/70 shadow-md border'>
            <div></div>
            <button className='text-neutral-400 hover:text-neutral-900 py-1 px-2 tracking-tight font-sans'><Link href="/">About</Link></button>
            <button className='text-neutral-400 hover:text-neutral-900 py-1 px-2 tracking-tight font-sans'><Link href="/">Projects</Link></button>
            <button className='text-neutral-400 hover:text-neutral-900 py-1 px-2 tracking-tight font-sans'><Link href="/">Experience</Link></button>
            <button className='text-neutral-400 hover:text-neutral-900 py-1 px-2 tracking-tight font-sans'><Link href="/">Writing</Link></button>
            <button className='text-neutral-400 hover:text-neutral-900 py-1 px-2 tracking-tight font-sans'><Link href="/">Reading</Link></button>
        </div>
        <div>
            <Link href="https://github.com/gaurav1452001">Github</Link>
            <Link href="https://x.com/Gdotkumar145">Twitter</Link>
            <Link href="/">Resume</Link>
        </div>
    </div>
  )
}

export default Navbar
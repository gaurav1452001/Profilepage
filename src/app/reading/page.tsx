"use client"
import React from 'react'
import Navbar from '../_components/navbar'
import { Readings } from "@/lib/reading"
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#111010]">
      <Navbar />
      <main className="px-6 md:px-10 lg:px-14 py-16  mx-auto">
        <header className="mb-24">
          <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 font-serif">reading</h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A collection of books I'm currently reading or have read. I don't read often, but I try to read what interests me the most.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Readings.map((reading) => (
            <div
              key={reading.id}
              className="group h-full w-full overflow-hidden rounded-lg bg-neutral-900 transition-colors focus-within:bg-neutral-950 hover:bg-neutral-950"
            >
              <div className="flex gap-12 w-full flex-col justify-between h-full">

                <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
                  {reading.status === "Reading" ? (
                    <div className="bg-[#f9e1a4] text-[#885d37] inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                      <span className="text-rose-900">Reading</span>
                    </div>
                  ) : (
                    <div className="bg-[#b5efc9] text-[#488260] inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                      <span>Read</span>
                    </div>
                  )}
                  <a
                    href={reading.link}
                    target="_blank"
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 group-focus-within:bg-white group-focus-within:text-neutral-900 group-focus-within:shadow-skeuo cursor-alias group-hover:bg-white group-hover:text-neutral-900 group-hover:shadow-skeuo"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="grid grow grid-cols-2 items-end gap-6 px-7 pb-10">
                  <Image
                    src={reading.imageUrl}
                    alt={reading.title}
                    width={300}
                    height={400}
                    className="rounded shadow-lg transition-transform group-focus-within:-rotate-3 group-focus-within:scale-110 group-focus-within:shadow-xl group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-xl"
                  />
                  <div className="tracking-tight py-2">

                    <h3 className="mt-3 line-clamp-3 md:line-clamp-2 xl:line-clamp-3 text-white text-lg mb-1">{reading.title}</h3>
                    <span className="text-neutral-400">{reading.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main >
    </div >
  )
}

export default ProjectsPage

"use client"
import React from 'react'
import Navbar from '../_components/navbar'
import {experienceList} from "@/lib/experience"
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'


const ExperiencePage = () => {
    return (
        <div className="min-h-screen bg-[#111010]">
            <Navbar />
            <main className="px-6 md:px-10 lg:px-36 py-16  mx-auto">
                <header className="mb-24">
                    <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 font-serif">experience</h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Internships and Job experiences.
                    </p>
                </header>

                <div className="space-y-16">
                    {experienceList.map((experience) => (
                        <div 
                            key={experience.id} 
                            className="group p-3.5 grid md:grid-cols-2 gap-12 items-center bg-neutral-900"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-neutral-900">
                                <img
                                    src={experience.imageUrl}
                                    alt={experience.companyName}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            
                            <div className="xl:space-y-6 ">
                                <h2 className="text-lg lg:text-3xl font-semibold text-white font-serif">
                                    {experience.role}
                                </h2>
                                <p className="text-neutral-400 leading-relaxed text-sm lg:text-lg">
                                    {experience.roleDescription}
                                </p>
                                
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {experience.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-1.5 bg-[#1c1b1b] text-neutral-400 text-sm lg:text-lg rounded-full border border-neutral-800/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 pt-3 md:pt-4 lg:pt-8 text-sm lg:text-lg">
                                    <Link 
                                        href={experience.link} 
                                        target="_blank"
                                        className="group/link inline-flex items-center gap-1 text-white font-medium"
                                    >
                                        Visit site 
                                        <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default ExperiencePage

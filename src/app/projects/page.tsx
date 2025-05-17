"use client"
import React from 'react'
import Navbar from '../_components/navbar'
import { projectsList } from "@/lib/projects"
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-[#111010]">
            <Navbar />
            <main className="px-6 md:px-10 lg:px-14 py-16  mx-auto">
                <header className="mb-24">
                    <h1 className="text-4xl md:text-8xl font-bold text-white mb-6 font-serif">projects</h1>
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        A collection of projects I&apos;ve built. Most of these were built for learning and fun.
                    </p>
                </header>

                <div className="space-y-16">
                    {projectsList.map((project) => (
                        <div 
                            key={project.id} 
                            className="group grid md:grid-cols-2 gap-12 items-center bg-neutral-900"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden rounded-xl bg-neutral-900">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            
                            <div className="space-y-6 ">
                                <h2 className="text-3xl font-semibold text-white font-serif">
                                    {project.title}
                                </h2>
                                <p className="text-neutral-400 leading-relaxed text-lg">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="px-4 py-1.5 bg-[#1c1b1b] text-neutral-400 text-sm rounded-full border border-neutral-800/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 pt-8">
                                    <Link 
                                        href={project.livelink} 
                                        target="_blank"
                                        className="group/link inline-flex items-center gap-1 text-white font-medium"
                                    >
                                        Visit site 
                                        <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </Link>
                                    <Link 
                                        href={project.githublink} 
                                        target="_blank"
                                        className="group/link inline-flex items-center gap-1 text-white font-medium"
                                    >
                                        View source 
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

export default ProjectsPage

"use client"
import Navbar from "./_components/navbar";
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';
import React from "react";
import { projectsList } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import UnicornScene from "unicornstudio-react";


export default function Home() {
  return (
    <>
      <Navbar />

      {/* Static Background UnicornScene */}
      <div className="fixed inset-0 -z-10 h-[110%]">
        <UnicornScene
          projectId="vg9tsFcELkEdynxtrh8O"
          placeholder="/back3.jpeg"
        />
      </div>

      <div className="flex flex-col gap-8 mt-16 md:px-7">
        {/* Removed UnicornScene from here */}
        {/* Fixed Left Section */}
        <div className="px-6 sm:px-16 md:px-24">
          <div className="space-y-6 text-neutral-100">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
              Hey, I&apos;m Gaurav Kumar
            </h1>
            <p className="leading-relaxed text-base sm:text-lg">
              Web and Mobile Developer currently occupied with writing code and building new stuff over the Internet. Always eager to work and commit to learning more and better. I also share all the books that I have read, music that I listen to and writings that I have on the Internet. Not a lot of those, but I&apos;m working on it.
            </p>
            <div className="pt-6 border-t border-neutral-200">
              <h2 className="text-2xl font-semibold mb-4">Contact: +91 8709950990</h2>
              <div className="flex flex-row items-center gap-4 mb-6">
                <Link href="https://github.com/gaurav1452001" target="_blank" ><Github className="w-7 hover:scale-110 hover:bg-neutral-900 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200" /></Link>

                <Link href="https://x.com/Gdotkumar145" target="_blank" ><Twitter className="w-7 hover:scale-110 hover:bg-neutral-900 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200" /></Link>

                <Link href="http://www.linkedin.com/in/gaurav-kumar-966a37251" target="_blank" ><Linkedin className="w-7 hover:scale-110 hover:bg-neutral-900 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200" /></Link>

                <Link href="https://leetcode.com/u/gaurav1452001/" target="_blank">
                  <img className=" invert w-7 hover:scale-110 hover:bg-neutral-100 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200" width="48" height="48" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/48/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-regular-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-regular-tal-revivo" />
                </Link>

                <button className="ml-7 gap-2 flex flex-row border-2 border-white px-3 font-semibold py-1 text-sm text-white rounded-2xl hover:bg-neutral-900 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
                  <ArrowDownToLine className="w-4" />
                  <Link target="_blank" href="https://drive.google.com/file/d/1xViO_1n8lSI1SIzDIwH5jcV0iJwiIoM0/view?usp=sharing">Resume</Link>
                </button>
              </div>
              <div className="space-y-2">
                <p className="transition-colors">
                  gaurav1452001@gmail.com
                </p>
                <p className="transition-colors">Visakhapatnam, Andhra Pradhesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Right Section */}
        <div className="w-full">
          {/* Projects Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-neutral-100 flex justify-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 px-6 sm:px-16 md:px-24 justify-center  gap-10 flex-wrap">
              {projectsList.map((project) => (
                <div key={project.id} className="pb-1 self-start text-center bg-white border-gray-700 rounded-lg">
                  <div className="aspect-[4/3] relative overflow-hidden bg-neutral-900">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill={true}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Right side - Project Info */}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-neutral-900 group-hover:text-neutral-700 text-left">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-normal text-neutral-600 mb-6 leading-relaxed flex-grow text-left">
                      {project.description}
                    </p>

                    <div className="flex gap-4 mb-4">
                      <Link
                        href={project.livelink}
                        target="_blank"
                        className="text-neutral-600 hover:text-neutral-900 text-sm md:text-normal transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live
                      </Link>
                      <Link
                        href={project.githublink}
                        target="_blank"
                        className="text-neutral-600 hover:text-neutral-900 text-sm md:text-normal transition-colors flex items-center gap-2 hover:"
                      >
                        <Github className="h-5 w-5" />
                        Github
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-neutral-200 text-neutral-600 rounded-full text-xs md:text-sm font-medium transition-colors hover:bg-neutral-500 hover:text-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

"use client"
import Navbar from "./_components/navbar";
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import React from "react";
import { projectsList } from "@/lib/projects";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="md:px-16 py-5">
        <Navbar />
        <div className="flex flex-col gap-8 mt-16">
          {/* Fixed Left Section */}
          <div className="px-6 sm:px-16 md:px-24">
            <div className="space-y-6 text-neutral-100">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">
                Gaurav Kumar
              </h1>
              <p className="leading-relaxed text-base sm:text-lg">
                Currently occupied with writing code and learning new stuff over the Internet. I also share all the books that I read and the writings that I have on the Internet. Not a lot of those, but I&apos;m working on it.
              </p>
              <div className="pt-6 border-t border-neutral-200">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <div className="flex flex-row items-center gap-4 mb-6">
                  <Link href="https://github.com/gaurav1452001" target="_blank" ><Github className="w-7 hover:scale-110" /></Link>
                  <Link href="https://x.com/Gdotkumar145" target="_blank" ><Twitter className="w-7 hover:scale-110" /></Link>
                  <Link href="http://www.linkedin.com/in/gaurav-kumar-966a37251" target="_blank" ><Linkedin className="w-7 hover:scale-110" /></Link>
                </div>
                <div className="space-y-2">
                  <p className="transition-colors">gaurav1452001@gmail.com</p>
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
              <div className="flex justify-center items-center gap-20 flex-wrap">
                {projectsList.map((project) => (
                  <div key={project.id} className="max-w-[80%] md:max-w-[40%] max-h-max pb-3 self-start text-center bg-white border-gray-700 rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]">
                    {/* Left side - Image */}
                    <div>

                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-contain h-auto rounded-t-lg brightness-150"
                      />
                    </div>

                    {/* Right side - Project Info */}
                    <div className="flex flex-col flex-grow p-6">
                      <h3 className="text-4xl font-semibold mb-3 text-neutral-900 group-hover:text-neutral-700 text-left">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 mb-6 leading-relaxed flex-grow text-left">
                        {project.description}
                      </p>

                      <div className="flex gap-4 mb-4">
                        <Link
                          href={project.livelink}
                          target="_blank"
                          className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
                        >
                          <ExternalLink className="h-5 w-5" />
                          Live
                        </Link>
                        <Link
                          href={project.githublink}
                          target="_blank"
                          className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
                        >
                          <Github className="h-5 w-5" />
                          Github
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-neutral-200 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
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
      </main>
    </>
  );
}

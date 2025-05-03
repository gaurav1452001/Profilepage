"use client"
import Navbar from "./_components/navbar";
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
import React from "react";
import { projectsList } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="px-16 py-5">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          {/* Fixed Left Section */}
          <div className="lg:w-1/3 lg:fixed lg:max-w-sm">
            <div className="space-y-6 text-neutral-100">
              <div className="text-8xl font-bold  ">
                Gaurav Kumar
              </div>
              <p className="leading-relaxed text-lg">
                Hey there, I&apos;m Gaurav. A young developer currently occupied with writing code and learning new stuff over the Internet. I also share all the books that I read and the writings that I have on the Internet. Not a lot of those, but I&apos;m working on it.
              </p>
              <div className="pt-6 border-t border-neutral-200">
                <h2 className="text-xl font-semibold mb-4 ">Contact</h2>
                <div className="space-y-2">
                  <p className=" transition-colors">gaurav1452001@gmail.com</p>
                  <p className=" transition-colors">Visakhapatnam, Andhra Pradhesh, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Right Section */}
          <div className="lg:w-2/3 lg:ml-[33.33%] pt-8 lg:pt-0">
            {/* Projects Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-neutral-900">Projects</h2>
              <div className="space-y-8">
                {projectsList.map((project) => (
                  <div key={project.id} className="bg-white p-4 sm:px-5 sm:py-8 rounded-xl shadow-sm border border-neutral-200 hover:border-neutral-300 transition-all duration-300 group flex flex-col md:flex-row gap-6">
                    {/* Left side - Image */}
                    <div className="relative w-full md:w-2/5 h-64 overflow-hidden rounded-lg flex-shrink-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Right side - Project Info */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-4xl font-semibold mb-3 text-neutral-900 group-hover:text-neutral-700">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 mb-6 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="flex gap-4 mb-4">
                        <Link
                          href={project.livelink}
                          target="_blank"
                          className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
                        >
                        <ExternalLink className="h-5 w-5" />
                          Live Demo
                        </Link>
                        <Link
                          href={project.githublink}
                          target="_blank"
                          className="text-neutral-600 hover:text-neutral-900 transition-colors flex items-center gap-2"
                        >
                        <Github className="h-5 w-5" />
                          Source Code
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
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

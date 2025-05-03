"use client"
import Navbar from "./_components/navbar";

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
                {/* Project Card */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-neutral-200 hover:border-neutral-300 transition-all duration-300 group">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900 group-hover:text-neutral-700">Project Name</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Description of the project and your role in it. Technologies used and key achievements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">React</span>
                    <span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">TypeScript</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-neutral-900">Experience</h2>
              <div className="space-y-8">
                {/* Experience Card */}
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-neutral-200 hover:border-neutral-300 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900">Company Name</h3>
                  <p className="text-neutral-600 mb-4 font-medium">Position • Duration</p>
                  <ul className="space-y-3 text-neutral-600">
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400">•</span>
                      <span>Key achievement or responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400">•</span>
                      <span>Another notable accomplishment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-neutral-400">•</span>
                      <span>Technical contribution or project impact</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

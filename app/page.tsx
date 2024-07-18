'use client'
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useRef } from 'react';
import projects from "@/data/projects";


export default function Home() {
  
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mt-[--header-height] h-screen max-w-4xl m-auto">
      <Navbar homeRef={homeRef} projectRef={projectsRef} blogRef={blogRef} contactRef={contactRef}/>
      <div ref={homeRef} className="p-4 lg:p-10 border-b border-black dark:border-white">
        <h1 className="dark:text-white text-4xl md:text-5xl lg:text-7xl pb-16 pt-16 text-center font-mono ">Hey, I'm Zach!</h1>
        <h2 className="dark:text-white text-1xl md:text-3xl lg:text-4xl pb-10 text-center font-mono">I'm a software developer, with a speciality in quantum computing</h2>

        <div className="justify-center items-center flex mt-5 pb-20">
          <button className="mx-2 px-4 py-1 lg:text-lg rounded-full border-2 border-black dark:border-white font-mono dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-slate-800"
            onClick={() => {contactRef.current?.scrollIntoView({
              behavior: 'smooth',
            }); }}>
            Contact
          </button>
          <button className="mx-2 px-4 py-1 lg:text-lg rounded-full border-2 border-black dark:border-white font-mono dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-slate-800">
            Resume
          </button>
        </div>

        {/* <p className="dark:text-white text-l font-mono text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, quam id tincidunt tincidunt, nunc nisl ultrices nunc, id lacinia nunc nunc id velit. Nulla facilisi. Sed auctor, nunc id aliquet luctus, nisl nunc tincidunt nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc.</p> */}
      </div>

      <div ref={projectsRef} id="projects" className="py-4 lg:py-10 scroll-m-10 border-b border-black dark:border-white">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">
          <a href="#Projects">Projects</a>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      

      <div ref={blogRef} id="blog" className="p-4 lg:p-10 scroll-m-10 border-b border-black  dark:border-white">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">
          <a href="#Blog">Blog</a>
        </h1>
      </div>
      

      <div ref={contactRef} id="contact" className="p-4 lg:p-10 scroll-m-10 h-screen max-w-screen-md mx-auto">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">
          <a href="#Contact">Contact</a>
        </h1>
        <p className="font-mono mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want to chat? Send me a message below.</p>
          <form action="#" className="space-y-8 m-2">
            <div>
              <label htmlFor="email" className="font-mono block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="font-mono shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="font-mono block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="font-mono block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Something amazing" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="font-mono block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
              <textarea id="message" rows={4} className="font-mono block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Message..."></textarea>
            </div>
            <button type="submit" className="font-mono py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
      </div>
    
    

      <footer className="bg-black ">
        <button className="fixed right-5 bottom-5 dark:text-white p-3 rounded-md bg-gray-200 dark:bg-gray-700" onClick={() => {
          window.scroll({
            top: 0,
            behavior: 'smooth'
          });
        }}>
          <ArrowUpIcon className="size-5" aria-label="to top"/>
        </button>
      </footer>
    </div>
  );
}
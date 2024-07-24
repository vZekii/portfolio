'use client'
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";
import Blog from "@/components/Blog";


export default function Home() {

  return (
    <div className="">
      <Navbar />
      <div id="home" className="p-4 lg:p-10 border-b border-black dark:border-white">
        <h1 className="dark:text-white text-4xl md:text-5xl lg:text-7xl pb-16 pt-16 text-center font-mono font-extrabold">Hey, I'm Zach!</h1>
        <h2 className="dark:text-white text-1xl md:text-3xl lg:text-4xl pb-10 text-center font-mono">I'm a <span className="text-primary-700 font-semibold">software developer</span>, with a speciality in <span className="text-accent-700 italic">quantum computing</span></h2>
        <div className="justify-center items-center flex mt-5 pb-20">
          <a href="https://www.linkedin.com/in/zachclare" target="_blank" rel="noopener noreferrer" className="mx-2 px-4 py-1 lg:text-lg rounded-full border-2 border-black dark:border-white font-mono dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-slate-800">
            Resume
          </a>
        </div>
      </div>

      <div id="projects" className="py-4 lg:py-10 scroll-m-10 border-b border-black dark:border-white">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">
          <a href="#Projects">Projects</a>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      

      <div id="blog" className="py-4 lg:py-10 scroll-m-10">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">
          <a href="#Blog">Blog</a>
          <Blog />
        </h1>
      </div>
      
    </div>
  );
}
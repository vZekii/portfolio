'use client'
import Image from "next/image";
import { CubeIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/ProjectCard";
import { useRef } from 'react';


export default function Home() {

  const projectsRef = useRef(null);

  const projects = [
    {
      "id": 1,
      "title": "Smartwardrobe",
      "description": "A mobile application built with React Native that utilises a custom Deep Learning algorithm to suggest outfits based on what the user has scanned.",
      "image": "/images/image.png",
      "link": "/project1"
    },{
      "id": 2,
      "title": "Project 2",
      "description": "This is a description of project 2",
      "image": "/images/image.png",
      "link": "/project2"
    },{
      "id": 3,
      "title": "Project 3",
      "description": "This is a description of project 3",
      "image": "/images/image.png",
      "link": "/project3"
    },{
      "id": 4,
      "title": "Project 4",
      "description": "This is a description of project 4",
      "image": "/images/image.png",
      "link": "/project4"
    }
  ];

  return (
    <div className="mt-[--header-height] h-screen max-w-7xl m-auto">
      <Navbar projectRef={projectsRef} />
      <div className="p-4 lg:p-10 border-b border-black border-dashed dark:border-white">
        <h1 className="dark:text-white text-4xl md:text-5xl lg:text-7xl pb-16 pt-16 text-center font-mono ">Hey, I'm Zach!</h1>
        <h2 className="dark:text-white text-1xl md:text-3xl lg:text-4xl pb-10 text-center font-mono">I'm a software developer, with a speciality in quantum computing</h2>

        <div className="justify-center items-center flex mt-5 pb-20">
          <button className="mx-2 px-4 py-1 lg:text-lg rounded-full border-2 border-black dark:border-white font-mono dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-slate-800">
            Contact
          </button>
          <button className="mx-2 px-4 py-1 lg:text-lg rounded-full border-2 border-black dark:border-white font-mono dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-slate-800">
            Resume
          </button>
        </div>

        {/* <p className="dark:text-white text-l font-mono text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, quam id tincidunt tincidunt, nunc nisl ultrices nunc, id lacinia nunc nunc id velit. Nulla facilisi. Sed auctor, nunc id aliquet luctus, nisl nunc tincidunt nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc. Sed euismod, nunc id aliquam aliquam, nunc nunc aliquam nunc, id aliquam nunc nunc ac nunc.</p> */}
      </div>

      <div ref={projectsRef} className="p-4 lg:p-10 scroll-m-10">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="p-4 lg:p-10">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="p-4 lg:p-10">
        <h1 className="text-3xl font-mono pb-5 text-center dark:text-white">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
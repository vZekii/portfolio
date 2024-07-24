'use client'
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { allPosts, Post } from "contentlayer/generated";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useRef } from 'react';
import projects from "@/data/projects";

function BlogEntry(post: Post) {
  return (
    <a href={post.url} className="my-4 p-2 hover:bg-slate-700 block rounded-lg transition-colors">
      <div className="flex justify-between items-center">
        <h2 className="text-xl dark:text-white font-mono">
          {post.title}
        </h2>
        <time dateTime={post.date} className="block mb-2 text-sm text-gray-700 dark:text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        </time>
      </div>
      
      <div className="text-sm text-left dark:text-gray-400">
        {post.summary}
      </div>

      
    </a>
  );

}

function Blogs() {
  return (
    <div>
      <ul>
        {allPosts.map((post) => (
          <BlogEntry key={post.url} {...post} />
        ))}
      </ul>
    </div>
  );
}

export default function Home() {

  return (
    <div className="">
      <Navbar />
      <div id="home" className="p-4 lg:p-10 border-b border-black dark:border-white">
        <h1 className="dark:text-white text-4xl md:text-5xl lg:text-7xl pb-16 pt-16 text-center font-mono ">Hey, I'm Zach!</h1>
        <h2 className="dark:text-white text-1xl md:text-3xl lg:text-4xl pb-10 text-center font-mono">I'm a <span className="text-primary-700 font-semibold">software developer</span>, with a speciality in <span className="text-accent-700 italic">quantum computing</span></h2>

        <div className="justify-center items-center flex mt-5 pb-20">
          <button className="mx-2 px-4 py-1 lg:text-lg rounded-full border-2 border-black dark:border-white font-mono dark:text-white hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-slate-800">
            Resume
          </button>
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
          <Blogs />
        </h1>
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
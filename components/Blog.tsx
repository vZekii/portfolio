import { allPosts, Post } from "contentlayer/generated";
import React from "react";


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
  
  function Blog() {
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

export default Blog;
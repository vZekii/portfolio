'use client'
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    const [isScrollUpVisible, setIsScrollUpVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsScrollUpVisible(true);
            } else {
                setIsScrollUpVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="border-t border-gray-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
            <div>
                <div className="flex justify-center items-center mt-10">
                    <a href="https://github.com/vzekii" target="_blank" rel="noopener noreferrer" className="p-2 mx-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Github">
                        <svg role="img" className="dark:fill-white size-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    <a href="mailto:zach7505@gmail.com" target="_blank" className="p-2 mx-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="zach7505 (at) gmail (dot) com">
                        <EnvelopeIcon className="dark:text-white size-7" />
                    </a>
                    <a href="https://www.linkedin.com/in/zachclare/" target="_blank" rel="noopener noreferrer" className="p-2 mx-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Github">
                        <svg role="img" className="dark:fill-white size-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4 pb-3">
                <p className="flex text-sm dark:text-white font-mono text-center">© Zach Clare 2024</p>
            </div>

            {isScrollUpVisible && (
                <button className="fixed right-5 bottom-5 dark:text-white p-3 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" onClick={() => {
                    window.scroll({
                        top: 0,
                        behavior: 'smooth'
                    });
                }}>
                    <ArrowUpIcon className="size-5" aria-label="to top"/>
                </button>
            )}
        </footer>
    );
}


import React, { useEffect, useState } from 'react';
import { CubeIcon, SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar({ homeRef, projectRef, blogRef, contactRef  }: { homeRef: React.RefObject<any>, projectRef: React.RefObject<any>, blogRef: React.RefObject<any>, contactRef: React.RefObject<any> }) {
    const [dark, setDark] = React.useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        {
            name: 'Home',
            ref: homeRef
        },
        {
            name: 'Projects',
            ref: projectRef
        },
        {
            name: 'Blog',
            ref: blogRef
        },
        {
            name: 'Contact',
            ref: contactRef
        }
    ];

    const darkModeHandler = () => {
        setDark(!dark);
        document.documentElement.classList.toggle("dark");
    }

    useEffect(() => {
        const mq = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
      
        if (mq.matches) {
          setDark(true);
          document.documentElement.classList.add("dark");
        }
      
        // This callback will fire if the perferred color scheme changes without a reload
        mq.addEventListener("change", (evt) => {
            setDark(evt.matches)
            if (evt.matches) {
                document.documentElement.classList.add("dark");
            }
            else {
                document.documentElement.classList.remove("dark");
            }
        });
      }, []);

    useEffect (() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition < 100) {
                setActiveSection('home');
            } else if (scrollPosition >= projectRef.current?.offsetTop - 100 && scrollPosition < blogRef.current?.offsetTop - 100) {
                setActiveSection('projects');
            } else if (scrollPosition >= blogRef.current?.offsetTop - 100 && scrollPosition < contactRef.current.offsetTop - 100) {
                setActiveSection('blog');
            } else if (scrollPosition >= contactRef.current.offsetTop - 100 ) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);


    return (
        <header className="h-[--header-height] fixed top-0 left-0 right-0 border-b border-gray-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
            <div className='flex self-start h-full absolute align-middle items-center pl-2'>
                <CubeIcon className="dark:text-white size-5" />
                <p className='align-middle pl-2 dark:text-white font-mono'>Zach Clare</p>
            </div>

            <nav className='align-middle justify-center items-center h-full space-x-1 hidden md:flex font-mono'>
                {navItems.map((navitem) => (
                    <a key={navitem.name} href={`#${navitem.name}`} className={`text-sm rounded-full px-3 py-1 ${activeSection === navitem.name.toLowerCase() ? 'font-bold bg-black dark:bg-white text-white dark:text-black' : 'font-light hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white'}`}
                        onClick={() => {navitem.ref.current?.scrollIntoView({
                            behavior: 'smooth',
                          }); }}>{navitem.name}</a>
                ))}
            </nav>
            <div className='flex align-middle items-center h-full absolute top-0 right-0 pr-2'>
                <button className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700' onClick={() => darkModeHandler()}>
                    {
                        dark ? <MoonIcon className="size-5 dark:text-white" aria-label='dark mode'/> : <SunIcon className="size-5 dark:text-white" aria-label='light mode' />
                    }
                </button>
                <button className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden'>
                    <Bars3Icon className="size-5 dark:text-white" aria-label='open menu' />
                </button>

            </div>
        </header>
    );
}


import React, { useEffect, useState } from 'react';
import { CubeIcon, SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes'

export default function Navbar({ blogNav = false }: { blogNav?: boolean }) {
    const { theme, setTheme } = useTheme();
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Projects', id: 'projects' },
        { name: 'Blog', id: 'blog' },
        { name: 'Contact', id: 'contact' },
    ];


    const darkModeHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    /* only activate the nice scrolling on the front page */
    if (!blogNav) {
        useEffect(() => {
            const handleScroll = () => {
                const sections = navItems.map(item => ({
                    id: item.id,
                    element: document.getElementById(item.id)
                }));
    
                const scrollPosition = window.scrollY;
                for (const { id, element } of sections) {
                    if (element) {
                        const { offsetTop } = element;
                        if (scrollPosition >= offsetTop - 100) {
                            setActiveSection(id);
                        }
                    }
                }
            };
    
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [activeSection]);
    }

    return (
        <header className="h-[--header-height] fixed top-0 left-0 right-0 border-b border-gray-200 bg-slate-50 dark:bg-slate-800 dark:border-slate-700">
            <div className='flex self-start h-full absolute align-middle items-center pl-2'>
                <CubeIcon className="dark:text-white size-5" />
                <p className='align-middle pl-2 dark:text-white font-mono'>Zach Clare</p>
            </div>

            <nav className='align-middle justify-center items-center h-full space-x-1 hidden md:flex font-mono'>
                {
                    !blogNav ? 
                    navItems.map((navItem) => (
                        <a key={navItem.name} href={`#${navItem.id}`} className={`text-sm rounded-full px-3 py-1 ${activeSection === navItem.id ? 'font-bold bg-black dark:bg-white text-white dark:text-black' : 'font-light hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white'}`}>
                            {navItem.name}
                        </a>
                    ))
                    :
                    <a href={`/`} className="text-sm rounded-full px-3 py-1 font-light hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white">Home</a>
                        
                }
            </nav>
            <div className='flex align-middle items-center h-full absolute top-0 right-0 pr-2'>
                <button className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700' 
                onClick={() => darkModeHandler()}
                >
                    {
                        theme == "dark" ? <MoonIcon className="size-5 dark:text-white" aria-label='dark mode'/> : <SunIcon className="size-5 dark:text-white" aria-label='light mode' />
                    }
                </button>
                <button className='p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden'>
                    <Bars3Icon className="size-5 dark:text-white" aria-label='open menu' />
                </button>

            </div>
        </header>
    );
}


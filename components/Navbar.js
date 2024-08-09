"use client"
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DarkMode from "./DarkMode";
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');
                if (top >= offset && top < offset + height) {
                    setActiveLink(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className='z-50 fixed top-6 w-full flex justify-center'>
            <div className="rounded-full bg-gradient-to-r p-0.5 w-[75vw] from-blue-300 to-purple-300 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] ">
                <div className='bg-light bg-opacity-90 dark:bg-opacity-85 dark:bg-black rounded-full w-full py-2 flex items-center justify-between text-black dark:text-light'>
                    <div className='flex items-center gap-20'>
                        <Link href={'/'} className='font-pacifico hover:scale-[1.1] transition-transform duration-300 text-4xl px-12 cursor-pointer'>Shariq</Link>
                    </div>
                    <ul className='flex items-center text-lg gap-10'>
                        <Link
                            href={'/'}
                            className={`${activeLink === 'Home' ? 'scale-[1.1] font-semibold' : ''} cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                            onClick={() => setActiveLink('Home')}
                        >
                            Home
                            <div className={`${activeLink === 'Home' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                        <Link
                            href={'#About'}
                            className={`${activeLink === 'About' ? 'scale-[1.1] font-semibold' : ''} cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                            onClick={() => setActiveLink('About')}
                        >
                            About
                            <div className={`${activeLink === 'About' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                        <Link
                            href={'#Projects'}
                            className={`${activeLink === 'Projects' ? 'scale-[1.1] font-semibold' : ''} cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                            onClick={() => setActiveLink('Projects')}
                        >
                            Projects
                            <div className={`${activeLink === 'Projects' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                        <Link
                            href={'#Skills'}
                            className={`${activeLink === 'Skills' ? 'scale-[1.1] font-semibold' : ''} cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                            onClick={() => setActiveLink('Skills')}
                        >
                            Skills
                            <div className={`${activeLink === 'Skills' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                    </ul>
                    <div className='flex items-center justify-center gap-2 text-sm'>
                        <DarkMode />
                        <Link href={'#Contact'}>
                            <button className='text-light rounded-full mx-2 px-8 py-4 bg-[#3c096c] hover:bg-[#5a189a] text-base'>Contact me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar

"use client"
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
    const [toggle, setToggle] = useState(true)
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
                <div className='bg-[rgba(0,0,0,0.8)] rounded-full w-full py-2 flex items-center justify-between text-white'>
                    <div className='flex items-center gap-20'>
                        <Link href={'/'} className='font-pacifico text-4xl px-12 cursor-pointer'>Shariq</Link>
                    </div>
                    <ul className='flex items-center text-lg gap-10'>
                        <Link
                            href={'/'}
                            className={`cursor-pointer`}
                            onClick={() => setActiveLink('Home')}
                        >
                            Home
                            <div className={`${activeLink === 'Home' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                        <Link
                            href={'#About'}
                            className={`cursor-pointer`}
                            onClick={() => setActiveLink('About')}
                        >
                            About
                            <div className={`${activeLink === 'About' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                        <Link
                            href={'#Projects'}
                            className={`cursor-pointer`}
                            onClick={() => setActiveLink('Projects')}
                        >
                            Projects
                            <div className={`${activeLink === 'Projects' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                        <Link
                            href={'#Skills'}
                            className={`cursor-pointer`}
                            onClick={() => setActiveLink('Skills')}
                        >
                            Skills
                            <div className={`${activeLink === 'Skills' ? 'w-full h-1 mt-1 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                        </Link>
                    </ul>
                    <div className='flex items-center justify-center gap-2 text-sm'>
                        <button onClick={() => setToggle(!toggle)}
                            className="h-10 flex items-center justify-center w-12 rounded-lg p-1 hover:bg-[#3c096c]">
                            {toggle ? <svg xmlns="http://www.w3.org/2000/svg" className='fill-white block w-5 -rotate-[10deg]' viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" /></svg> : <svg class="fill-yellow-500 w-8 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>}

                        </button>
                        <Link href={'#Contact'}>
                            <button className='rounded-full mx-2 px-8 py-4 bg-[#3c096c] hover:bg-[#5a189a] text-base'>Contact me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar

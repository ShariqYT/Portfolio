"use client"
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DarkMode from "./DarkMode";
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);

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
        <header className='z-[999] fixed lg:top-6 w-[100vw] lg:flex justify-center'>
            <div className="lg:rounded-full bg-gradient-to-r p-0.5 lg:w-[75vw] w-[100vw] rounded-b-xl from-blue-300 to-purple-300 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] ">
                <div className='bg-light bg-opacity-90 dark:bg-opacity-85 dark:bg-black lg:rounded-full rounded-b-xl w-full py-4 lg:py-2 flex items-center justify-between text-black dark:text-light'>
                    <div className='flex items-center gap-20'>
                        <Link href={'/'} className='font-pacifico hover:scale-[1.1] transition-transform duration-300 text-4xl px-6 lg:px-12 cursor-pointer'>Shariq</Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className='hidden lg:flex items-center text-lg gap-10'>
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

                    <div className='flex items-center justify-center gap-4 lg:gap-2 text-sm'>
                        <DarkMode />

                        {/* Hamburger Menu Icon */}
                        <div className="lg:hidden block pr-4 transition-all duration-300">
                            {!isOpen ? (
                                <svg onClick={() => setIsOpen(!isOpen)} className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                                    <linearGradient id="SVGID_1__ZGA71TdrorGb_gr1" x1="33.414" x2="14.586" y1="1.586" y2="20.414" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6560fe"></stop><stop offset=".033" stopColor="#6f6afe"></stop><stop offset=".197" stopColor="#9a97fe"></stop><stop offset=".362" stopColor="#bfbdff"></stop><stop offset=".525" stopColor="#dbdaff"></stop><stop offset=".687" stopColor="#efeeff"></stop><stop offset=".846" stopColor="#fbfbff"></stop><stop offset="1" stopColor="#fff"></stop></linearGradient><path fill="url(#SVGID_1__ZGA71TdrorGb_gr1)" d="M38.5,7.5h-29c-1.105,0-2,0.895-2,2v3c0,1.105,0.895,2,2,2h29c1.105,0,2-0.895,2-2v-3 C40.5,8.395,39.605,7.5,38.5,7.5z"></path><linearGradient id="SVGID_00000064320163121433228050000006376363254507691938__ZGA71TdrorGb_gr2" x1="33.414" x2="14.586" y1="14.586" y2="33.414" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6560fe"></stop><stop offset=".033" stopColor="#6f6afe"></stop><stop offset=".197" stopColor="#9a97fe"></stop><stop offset=".362" stopColor="#bfbdff"></stop><stop offset=".525" stopColor="#dbdaff"></stop><stop offset=".687" stopColor="#efeeff"></stop><stop offset=".846" stopColor="#fbfbff"></stop><stop offset="1" stopColor="#fff"></stop></linearGradient><path fill="url(#SVGID_00000064320163121433228050000006376363254507691938__ZGA71TdrorGb_gr2)" d="M38.5,20.5h-29c-1.105,0-2,0.895-2,2v3 c0,1.105,0.895,2,2,2h29c1.105,0,2-0.895,2-2v-3C40.5,21.395,39.605,20.5,38.5,20.5z"></path><linearGradient id="SVGID_00000121250615449542995740000017490919689036045745__ZGA71TdrorGb_gr3" x1="33.414" x2="14.586" y1="27.586" y2="46.414" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6560fe"></stop><stop offset=".033" stopColor="#6f6afe"></stop><stop offset=".197" stopColor="#9a97fe"></stop><stop offset=".362" stopColor="#bfbdff"></stop><stop offset=".525" stopColor="#dbdaff"></stop><stop offset=".687" stopColor="#efeeff"></stop><stop offset=".846" stopColor="#fbfbff"></stop><stop offset="1" stopColor="#fff"></stop></linearGradient><path fill="url(#SVGID_00000121250615449542995740000017490919689036045745__ZGA71TdrorGb_gr3)" d="M38.5,33.5h-29c-1.105,0-2,0.895-2,2v3 c0,1.105,0.895,2,2,2h29c1.105,0,2-0.895,2-2v-3C40.5,34.395,39.605,33.5,38.5,33.5z"></path><path fill="none" stroke="#8251fe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M36.149,7.5H38.5c1.105,0,2,0.895,2,2v3c0,1.105-0.895,2-2,2H17.979"></path><path fill="none" stroke="#8251fe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M12.957,14.5H9.5c-1.105,0-2-0.895-2-2v-3c0-1.105,0.895-2,2-2h21.33"></path><path fill="none" stroke="#8251fe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13.34,27.5H9.5c-1.105,0-2-0.895-2-2v-3c0-1.105,0.895-2,2-2h19.995"></path><path fill="none" stroke="#8251fe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M35,20.5h3.5c1.105,0,2,0.895,2,2v3c0,1.105-0.895,2-2,2H18.489"></path><path fill="none" stroke="#8251fe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M13.468,40.5H9.5c-1.105,0-2-0.895-2-2v-3c0-1.105,0.895-2,2-2h19.585"></path><path fill="none" stroke="#8251fe" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M34.191,33.5H38.5c1.105,0,2,0.895,2,2v3c0,1.105-0.895,2-2,2H18.497"></path>
                                </svg>
                            ) : (
                                <svg onClick={() => setIsOpen(!isOpen)} className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 64 64">
                                    <linearGradient id="fbsFAcPTNuInJg1GESjdha_52134_gr1" x1="32" x2="32" y1="7.001" y2="56.998" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#fbsFAcPTNuInJg1GESjdha_52134_gr1)" d="M49.757,56.999c-0.768,0-1.536-0.292-2.121-0.877L32,40.485L16.364,56.121 c-1.17,1.169-3.073,1.169-4.243,0l-4.243-4.243c-1.17-1.17-1.17-3.073,0-4.243L23.515,32L7.879,16.364 c-1.17-1.17-1.17-3.073,0-4.243l4.243-4.243c1.169-1.17,3.072-1.171,4.243,0L32,23.515L47.636,7.879c1.17-1.171,3.073-1.17,4.243,0 l4.243,4.243c1.17,1.17,1.17,3.073,0,4.243L40.485,32l15.636,15.636c1.17,1.17,1.17,3.073,0,4.243l-4.243,4.243 C51.293,56.706,50.525,56.999,49.757,56.999z M32,37.657l17.05,17.05c0.39,0.39,1.025,0.389,1.415,0l4.243-4.243 c0.39-0.39,0.39-1.024,0-1.415L37.657,32l17.05-17.05c0.39-0.39,0.39-1.024,0-1.415l-4.243-4.243c-0.39-0.39-1.025-0.391-1.415,0 L32,26.343L14.95,9.293c-0.39-0.39-1.025-0.389-1.415,0l-4.243,4.243c-0.39,0.39-0.39,1.024,0,1.415L26.343,32L9.293,49.05 c-0.39,0.39-0.39,1.024,0,1.415l4.243,4.243c0.389,0.389,1.024,0.39,1.415,0L32,37.657z"></path><linearGradient id="fbsFAcPTNuInJg1GESjdhb_52134_gr2" x1="32" x2="32" y1="11.94" y2="52.06" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#fbsFAcPTNuInJg1GESjdhb_52134_gr2)" d="M52.061 14.061L49.939 11.939 32 29.879 14.061 11.939 11.939 14.061 29.879 32 11.939 49.939 14.061 52.061 32 34.121 49.939 52.061 52.061 49.939 34.121 32z"></path>
                                </svg>
                            )}
                        </div>

                        <Link className="lg:block hidden" href={'#Contact'}>
                            <button className=' text-light rounded-full mx-2 px-8 py-4 bg-[#3c096c] hover:bg-[#5a189a] text-base'>Contact me</button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`${isOpen ? 'translate-y-0' : '-translate-y-[300px]'} -z-[1] rounded-xl transform transition-all duration-300 lg:hidden absolute top-[5.5rem] left-0 lg:rounded-full bg-gradient-to-r p-0.5 lg:w-[75vw] w-full from-blue-300 to-purple-300 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]`}>
                        <ul className='text-center text-lg bg-light bg-opacity-90 dark:bg-opacity-85 rounded-xl dark:bg-black lg:rounded-full w-full py-4 lg:py-2  text-black dark:text-light'>
                            <Link
                                href={'/'}
                                className={`${activeLink === 'Home' ? 'scale-[1.1] font-semibold' : ''} my-4 flex flex-col items-center cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                                onClick={() => setActiveLink('Home')}
                            >
                                Home
                                <div className={`${activeLink === 'Home' ? 'lg:w-full w-16 h-1 mb-2 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                            </Link>
                            <Link
                                href={'#About'}
                                className={`${activeLink === 'About' ? 'scale-[1.1] font-semibold' : ''} my-4 flex flex-col items-center cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                                onClick={() => setActiveLink('About')}
                            >
                                About
                                <div className={`${activeLink === 'About' ? 'lg:w-full w-16 h-1 mb-2 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                            </Link>
                            <Link
                                href={'#Projects'}
                                className={`${activeLink === 'Projects' ? 'scale-[1.1] font-semibold' : ''} my-4 flex flex-col items-center cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                                onClick={() => setActiveLink('Projects')}
                            >
                                Projects
                                <div className={`${activeLink === 'Projects' ? 'lg:w-full w-16 h-1 mb-2 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                            </Link>
                            <Link
                                href={'#Skills'}
                                className={`${activeLink === 'Skills' ? 'scale-[1.1] font-semibold' : ''} my-4 flex flex-col items-center cursor-pointer hover:scale-[1.1] transition-transform duration-300`}
                                onClick={() => setActiveLink('Skills')}
                            >
                                Skills
                                <div className={`${activeLink === 'Skills' ? 'lg:w-full w-16 h-1 mb-2 rounded-full bg-[#7b2cbf]' : ''}`}></div>
                            </Link>
                            <Link className="lg:hidden block" href={'#Contact'}>
                                <button className=' text-light rounded-full mx-2 px-8 py-4 bg-[#3c096c] hover:bg-[#5a189a] text-base'>Contact me</button>
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar

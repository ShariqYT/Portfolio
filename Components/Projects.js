import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Project_1 from '@/public/projects/Project_1.png'
import Project_2 from '@/public/projects/Project_2.png'

const Projects = () => {
    return (
        <section id="Projects" className='relative min-h-screen'>
            {/* Titles */}
            <div className="bg-pink-500 absolute left-[75%] top-[20%] rounded-full w-52 h-32 blur-[150px]"></div>
            <h1 className='text-right sticky -top-10 z-10 text-8xl font-semibold pt-40 mb-24 px-44'>P<span className='text-7xl'>ROJECTS</span></h1>

            {/* Background Lines */}
            <div className='absolute top-96 left-96 transform'>
                <div className='rotate-[25deg]'>
                    <div className='absolute -top-48 -left-52 w-2 h-72 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                    <div className='absolute -top-48 -left-52 w-72 h-2 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>

                    <div className='absolute bottom-20 right-24 w-2 h-72 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                    <div className='absolute bottom-20 right-24 w-72 h-2 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                </div>
            </div>

            {/* Cards */}
            <div className='card-container flex flex-row gap-12 text-2xl justify-center w-[75%] m-auto'>

                <div className="card hover:shadow-[0_0_50px_rgba(150,50,235,.4)] hover:scale-[1.1] w-96 h-96 flex flex-col gap-4 border-4 border-purple-700 rounded-lg p-6">
                    <div className='flex items-center justify-between'>
                        <h1>#1</h1>
                        <h2 className='font-semibold'>CodesCloth</h2>
                        <Link target='_blank' href="https://codescloth.netlify.app/" className='text-sm border border-purple-700 cursor-pointer hover:scale-[1.2] px-4 py-1 rounded-full bg-purple-700 bg-opacity-35 font-semibold'>Visit</Link>
                    </div>
                    <div className='mx-auto'>
                        <Image unoptimized className='rounded-lg border' src={Project_1} alt="project1" width={300} height={300} />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-xs border border-blue-500 bg-blue-500 bg-opacity-35 rounded-full px-2 py-1'>React.js</p>
                        <p className='text-xs border border-gray-400 bg-black bg-opacity-35 rounded-full px-2 py-1'>Next.js</p>
                        <p className='text-xs border border-green-500 bg-green-500 bg-opacity-35 rounded-full px-2 py-1'>MongoDB</p>
                        <p className='text-xs border border-orange-500 bg-orange-500 bg-opacity-35 rounded-full px-2 py-1'>Firebase</p>
                    </div>
                    <p className='text-sm overflow-y-scroll'>
                        CodesCloth is an E-Commerce website where users/customers can buy products like T-Shirts, Mugs, Caps, Hoodies and many more. It comes with many features where it can provides best experience like Purchasing, Checkout, etc. There is a Admin page where admin can add products, promocodes and also see analysis of this website. This website is built in a way that it provides smoothness, fast and easy to use.
                    </p>
                </div>

                <div className="card hover:shadow-[0_0_50px_rgba(150,50,235,.4)] hover:scale-[1.1] w-96 h-96 flex flex-col gap-4 border-4 border-purple-700 rounded-lg p-6">
                    <div className='flex items-center justify-between'>
                        <h1>#2</h1>
                        <h2 className='font-semibold'>BuyMeAChai</h2>
                        <Link target='_blank' href="https://buymeachaiplz.netlify.app/" className='text-sm border border-purple-700 cursor-pointer hover:scale-[1.2] px-4 py-1 rounded-full bg-purple-700 bg-opacity-35 font-semibold'>Visit</Link>
                    </div>
                    <div className='mx-auto'>
                        <Image unoptimized className='rounded-lg border' src={Project_2} alt="project1" width={300} height={300} />
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-xs border border-blue-500 bg-blue-500 bg-opacity-35 rounded-full px-2 py-1'>React.js</p>
                        <p className='text-xs border border-gray-400 bg-black bg-opacity-35 rounded-full px-2 py-1'>Next.js</p>
                        <p className='text-xs border border-green-500 bg-green-500 bg-opacity-35 rounded-full px-2 py-1'>MongoDB</p>
                        <p className='text-xs border border-orange-500 bg-orange-500 bg-opacity-35 rounded-full px-2 py-1'>Firebase</p>
                        <p className='text-xs border border-purple-500 bg-purple-500 bg-opacity-35 rounded-full px-2 py-1'>+2</p>
                    </div>
                    <p className='text-sm overflow-y-scroll'>
                        At BuyMeAChai, we&#39;re all about celebrating those cozy moments and sweet connections. Just like you might buy a friend a cup of coffee to show appreciation or support, here you can do the same—except with a comforting, warm chai.
                    </p>
                </div>

            </div>
            <div className="bg-violet-600 absolute left-[10%] bottom-[10%] rounded-full w-52 h-32 blur-[150px]"></div>
        </section>
    )
}

export default Projects

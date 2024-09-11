import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Cards } from './Cards'
const Projects = () => {
    return (
        <section id="Projects" className='relative min-h-screen lg:mt-0 mt-[12rem]'>
            {/* Titles */}
            <div className="bg-pink-500 absolute left-[25%] lg:left-[75%] top-[20%] rounded-full w-52 h-32 blur-[150px] lg:block hidden"></div>
            <h1 className='dark:text-white text-center lg:text-right text-dark sticky -top-10 z-10 lg:text-8xl text-5xl font-semibold pt-40 mb-24 lg:px-44'>P<span className='lg:text-7xl text-3xl'>ROJECTS</span></h1>

            {/* Background Lines */}
            <div className='absolute top-96 left-96 transform'>
                <div className='lg:rotate-[25deg] rotate-[45deg] absolute -right-10'>
                    <div className='absolute -top-48 -left-52 w-2 lg:h-72 h-52 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                    <div className='absolute -top-48 -left-52 lg:w-72 w-52 h-2 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>

                    <div className='absolute bottom-20 right-24 w-2 lg:h-72 h-52 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                    <div className='absolute bottom-20 right-24 lg:w-72 w-52 h-2 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                </div>
            </div>

            {/* Cards */}
            <div className={`card-container dark:text-white text-dark grid lg:grid-cols-4 grid-cols-1 gap-6 lg:gap-x-52 text-2xl lg:w-[75%] mx-1 ${Cards.length >= 4 ? 'lg:mx-36':'lg:m-auto'}`}>
                {Cards.map((card) => (
                    <div key={card.id} className="card z-[60] backdrop-blur-md dark:bg-black/15 bg-white/15 hover:shadow-[0_0_50px_rgba(150,50,235,.4)] transition-transform duration-200 lg:hover:scale-[1.1] lg:w-96 w-[23rem] lg:h-96 h-[23rem] flex flex-col gap-4 border-4 border-purple-700 rounded-lg p-6">

                        <div className='flex items-center justify-between'>
                            <h1>{card.id}</h1>
                            <h2 className='font-semibold'>{card.title}</h2>
                            <Link target='_blank' href={card.link} className='text-sm border border-purple-700 cursor-pointer hover:scale-[1.2] transition-transform duration-200 px-4 py-1 rounded-full bg-purple-700 bg-opacity-35 font-semibold'>Visit</Link>
                        </div>
                        <div className='mx-auto'>
                            <Image priority unoptimized className='rounded-lg border' src={card.image} alt="project1" width={300} height={300} />
                        </div>
                        <div className='flex items-center gap-2'>
                            {card.tags.map((tag) => (
                                <p key={tag} className='text-xs border border-purple-500 bg-purple-500 bg-opacity-35 rounded-full px-2 py-1'>{tag}</p>
                            ))}
                        </div>
                        <p className='text-sm overflow-y-scroll'>
                            {card.description}
                        </p>
                    </div>
                ))}

            </div>
            <div className="bg-violet-600 absolute left-[10%] bottom-[10%] rounded-full w-52 h-32 blur-[150px] lg:block hidden"></div>
        </section>
    )
}

export default Projects

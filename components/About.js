import React from 'react'

const About = () => {
  return (
    <section id="About" className='relative min-h-screen'>
      <div className="bg-purple-400 absolute right=[70%] lg:right-[80%] top-[20%] rounded-full w-52 h-32 blur-[150px]"></div>
      <h1 className='lg:text-8xl text-5xl dark:text-white text-dark sticky -top-10 z-10 font-semibold lg:text-start text-center pb-16 pt-28 lg:px-20 lg:py-44'>A<span className='lg:text-7xl text-3xl'>BOUT</span> M<span className='lg:text-7xl text-3xl'>E</span></h1>
      <div className='absolute lg:top-96 lg:left-96 transform'>
        <div>
          <div className='absolute top-[39rem] lg:-top-10 left-2 lg:left-32 lg:w-2 w-1 lg:h-72 h-16 shadow-[0_0_40px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
          <div className='absolute top-[42.9rem] lg:-top-10 left-2 lg:left-32 w-16 lg:w-72 h-1 lg:h-2 shadow-[0_0_40px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>

          <div className='absolute lg:-bottom-10 right-2 lg:right-32 w-1 lg:w-2 lg:h-72 h-16 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full'></div>
          <div className='absolute lg:-bottom-10 right-2 lg:right-32 lg:w-72 w-16 h-1 lg:h-2 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full'></div>
        </div>
        <div className='flex font-normal lg:font-medium dark:text-white text-dark flex-col text-md lg:text-2xl justify-center w-[90%] lg:w-[75%] m-auto overflow-x-scroll'>
          <p className='py-2 text-justify'>
            Hello! I&#39;m Mohammad Shariq, a BCA graduate from United University, currently based in Prayagraj, Uttar Pradesh, India. With a solid foundation in web development, I have accumulated 4 years of experience in front-end development and 1 year in back-end development through both academic projects and internships.
          </p>
          <p className='py-2 text-justify'>
            I&#39;m passionate about creating dynamic and engaging websites and am particularly skilled in designing web pages, video editing, and incorporating multimedia elements. My interests also include playing games, photography, and videography, which fuel my creativity and technical skills.
          </p>
          <p className='py-2 text-justify'>
            I am eager to leverage my experience and skills as I work towards becoming a Full-Stack Developer. I&#39;m excited about the opportunity to integrate my front-end and back-end expertise to build comprehensive and innovative web solutions.
          </p>
          <p className='py-2 text-justify'>
            Thank you for taking the time to learn more about me!
          </p>
        </div>
      </div>
      <div className="bg-pink-600 absolute left-[50%] -bottom-[20%] lg:bottom-[30%] rounded-full w-52 h-32 blur-[150px]"></div>
    </section>
  )
}

export default About

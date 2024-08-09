import React from 'react'

const About = () => {
  return (
    <section id="About" className='relative min-h-screen'>
      <div className="bg-purple-400 absolute right-[80%] top-[20%] rounded-full w-52 h-32 blur-[150px]"></div>
      <h1 className='text-8xl dark:text-white text-dark sticky -top-10 z-10 font-semibold px-20 py-44'>A<span className='text-7xl'>BOUT</span> M<span className='text-7xl'>E</span></h1>
      <div className='absolute top-96 left-96 transform'>
        <div>
          <div className='absolute -top-10 left-32 w-2 h-72 shadow-[0_0_40px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
          <div className='absolute -top-10 left-32 w-72 h-2 shadow-[0_0_40px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>

          <div className='absolute -bottom-10 right-32 w-2 h-72 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full'></div>
          <div className='absolute -bottom-10 right-32 w-72 h-2 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full'></div>
        </div>
        <div className='flex font-medium dark:text-white text-dark flex-col text-2xl justify-center w-[75%] m-auto'>
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
      <div className="bg-pink-600 absolute left-[50%] bottom-[30%] rounded-full w-52 h-32 blur-[150px]"></div>
    </section>
  )
}

export default About

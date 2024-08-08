"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Whatsapp from '../public/WhatsAppButtonGreenLarge.png'
import LinkedIn from '../public/linkedin.png'
import Email from '../public/Gmail.png'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const Contact = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        try {
            const res = await fetch('/api/saveContactDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await res.json();

            if (result.success) {
                setFormData({ name: '', email: '', message: '' });

                toast.success(result.message, { duration: 5000, style: { border: '2px solid green', borderRadius: '12px', background: 'rgba(22, 163, 74, 0.35)', color: '#ffffff', backdropFilter: 'blur(100px)' } });

                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ to: email, name, message }),
                });

                const AdminResponse = await fetch('/api/sendEmailToAdmin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ from: email, name, message }),
                });

                router.push('/#Contact');

            } else {
                setFormData({ name: '', email: '', message: '' });

                toast.error(result.error, { duration: 5000, style: { border: '2px solid red', borderRadius: '12px', background: 'rgba(220, 38, 38, 0.35)', color: '#ffffff', backdropFilter: 'blur(100px)' } });
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again later.");

            console.error("Error handling form submission:", error);
        }
    };


    return (
        <section id="Contact" className="relative min-h-screen">

            {/* Titles */}
            <div className="bg-pink-500 absolute left-[75%] top-[20%] rounded-full w-52 h-32 blur-[150px]"></div>
            <div className='mb-24 px-44'>
                <p className='text-right text-8xl font-semibold pt-40 '>C<span className='text-7xl'>ONTACT</span> M<span className='text-7xl'>E</span></p>
                <p className='text-right'>Feel free to contact me any time.</p>
                <p className='text-right'>I will try to get back to you as soon as possible.</p>
            </div>

            {/* Background Lines */}
            <div className='absolute top-96 left-96 transform'>
                <div>
                    <div className='absolute -top-48 -left-52 w-2 h-72 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                    <div className='absolute -top-48 -left-52 w-72 h-2 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>

                    <div className='absolute -bottom-[500px] -right-[1400px] w-2 h-72 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                    <div className='absolute -bottom-[500px] -right-[1400px] w-72 h-2 shadow-[0_0_50px_rgba(150,50,235,1)] bg-purple-600 rounded-full'></div>
                </div>
            </div>

            {/* Form */}
            <div className='flex gap-12 justify-between items-center border-4 border-purple-600 bg-purple-800 bg-opacity-15 hover:shadow-[0_0_50px_rgba(150,50,235,.5)] w-fit mx-auto rounded-lg px-20 pt-14 pb-8 -mt-12'>

                <form className='flex flex-col w-[40vw] text-white' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="text-white block text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="border-purple-600 bg-purple-950 bg-opacity-35 shadow appearance-none border rounded-lg w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-purple-700"
                            id="name"
                            name='name'
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter Name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-white block text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border-purple-600 bg-purple-950 bg-opacity-35 shadow appearance-none border rounded-lg w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-purple-700 focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-white block text-sm font-bold mb-2" htmlFor="message">
                            Message (min Characters: 50)
                        </label>
                        <textarea
                            className="border-purple-600 bg-purple-950 bg-opacity-35 resize-none shadow appearance-none border rounded-lg w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-purple-700"
                            id="message"
                            name='message'
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter Message"
                            minLength={100}
                            maxLength={1000}
                            required
                            rows={5}
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>

                </form>

                {/* Social Media Links */}
                <div className='bg-purple-900 hover:scale-[1.1] hover:shadow-[0_0_50px_rgba(150,50,235,0.75)] flex flex-col gap-4 px-16 py-20 rounded-lg'>
                    <Link target='_blank' href={"https://api.whatsapp.com/send?phone=+918545994449&text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you!"} className='justify-center hover:scale-[1.2] hover:drop-shadow-[0_0_10px_rgba(23,252,3,0.7)] flex items-center gap-4'>
                        <Image priority src={Whatsapp} unoptimized alt="Whatsapp" width={250} height={250} />
                    </Link>
                    <Link target='_blank' href={"mailto:shariqmohd737@gmail.com"} className='flex justify-center items-center gap-2'>
                        <button className='font-semibold text-lg flex justify-center items-center hover:scale-[1.2] hover:shadow-[0_0_10px_rgba(252,24,3,1)] gap-2 border-2 border-red-600 rounded-xl px-16 py-4 bg-red-600 bg-opacity-35'>
                            <Image priority src={Email} unoptimized alt="Email" width={25} height={25} />
                            Email Me
                        </button>
                    </Link>
                    <Link target='_blank' href={"https://www.linkedin.com/in/mohd-shariq-sheikh/"} className='flex justify-center items-center gap-2'>
                        <button className='font-semibold text-lg flex justify-center items-center hover:scale-[1.2] hover:shadow-[0_0_10px_rgba(8,145,178,1)] gap-2 border-2 border-cyan-600 rounded-xl px-16 py-4 bg-cyan-600 bg-opacity-35'>
                            <Image priority src={LinkedIn} unoptimized alt="Email" width={25} height={25} />
                            LinkedIn
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-violet-600 absolute left-[80%] bottom-[10%] rounded-full w-52 h-32 blur-[150px]"></div>
        </section>
    )
}

export default Contact

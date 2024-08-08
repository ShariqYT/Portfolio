import Image from 'next/image';
import React from 'react';
import html from '@/public/img/html.png';
import css from '@/public/img/css3.png';
import js from '@/public/img/javascript.png';
import bootstrap from '@/public/img/bootstrap.png';
import tailwindcss from '@/public/img/tailwind-css.png';
import reactjs from '@/public/img/react.png';
import nextjs from '@/public/img/nextjs.png';
import django from '@/public/img/django.png';
import mongodb from '@/public/img/mongodb.png';
import sql from '@/public/img/sql.png';
import firebase from '@/public/img/firebase.png';
import java from '@/public/img/java.png';
import python from '@/public/img/python.png';

const SkillCircle = ({ percent, img, color, label }) => {
    const radius = 52; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percent / 100) * circumference;
    return (
        <div
        className="mx-auto relative flex flex-col justify-center items-center w-fit hover:scale-[1.8] scale-[1.5]"
        style={{
            filter: `drop-shadow(0 0 50px ${color})`,
        }}
      >
            <svg className="progress-ring " viewBox="0 0 120 120" width="150" height="150">
                <circle
                    className="progress-ring__background"
                    stroke="#1c1c1c" // Background circle color
                    strokeWidth="8"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                <circle
                    className={`progress-ring__circle`}
                    stroke={color} // Foreground circle color
                    strokeWidth="12"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                    style={{ strokeDasharray: circumference, strokeDashoffset }}
                />
            </svg>
            <div className="progress-text flex justify-center flex-col items-center mx-auto text-xl font-semibold">
            <p>{percent}%</p>
            <Image priority unoptimized src={img} alt={label} width={50} height={50} />
            <p className='text-xs'>{label}</p>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="Skills" className="relative min-h-screen">
            {/* Titles */}
            <div className="bg-violet-500 absolute right-[75%] top-[20%] rounded-full w-52 h-32 blur-[150px]"></div>
            <h1 className="text-left sticky -top-20 z-10 text-8xl font-semibold p-44">
                S<span className="text-7xl">KILLS</span>
            </h1>

            {/* Background Lines */}
            <div className="absolute top-96 left-96 transform">
                <div className="rotate-[60deg] absolute left-[1100px]">
                    <div className="absolute -top-48 -left-52 w-2 h-72 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full"></div>
                    <div className="absolute -top-48 -left-52 w-72 h-2 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full"></div>

                    <div className="absolute bottom-20 right-24 w-2 h-72 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full"></div>
                    <div className="absolute bottom-20 right-24 w-72 h-2 shadow-[0_0_40px_rgba(150,50,235,1)] bg-pink-600 rounded-full"></div>
                </div>
            </div>

            {/* Skills */}
            <div className="skills-container grid grid-cols-3 gap-y-32 mt-4 pb-20">
                <SkillCircle percent={95} img={html} color={'orange'} label="HTML" />
                <SkillCircle percent={90} img={css} color={'#3b82f6'} label="CSS" />
                <SkillCircle percent={80} img={js} color={'yellow'} label="JS" />
                <SkillCircle percent={96} img={bootstrap} color={'#6600ff'} label="Bootstrap" />
                <SkillCircle percent={93} img={tailwindcss} color={'#0088ff'} label="TailwindCSS" />
                <SkillCircle percent={90} img={reactjs} color={'#06b6d4'} label="React.Js" />
                <SkillCircle percent={89} img={nextjs} color={'#ffffff'} label="Next.Js" />
                <SkillCircle percent={60} img={django} color={'lime'} label="Django" />
                <SkillCircle percent={90} img={mongodb} color={'lime'} label="MongoDB" />
                <SkillCircle percent={70} img={sql} color={'blue'} label="SQL" />
                <SkillCircle percent={80} img={firebase} color={'orange'} label="Firebase" />
                <SkillCircle percent={50} img={java} color={'orange'} label="Java" />
                <SkillCircle percent={75} img={python} color={'lime'} label="Python" />
            </div>

            <div className="bg-violet-600 absolute left-[80%] bottom-[10%] rounded-full w-52 h-32 blur-[150px]"></div>
        </section>
    );
};

export default Skills;

import React from 'react';

const SkillCircle = ({ percent, color, label }) => {
    const radius = 52; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percent / 100) * circumference;
    return (
        <div
        className="mx-auto relative flex flex-col items-center w-fit hover:scale-[1.8] scale-[1.5]"
        style={{
            filter: `drop-shadow(0 0 50px ${color})`,
        }}
      >
            <svg className="progress-ring" width="120" height="120">
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
            <div className="progress-text absolute top-1/2 transform -translate-y-1/2 text-xl font-semibold">
            <p>{percent}%</p>
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
                <SkillCircle percent={95} color={'orange'} label="HTML" />
                <SkillCircle percent={85} color={'#3b82f6'} label="CSS" />
                <SkillCircle percent={80} color={'yellow'} label="JS" />
                <SkillCircle percent={96} color={'#6600ff'} label="Bootstrap" />
                <SkillCircle percent={93} color={'#0088ff'} label="TailwindCSS" />
                <SkillCircle percent={90} color={'#06b6d4'} label="React.Js" />
                <SkillCircle percent={89} color={'#ffffff'} label="Next.Js" />
                <SkillCircle percent={60} color={'lime'} label="Django" />
                <SkillCircle percent={90} color={'lime'} label="MongoDB" />
                <SkillCircle percent={70} color={'blue'} label="SQL" />
                <SkillCircle percent={80} color={'orange'} label="Firebase" />
                <SkillCircle percent={50} color={'orange'} label="Java" />
                <SkillCircle percent={75} color={'lime'} label="Python" />
            </div>

            <div className="bg-violet-600 absolute left-[80%] bottom-[10%] rounded-full w-52 h-32 blur-[150px]"></div>
        </section>
    );
};

export default Skills;

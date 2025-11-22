import React from "react";

export default function Skill(){
    const skills = [
        { name: "HTML", level: "95%" },
        { name: "CSS / Tailwind", level: "80%" },
        { name: "JavaScript", level: "75%" },
        { name: "React JS", level: "80%" },
        { name: "Bootstrap", level: "75%" },
    ];

    return (
        <>
            <section className='bg-gray-100 py-16' id="skills">
                <h2 className='text-center font-bold text-indigo-600 text-4xl'>My Skill</h2>
                <p className='text-center text-gray-600 mt-2 mb-10'>Technologies I Work With 👇</p>

                <div className='max-w-4xl mx-auto px-6'>
                    {skills.map((skill, index) => (
                        <div key={index} className='mb-6'>
                            <div className='flex justify-between mb-1'>
                                <span className='text-gray-800 font-medium'>{skill.name}</span>
                                <span className='text-gray-600'>{skill.level}</span>
                            </div>

                            <div className='w-full bg-gray-300 h-2 rounded-lg'>
                                <div
                                    className='bg-indigo-600 h-2 rounded-lg transition-all duration-700'
                                    style={{ width: skill.level }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
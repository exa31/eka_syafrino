'use client';

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
        }); // initialize AOS
    }, []);

    return (
        <div id="about" className="bg-[#0f172a] py-20 px-20 text-white">
            <div className="container mx-auto">
                <div className="flex items-center text-justify">
                    <div data-aos="fade-right" className="grow flex-1">
                        <h1 className="text-6xl font-bold mb-10"><span className="text-[#00ff0d]">A</span>bout</h1>
                        <p>
                            I am a graduate of Computer and Networking Engineering from SMKN 1 Dukuhturi, graduated in 2024. I have an intermediate foundation in server workings and configuration, with expertise in ExpressJS. I have also completed the MERN class at Eduwork, where I gained proficiency in MongoDB, React JS, Express JS, and Node JS. As part of my learning journey, I have successfully developed and deployed a project landing page, an e-commerce website, and various other web applications. I am passionate about creating innovative solutions and constantly expanding my knowledge in the field of software development.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="p-10">
                        <div className="border-b-2 w-72 animate-spin h-[295px] border-t-2 border-t-[#00ff0d] border-b-[#00ff0d] absolute mt-3 border-r border-r-transparent border-l border-l-transparent rounded-full">
                        </div>

                        <Image src={'/images/eka.png'} className="w-72 overflow-hidden rounded-full" alt="my image" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    );
};
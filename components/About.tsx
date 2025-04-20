'use client';

import Image from "next/image";
import {useEffect} from "react";
import AOS from "aos";

export default function About() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
        }); // initialize AOS
    }, []);

    return (
        <div id="about" className="bg-[#0f172a] py-20 sm:px-20 text-white">
            <div className="container mx-auto">
                <div className="flex items-center lg:flex-row flex-col-reverse text-justify">
                    <div data-aos="fade-right" className="grow flex-1">
                        <h1 className="text-6xl font-bold mb-10"><span className="text-[#00ff0d]">A</span>bout</h1>
                        <p>
                            Hi, I’m a graduate of Computer Network Engineering (TKJ) with a strong interest in website
                            and mobile development. Currently, I’m working as a Fullstack Developer, where I’ve gained
                            hands-on experience building fullstack web applications. I’ve participated in a MERN
                            Bootcamp, which helped solidify my skills in both frontend and backend development. Besides
                            web development, I’ve also developed proficiency in mobile development. I’m open to
                            opportunities as a Frontend Developer, Backend Developer, Mobile Developer, or Fullstack
                            Developer.
                        </p>
                    </div>
                    <div data-aos="fade-left" className="sm:p-10 mb-8">
                        {/* <div className="border-b-2 w-72 animate-spin h-[295px] border-t-2 border-t-[#00ff0d] border-b-[#00ff0d] absolute mt-3 border-r border-r-transparent border-l border-l-transparent rounded-full">
                        </div> */}

                        <Image src={'/images/eka.png'} className="sm:w-72 w-44 overflow-hidden rounded-full"
                               alt="my image" width={500} height={500}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
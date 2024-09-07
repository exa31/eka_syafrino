"use client";

import { Tabs } from "./ui/tabs";
import FoodWeb from "./tabs/FoodWeb";
import HijjaWeb from "./tabs/HijjaWeb";
import MovieWeb from "./tabs/MovieWeb";
import AppleWeb from "./tabs/AppleWeb";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";


export default function Skills() {
    const tabs = [
        {
            title: "Apple Store",
            value: "Apple Store",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Apple Store</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://apple-store-cyber.vercel.app/"><IoMdOpen /></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://github.com/exa31/apple_store_cyber"><FaGithub /></a>
                        </div>
                    </div>
                    <AppleWeb />
                </div>
            ),
        },
        {
            title: "Food Store",
            value: "Food Store",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Food Store</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://studikasus-edu-fe.vercel.app/"><IoMdOpen /></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://github.com/exa31/studikasusEduFe"><FaGithub /></a>
                        </div>
                    </div>
                    <FoodWeb />
                </div>
            ),
        },
        {
            title: "Cloning Hijja Store",
            value: "Cloning Hijja Store",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Cloning Hijja Store</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://tugas-sisko.vercel.app/"><IoMdOpen /></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://github.com/exa31/tugas-sisko"><FaGithub /></a>
                        </div>
                    </div>
                    <HijjaWeb />
                </div>
            ),
        },
        {
            title: "Landing Page Movie",
            value: "Landing Page Movie",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Landing Page Movie</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://movie-landing-page-flame.vercel.app/"><IoMdOpen /></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300" href="https://github.com/exa31/movie-landing-page"><FaGithub /></a>
                        </div>
                    </div>
                    <MovieWeb />
                </div>
            ),
        },
    ];

    return (
        <div id="projects" className="py-20 bg-[#0f172a]">
            <h3 data-aos="zoom-in-left" className="text-6xl font-bold mb-10 text-center"><span className="text-[#00ff0d]">P</span>rojects</h3>
            <div data-aos="zoom-in-right" className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
                <Tabs tabs={tabs} activeTabClassName="bg-blue" />
            </div>
        </div>
    );
}
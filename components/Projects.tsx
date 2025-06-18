"use client";

import {Tabs} from "./ui/tabs";
import {FaGithub} from "react-icons/fa";
import {IoMdOpen} from "react-icons/io";
import ImageTabs from "@/components/ui/ImageTabs";


export default function Skills() {
    const tabs = [
        {
            title: "Apple Store",
            value: "Apple Store",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Apple Store</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://apple-store-cyber.vercel.app/"><IoMdOpen/></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://github.com/exa31/apple_store_cyber"><FaGithub/></a>
                        </div>
                    </div>
                    <ImageTabs src={'/images/apple.png'} alt={'Apple Store'}/>
                </div>
            ),
        },
        {
            title: "Food Store",
            value: "Food Store",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Food Store</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://studikasus-edu-fe.vercel.app/"><IoMdOpen/></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://github.com/exa31/studikasusEduFe"><FaGithub/></a>
                        </div>
                    </div>
                    <ImageTabs src={'/images/food.png'} alt={'Food Store'}/>
                </div>
            ),
        },
        {
            title: "Cloning Hijja Store",
            value: "Cloning Hijja Store",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Cloning Hijja Store</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://tugas-sisko.vercel.app/"><IoMdOpen/></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://github.com/exa31/tugas-sisko"><FaGithub/></a>
                        </div>
                    </div>
                    <ImageTabs src={'/images/hijja.png'} alt={'Cloning Hijja Store'}/>
                </div>
            ),
        },
        {
            title: "Landing Page Movie",
            value: "Landing Page Movie",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Landing Page Movie</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://movie-landing-page-flame.vercel.app/"><IoMdOpen/></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://github.com/exa31/movie-landing-page"><FaGithub/></a>
                        </div>
                    </div>
                    <ImageTabs src={'/images/movie.png'} alt={'Landing Page Movie'}/>
                </div>
            ),
        },
        {
            title: "Finance Trakers",
            value: "Finance Trakers",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Finance Trakers</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://ftraker-exa.vercel.app/"><IoMdOpen/></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://github.com/exa31/FtrakerExa"><FaGithub/></a>
                        </div>
                    </div>
                    <ImageTabs src={'/images/finance.png'} alt={'Finance Trakers'}/>
                </div>
            ),
        },
        {
            title: "Cyber mobile",
            value: "Cyber mobile",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>Cyber Mobile</h3>
                        <div className="flex gap-4 ">
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://drive.google.com/file/d/1qv23JEh3JRxx2vdLU574mlgABVgO0OmN/view?usp=drive_link"><IoMdOpen/></a>
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://github.com/exa31/cyber-mobile"><FaGithub/></a>
                        </div>
                    </div>
                    <ImageTabs size={'Mobile'} src={'/images/cyberMobile.png'} alt={'Cyber mobile'}/>
                </div>
            )
        },
        {
            title: "EBlog",
            value: "EBlog",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#0f172a] to-[#4a75db]">
                    <div className="flex justify-between">
                        <h3>EBlog</h3>
                        <div className="flex gap-4 ">
                            {/*<a target="_blank" className="hover:text-[#00ff0d] duration-300"*/}
                            {/*   href="https://blog-laravel-main-tpipmx.laravel.cloud/"><IoMdOpen/></a>*/}
                            <a target="_blank" className="hover:text-[#00ff0d] duration-300"
                               href="https://github.com/exa31/blog-laravel"><FaGithub/></a>
                        </div>
                    </div>
                    <ImageTabs src={'/images/blog.png'} alt={'EBlog'}/>
                </div>
            )
        }
    ];

    return (
        <div id="projects" className="py-20 bg-[#0f172a]">
            <h3 data-aos="zoom-in-left" className="text-6xl font-bold mb-10 text-center"><span
                className="text-[#00ff0d]">P</span>rojects</h3>
            <div data-aos="zoom-in-right"
                 className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
                <Tabs tabs={tabs} activeTabClassName="bg-blue"/>
            </div>
        </div>
    );
}
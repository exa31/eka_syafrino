"use client";

import { useEffect } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Aos from "aos";

export default function LogoSkills() {

    useEffect(() => {
        Aos.init({
            duration: 1500,
        }); // initialize AOS
    }, []);

    return (
        <>
            <div id="skills" className="py-20 bg-[#0f172a]">
                <div data-aos="fade-up" className="h-[30rem] mt-10 rounded-md flex flex-col antialiased bg-white dark:bg-[#0f172a] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <h1 className="text-6xl font-bold mb-10"><span className="text-[#00ff0d]">S</span>kills</h1>
                    <InfiniteMovingCards
                        items={Logo}
                        direction="right"
                        pauseOnHover={false}
                        speed="slow"
                    />
                </div>
            </div>
        </>
    );
}



const Logo = [
    {
        name: "Express.js",
        logo: "/images/express.png",
    },
    {
        name: "Node.js",
        logo: "/images/node.png",
    },
    {
        name: "Flutter",
        logo: "/images/flutter.png",
    },
    {
        name: "React.js",
        logo: "/images/react.svg",
    },
    {
        name: "Nuxt.js",
        logo: "/images/nuxt.png",
    },
    {
        name: "Next.js",
        logo: "/images/next.png",
    },
    {
        name: "Typescript",
        logo: "/images/typescript.png",
    },
    {
        name: "Javascript",
        logo: "/images/js.png",
    },
    {
        name: "MongoDB",
        logo: "/images/mongo.png",
    },
    {
        name: "Dart",
        logo: "/images/dart.png",
    },
    {
        name: "Mysql",
        logo: "/images/mysql.png",
    },
    {
        name: "Vue.js",
        logo: "/images/vue.png",
    },
    {
        name: "PHP",
        logo: "/images/php.png",
    },
    {
        name: "Laravel",
        logo: "/images/laravel.png",
    }
];

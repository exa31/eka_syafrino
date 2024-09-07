'use client';

import { BoxesCore } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Header() {

    const el = React.useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings: [
                "I am a <strong>Fullstack Developer</strong>",
                "I am a <strong>Frontend Developer</strong>",
                "I am a <strong>Backend Developer</strong>",
                "I am a <strong>Mobile Developer</strong>",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            cursorChar: "|",
            backDelay: 2000,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <BoxesCore />
            <h1 className={cn("md:text-5xl font-semibold text-xl text-white relative z-20")}>
                Welcome to my portofolio
            </h1>
            <h3 className="text-center text-3xl mt-2 text-neutral-300 relative z-20">
                My name is <span className="text-white">Moh. Eka Syafrino Nazhifan</span>
            </h3>
            <div className="flex items-center ">
                <h3 ref={el} className="text-center inline text-3xl mt-2 text-neutral-300 relative z-20"></h3>
            </div>
        </div>
    )
};
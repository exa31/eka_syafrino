"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export default function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}

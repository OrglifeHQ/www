"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Journals", path: "/journals" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="relative z-[9999] text-white max-md:flex max-md:h-16 max-md:bg-black max-md:px-4 md:py-8">
            <div className="mx-auto flex w-full items-center justify-between md:max-w-7/8">
                <Link
                    href="/"
                    className="font-[Clash_Display] text-2xl leading-[1.5rem] font-bold"
                >
                    ORGLIFE
                </Link>

                {/* Hamburger icon (mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden gap-12 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center justify-center gap-2 font-['Clash_Display'] text-sm uppercase transition-colors duration-200 ${
                                isActive(item.path)
                                    ? "text-blue-500"
                                    : "hover:text-white/50"
                            }`}
                        >
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="fixed top-16 right-0 bottom-0 z-50 flex w-2/3 flex-col gap-6 bg-black px-6 py-8 shadow-lg transition-transform duration-300 md:hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`transition-colors duration-200 ${
                                isActive(item.path)
                                    ? "text-blue-500"
                                    : "hover:text-white/50"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

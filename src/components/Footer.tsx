import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col items-center bg-gradient-to-b from-white/10 to-purple-900 py-16 text-white max-md:px-4 md:py-16">
            <div className="flex h-full w-full flex-col items-start justify-between gap-12 md:max-w-7/8 lg:flex-row">
                {/* Left section */}
                <div className="flex w-full flex-col justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/"
                            className="font-[Clash_Display] text-2xl font-bold"
                        >
                            ORGLIFE
                        </Link>

                        {/* Location */}
                        <div className="mb-8 flex flex-col gap-4">
                            <p>
                                123 Imaginary Ave, Unit 404, Fictional Town, XY
                                <br /> Z12 3AB Fantasyland
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width={20}
                            >
                                <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                            </svg>
                            <p>+9 876-543-2101</p>
                        </div>

                        {/* Email */}
                        <div className="flex gap-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                width={20}
                            >
                                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                            </svg>
                            <p>hello@Montek-template.io</p>
                        </div>
                        <span className="mt-2 block h-0.5 w-24 bg-white"></span>
                    </div>
                    <div className="flex flex-wrap gap-8 font-medium">
                        {["Dribbble", "Behance", "Facebook", "Instagram"].map(
                            (platform) => (
                                <Link
                                    key={platform}
                                    href="#"
                                    className="underline-offset-4 hover:underline"
                                >
                                    {platform}
                                </Link>
                            )
                        )}
                    </div>
                </div>

                {/* Right section */}
                <div className="flex w-full flex-col gap-4 text-right text-base md:max-w-2/5">
                    {[
                        { path: "/", title: "HOME" },
                        { path: "/about", title: "ABOUT" },
                        { path: "/projects", title: "PROJECTS" },
                        { path: "/journals", title: "JOURNALS" },
                        { path: "/contact", title: "CONTACT" },
                    ].map((page, index) => (
                        <Link
                            key={index}
                            href={page.path}
                            className="group flex items-center justify-between border-b border-white/50 py-2 hover:border-white"
                        >
                            {page.title}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                height={24}
                                className="fill-white/50 group-hover:fill-white"
                                // fill="rgba(255, 255, 255, 0.75)"
                            >
                                <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
                            </svg>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Copyright section */}
            <div className="flex flex-col items-center justify-between pt-16 sm:flex-row">
                <p>
                    Copyright © {new Date().getFullYear()} Orglife Industries
                    Pvt. Ltd. | All right reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

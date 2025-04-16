"use client";
import React from "react";
import projects from "../fixtures/gallery/data.json";
import Link from "next/link";
import { motion } from "motion/react";

const Gallery: React.FC = () => {
    return (
        <section className="flex h-full w-full flex-col items-center text-white max-md:px-4 max-md:py-16 md:py-16">
            <div className="w-full md:max-w-7/8">
                <h2 className="font-['Clash_Display'] text-2xl font-semibold uppercase md:text-[2rem]">
                    Projects
                </h2>
                <div className="grid w-full grid-cols-1 gap-8 py-8 text-white sm:grid-cols-2 lg:grid-cols-3">
                    {/* Gallery cards */}
                    {projects.map((project, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.5 }}
                                className="group relative flex flex-col items-start gap-4 overflow-hidden border border-white/25 bg-black p-8"
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 z-0 rotate-y-90 bg-gradient-to-b from-white/10 to-purple-900 opacity-0 transition-transform duration-500 group-hover:rotate-y-180 group-hover:opacity-100" />

                                {/* Content */}
                                <div
                                    className="relative z-10 h-64 w-full bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${project.image})`,
                                    }}
                                ></div>
                                <h4 className="relative z-10 mt-8 text-2xl font-medium text-white md:text-[2rem]">
                                    {project.name}
                                </h4>
                                <Link
                                    className="relative z-10 flex h-12 items-center justify-center border border-white/50 px-8 font-medium text-white transition-all duration-250 group-hover:bg-white group-hover:text-black md:px-12"
                                    href={`/project/${project.slug}`}
                                >
                                    Read more
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

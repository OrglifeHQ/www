"use client";
import React from "react";
import journals from "../fixtures/journals/data.json";
import Link from "next/link";
import { motion } from "framer-motion";

const Journal: React.FC = () => {
    return (
        <section className="flex h-full w-full flex-col items-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tncm91bmQlMjBkYXJrfGVufDB8fDB8fHww')] bg-cover bg-fixed bg-no-repeat py-24 text-white">
            <div className="flex w-full flex-col items-center">
                <div className="w-full px-4 md:max-w-7/8">
                    <h2 className="font-['Clash_Display'] text-2xl font-semibold uppercase md:text-[2rem]">
                        journals
                    </h2>
                </div>
                <motion.div
                    initial={{ y: "-100%", opacity: 0 }} // Start from top
                    whileInView={{ y: 0, opacity: 1 }} // Animate to original position
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        // Add delay if needed
                    }}
                    viewport={{ once: true, amount: 0 }}
                    className="no-scrollbar flex w-full gap-4 overflow-auto px-[3.125%] py-8 text-white md:gap-8 md:px-[6.25%]"
                >
                    {/* Journal cards */}
                    {journals.map((journal, index) => {
                        return (
                            <div
                                key={index}
                                className="group relative flex w-full flex-col items-end gap-24 overflow-hidden bg-black p-8 max-md:min-w-7/8 md:min-w-1/4"
                            >
                                {/* Gradient Overlay */}
                                <div className="to-primary/50 absolute inset-0 z-0 rotate-y-90 bg-gradient-to-b from-white/0 opacity-0 transition-transform duration-500 group-hover:rotate-y-180 group-hover:opacity-100" />

                                {/* Content */}
                                <div className="flex w-full flex-col items-start">
                                    <div className="relative flex h-10 items-center justify-center border-white/50 font-medium group-hover:border-0 md:border md:bg-black md:px-8">
                                        {journal.category_name}
                                    </div>
                                    <h4 className="relative mt-4 font-medium text-white md:mt-8 md:text-[1.25rem]">
                                        {journal.title}
                                    </h4>
                                </div>
                                <Link
                                    className="relative flex items-center justify-center rounded-full border-white p-2 font-medium text-white transition-all duration-250 group-hover:bg-white group-hover:text-black"
                                    href={`/journal/${journal.slug}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        height={48}
                                        fill="currentColor"
                                    >
                                        <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
                                    </svg>
                                </Link>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Journal;

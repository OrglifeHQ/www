"use client";
import React from "react";
import { motion } from "framer-motion";
import services from "../fixtures/services/data.json";

const ServicesSection: React.FC = () => {
    return (
        <section className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black to-purple-900 py-16">
            <div className="mx-auto w-full max-md:px-4 md:max-w-7/8">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12 text-left"
                >
                    <h2 className="mb-3 font-['Clash_Display'] text-2xl font-semibold text-white md:text-[2rem]">
                        SERVICES
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut",
                            }}
                            className="group relative overflow-hidden border border-white/25 p-8"
                        >
                            {/* Hover overlay */}
                            <div className="absolute inset-0 z-10 origin-center rotate-x-90 border-white bg-black opacity-0 transition-transform duration-500 group-hover:rotate-x-180 group-hover:opacity-100"></div>

                            {/* Content */}
                            <div className="relative z-20 flex items-center justify-between">
                                <h3 className="pl-6 text-2xl leading-[1.3] font-medium whitespace-pre-line text-white">
                                    {service.title}
                                </h3>
                                <div className="ml-4 h-[110px] w-[90px]">
                                    <img
                                        src={service.icon}
                                        alt="service icon"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import testimonials from "../fixtures/testimonials/data.json";

const Testimonials: React.FC = () => {
    return (
        <section className="mx-auto flex flex-col items-center gap-8 bg-black py-16 md:py-24">
            {/* Heading */}
            <div className="w-full px-4 md:max-w-7/8 md:px-0">
                <h2 className="text-left font-['Clash_Display'] text-2xl font-semibold text-white uppercase md:text-[2rem]">
                    TESTIMONIALS
                </h2>
            </div>

            {/* Content */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="no-scrollbar flex w-full gap-4 overflow-auto px-[3.125%] md:gap-8 md:px-[6.25%]"
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className="group relative flex min-w-7/8 flex-col gap-8 border border-white/25 p-6 text-white md:min-w-1/4"
                    >
                        <div className="flex items-center gap-8">
                            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="z-50 h-full w-full object-cover"
                                />
                            </div>
                            <div className="z-50 flex flex-col items-start">
                                <h4 className="text-2xl font-semibold">
                                    {testimonial.name}
                                </h4>
                                <p className="text-start text-base text-white/50">
                                    {testimonial.position}
                                </p>
                            </div>
                        </div>
                        <div className="w-full3 z-50 flex flex-col items-start gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                height={32}
                                fill="currentColor"
                            >
                                <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
                            </svg>
                            <p className="italic">{testimonial.quote}</p>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 z-0 rotate-x-90 bg-gradient-to-b from-purple-900 to-white/10 opacity-0 transition-transform duration-500 group-hover:rotate-x-180 group-hover:opacity-100" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Testimonials;

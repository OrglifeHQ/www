import React from "react";
import Link from "next/link";
import BouncingUp from "@/components/BouncingUp";

export const Hero: React.FC = () => {
    return (
        <section className="relative flex w-full flex-col overflow-hidden bg-black max-md:px-4">
            {/* Background Video */}
            <video
                className="absolute inset-0 z-0 h-full w-full object-cover"
                src="/video/hero.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="relative z-10 flex h-full min-h-[calc(100dvh-4rem)] flex-col items-center max-md:justify-center">
                <div className="flex h-full w-full flex-col items-center justify-center md:min-h-[calc(100dvh-4rem)] md:max-w-7/8">
                    <div className="z-50 flex flex-col items-center space-y-4 border-white/75 p-4 md:mb-32 md:max-w-7/8 md:border md:p-12">
                        <p>Over 1500+ customers</p>
                        <div className="mx-auto flex w-full flex-col items-center space-y-4">
                            <h1 className="text-center font-[Clash_Display] text-[2.5rem] leading-[2.75rem] font-medium md:text-[4rem] md:leading-[4rem]">
                                Crafting creative design
                            </h1>
                            <p className="text-center opacity-75">
                                The ultimate solution provider, creator and
                                developer for bla and bla.
                                <br />
                                with our stunning and blezing team and support.
                            </p>
                            <div className="mt-8 flex gap-4 md:mt-16">
                                <Link
                                    href={"/contact"}
                                    className="group relative flex h-12 cursor-pointer items-center justify-center overflow-hidden px-8 font-medium underline-offset-6 transition-all duration-200 max-md:bg-white max-md:text-black md:w-64 md:border md:border-white md:px-4 md:text-black md:hover:text-white"
                                >
                                    Contact us
                                    <div className="transform-all absolute inset-x-0 bottom-0 -z-20 h-full bg-white duration-200 group-hover:bottom-[100%] max-md:hidden"></div>
                                </Link>
                                <Link
                                    href={"/projects"}
                                    className="group relative flex h-12 cursor-pointer items-center justify-center overflow-hidden border-white px-4 font-medium underline-offset-6 transition-all duration-200 max-md:underline md:w-64 md:border md:hover:text-black"
                                >
                                    Our projects
                                    <div className="transform-all absolute inset-x-0 -bottom-[100%] -z-20 h-full bg-white duration-200 group-hover:bottom-0 max-md:hidden"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bouncing Icon */}
                <BouncingUp />
            </div>

            {/* Bottom Text Row */}
            <div className="absolute inset-x-0 bottom-12 z-50 mx-auto hidden w-full items-center justify-center gap-16 text-white md:flex md:max-w-7/8">
                <span className="border-t border-white/50 pt-4">
                    Our visionary team crafts
                    <br />
                    transformative experiences
                </span>
                <span className="border-t border-white/50 pt-4">
                    Enhancing potential and
                    <br />
                    driving prosperity
                </span>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute right-0 bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-b from-transparent to-black max-md:hidden" />
        </section>
    );
};

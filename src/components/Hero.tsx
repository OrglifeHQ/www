import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Character from "@/components/Character";
import Link from "next/link";

export const Hero: React.FC = () => {
    return (
        <section className="relative flex w-full flex-col bg-black">
            <BackgroundBeamsWithCollision className="h-full md:min-h-[calc(100dvh-4rem)]">
                <div className="relative flex h-full w-full flex-col items-start justify-center max-md:py-24 md:min-h-[calc(100dvh-4rem)]">
                    <div className="space-y- float-left mx-auto mb-20 w-full space-y-2 opacity-75 md:max-w-7/8">
                        <p>Over 1500+ customers</p>
                        <div className="float-left mx-auto mb-20 w-full space-y-4">
                            <h1 className="font-[Clash_Display] text-[4vw] leading-[4vw] font-medium">
                                Crafting creative <br /> design
                            </h1>
                            <p className="opacity-75">
                                The ultimate solution provider, creator and
                                developer for bla and bla.
                                <br />
                                with our stunning and blezing team and support.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href={"/contact"}
                                    className="mt-8 flex h-12 items-center justify-center bg-white px-8 font-semibold text-black"
                                >
                                    Contact us
                                </Link>
                                <Link
                                    href={"/projects"}
                                    className="mt-8 flex h-12 items-center justify-center px-4 font-medium underline underline-offset-6"
                                >
                                    Our projects
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Character />

                    {/* Text */}
                    <div className="absolute inset-x-0 bottom-8 z-50 mx-auto flex w-full items-center justify-between md:max-w-7/8">
                        <>
                            <span className="border-t border-white/50 pt-4">
                                Our visionary team crafts
                                <br />
                                transformative experiences
                            </span>
                        </>
                        <span className="block flex size-32 flex-col items-center justify-center gap-2 rounded-full border bg-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                height={64}
                                fill="currentColor"
                            >
                                <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
                            </svg>
                            <span>WORK</span>
                        </span>
                        <>
                            <span className="border-t border-white/50 pt-4">
                                Enhancing potential and
                                <br />
                                driving prosperity
                            </span>
                        </>
                    </div>

                    {/* <SplashCursor /> */}
                    <div className="absolute right-0 bottom-0 left-0 z-0 h-24 w-full bg-gradient-to-b from-transparent to-black"></div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
};

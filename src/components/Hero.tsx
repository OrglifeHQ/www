import React from "react";
import Character from "@/components/Character";
import Link from "next/link";

export const Hero: React.FC = () => {
    return (
        <section className="relative flex w-full flex-col bg-black max-md:px-4">
            <div className="flex h-full flex-col items-center md:min-h-[calc(100dvh-4rem)]">
                <div className="flex h-full w-full flex-col items-start justify-center max-md:py-24 md:min-h-[calc(100dvh-4rem)] md:max-w-7/8">
                    <div className="z-50 float-left space-y-2 opacity-75 md:mb-32 md:max-w-7/8">
                        <p>Over 1500+ customers</p>
                        <div className="mx-auto w-full space-y-4">
                            <h1 className="font-[Clash_Display] text-[2.5rem] leading-[2.75rem] font-medium md:text-[4rem] md:leading-[4rem]">
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
                </div>
            </div>
            {/* Text */}
            <div className="absolute inset-x-0 bottom-12 z-50 mx-auto hidden w-full items-center gap-16 md:flex md:max-w-7/8">
                <>
                    <span className="border-t border-white/50 pt-4">
                        Our visionary team crafts
                        <br />
                        transformative experiences
                    </span>
                </>
                <>
                    <span className="border-t border-white/50 pt-4">
                        Enhancing potential and
                        <br />
                        driving prosperity
                    </span>
                </>
            </div>

            {/* <SplashCursor /> */}
            <div className="absolute right-0 bottom-0 left-0 z-0 h-24 w-full bg-gradient-to-b from-transparent to-black max-md:hidden"></div>
        </section>
    );
};

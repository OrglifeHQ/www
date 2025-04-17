import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Character from "@/components/Character";

export const Hero: React.FC = () => {
    return (
        <section className="relative flex w-full flex-col bg-black">
            <BackgroundBeamsWithCollision className="h-full md:min-h-dvh">
                <div className="relative flex h-full w-full flex-col items-center justify-center max-md:py-24 md:min-h-screen">
                    <span className="text-center font-[Clash_Display] text-[10vw] leading-[8.5vw] font-bold">
                        CREATIVE
                    </span>
                    <Character />
                    <span
                        style={{
                            WebkitTextStroke: "1px white",
                        }}
                        className="z-0 text-center font-[Clash_Display] text-[10vw] leading-[8.5vw] font-bold text-transparent"
                    >
                        DESIGN
                    </span>
                    {/* <SplashCursor /> */}
                    <div className="absolute right-0 bottom-0 left-0 z-0 h-24 w-full bg-gradient-to-b from-transparent to-black"></div>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
};

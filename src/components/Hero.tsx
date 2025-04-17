import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Character from "@/components/Character";

export const Hero: React.FC = () => {
    return (
        <section className="relative flex w-full flex-col bg-black">
            <BackgroundBeamsWithCollision className="h-full min-h-dvh">
                <div className="relative flex h-full min-h-dvh w-full flex-col items-center justify-center">
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
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    );
};

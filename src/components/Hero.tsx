import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export const Hero: React.FC = () => {
  return (
    <section className="relative flex bg-red-500 w-full flex-col">
      <BackgroundBeamsWithCollision className="h-full">
        <div className="flex h-full min-h-dvh w-full items-center justify-center">
          <h1 className="text-center font-[Clash_Display] text-[10vw] leading-[8.5vw] font-bold">
            CREATIVE
            <br />
            DESIGN
          </h1>
          {/* <SplashCursor /> */}
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

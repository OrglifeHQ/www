import React from "react";
import Team from "@/components/Team";

const About: React.FC = () => {
    return (
        <>
            {/* Details section */}
            <section className="flex h-full w-full flex-col items-center bg-cover bg-center py-24 max-md:px-4">
                <div className="flex w-full flex-col gap-16 md:max-w-7/8">
                    {/* Header text */}
                    <div className="flex w-full flex-col items-center gap-4">
                        <h1 className="font-[Clash_Display] text-[8vw] leading-[6vw] font-bold uppercase">
                            About
                        </h1>
                        <p>Introducing our identity</p>
                    </div>

                    {/* Description */}
                    <div
                        id="description"
                        className="flex flex-col gap-4 sm:text-2xl sm:leading-[2.25rem]"
                    >
                        <p>Lorem ipsum dolor sit amet elit.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <p>Lorem ipsum dolor adipisicing elit.</p>
                    </div>
                </div>
            </section>

            {/* Team section */}
            <Team />
        </>
    );
};

export default About;

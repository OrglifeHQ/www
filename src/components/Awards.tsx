import React from "react";
import awards from "../fixtures/awards/data.json";

const Awards: React.FC = () => {
    return (
        <section className="bg-black p-4 py-16 text-white md:px-8">
            <div className="mx-auto flex w-full flex-col gap-8 md:max-w-7/8">
                <h2 className="text-2xl font-medium md:text-[2rem]">AWARDS</h2>

                <div className="space-y-6">
                    {awards.map((award) => (
                        <div
                            key={award.id}
                            className="group relative flex w-full flex-col items-center justify-between p-4 duration-500 max-md:items-start md:flex-row"
                        >
                            {/* Gradient Overlay */}
                            <div className="from-primary/50 absolute inset-0 z-0 rotate-x-90 bg-gradient-to-b to-white/0 opacity-0 transition-transform duration-500 group-hover:rotate-x-180 group-hover:opacity-100" />

                            {/* Left number box */}
                            <div className="z-50 flex h-24 w-24 items-center justify-center bg-white/10">
                                <span className="tracking-0 z-50 text-[1.5rem] font-semibold">
                                    {award.id}
                                </span>
                            </div>

                            {/* Award title */}
                            <div className="z-50 flex-1 px-4 py-4">
                                <p className="tracking-0 text-[1.5rem]">
                                    {award.title}
                                </p>
                            </div>

                            {/* Arrow icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="invisible max-md:h-0 md:visible"
                                height={50}
                                fill="white"
                            >
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
